import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { MovieFull } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

interface MovieDetails {
    isLoading: boolean;
    movieFull: MovieFull;
    cast: any[]
}

export const useMovieDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetails>()

    const getMovieDetails = async () => {
        const resp = await movieDB.get<MovieFull>(`/${movieId}`)
    }

    useEffect(() => {
        getMovieDetails()
    }, [])


    return{
        state
    }
}
