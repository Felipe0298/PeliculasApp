import { useEffect, useState } from "react";
import { Movie, MovieDBMoviesResponse } from "../interfaces/movieInterface";
import movieDB from "../api/movieDB";

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    })


    const getMovies = async () => {

        const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>("/now_playing")
        const popularPromise = movieDB.get<MovieDBMoviesResponse>("/popular")
        const topRratedPromise = movieDB.get<MovieDBMoviesResponse>("/top_rated")
        const upcomingPromise = movieDB.get<MovieDBMoviesResponse>("/upcoming")

        const response = await Promise.all([nowPlayingPromise, popularPromise, topRratedPromise, upcomingPromise])

        setMoviesState({
            nowPlaying: response[0].data.results ,
            topRated: response[1].data.results ,
            upcoming: response[2].data.results ,
            popular: response[3].data.results ,
        })

        setIsLoading(false)
    }

    useEffect(() => {
        //now-playing
        getMovies()

    }, [])

    return {
        ...moviesState,
        isLoading,
    };
}
