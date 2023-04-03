import { useEffect, useState } from "react";
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface";
import movieDB from "../api/movieDB";

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [peliculasEnCine, setpeliculasEnCine] = useState<Movie[]>([])



    const getMovies = async () => {
        const resp = await movieDB.get<MovieDBNowPlaying>("/now_playing")

        const peliculas = resp.data.results
        setpeliculasEnCine(peliculas)

        setIsLoading(false)
    }

    useEffect(() => {
        //now-playing
        getMovies()

    }, [])

    return {
        peliculasEnCine,
        isLoading
    };
}
