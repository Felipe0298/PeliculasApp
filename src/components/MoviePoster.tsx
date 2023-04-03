import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie: Movie;
}

export const MoviePoster = ({ movie }: Props) => {

    const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    console.log(movie.poster_path)
    return (
        <View style={{
            width: 300,
            height: 420,
        }}>
            <View style={styles.imgContainer}>
                <Image
                    source={{ uri: url }}
                    style={styles.image}
                />
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imgContainer: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.9,
        shadowRadius: 7,

        elevation: 10,
    }
});