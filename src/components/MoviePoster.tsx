import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height=420, width=300 }: Props) => {

    const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    
    const navigation = useNavigation();

    console.log(movie.poster_path)
    return (
        <TouchableOpacity 
        onPress={()=>navigation.dispatch(CommonActions.navigate("DetailScreen", movie))}
        activeOpacity={0.8}
        style={{
            width,
            height,
            marginHorizontal:2,
            paddingBottom:20,
            paddingHorizontal:7
        }}>
            <View style={styles.imgContainer}>
                <Image
                    source={{ uri: url }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    imgContainer: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image: {
        flex: 1,
        borderRadius: 18,
    }
    
});