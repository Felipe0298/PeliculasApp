import { useEffect, useState } from "react";
import { Movie, MovieDBMoviesResponse } from "../interfaces/movieInterface";
import movieDB from "../api/movieDB";

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [peliculasEnCine, setpeliculasEnCine] = useState<Movie[]>([])
    const [peliculasPopulares, setpeliculasPopulares] = useState<Movie[]>([])


    const getMovies = async () => {
        const respNowPlaying = await movieDB.get<MovieDBMoviesResponse>("/now_playing")
        const respPopular = await movieDB.get<MovieDBMoviesResponse>("/popular")
        await movieDB.get<MovieDBMoviesResponse>("/top_rated")
        await movieDB.get<MovieDBMoviesResponse>("/upcoming")


        const peliculas = respNowPlaying.data.results
        setpeliculasEnCine(peliculas)

        const peliculasPopulares = respPopular.data.results
        setpeliculasPopulares(peliculasPopulares)

        setIsLoading(false)
    }

    useEffect(() => {
        //now-playing
        getMovies()

    }, [])

    return {
        peliculasEnCine,
        isLoading,
        peliculasPopulares
    };
}
