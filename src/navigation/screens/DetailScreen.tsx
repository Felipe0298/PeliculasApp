import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../Navigation';
import { Movie } from '../../interfaces/movieInterface';
import { ScrollView } from 'react-native-gesture-handler';
import { useMovieDetails } from '../../hooks/useMovieDetails';
import { MovieDetails } from '../../components/MovieDetails';

const screenHeight = Dimensions.get("screen").height

interface Props extends StackScreenProps<RootStackParams, "DetailScreen"> { }

export const DetailScreen = ({ route }: Props) => {

    const movie = route.params

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, cast, movieFull} = useMovieDetails(movie.id)


    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image source={{ uri }}
                    style={styles.posterImage} />
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subtitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
                
            </View>

            {
                isLoading
                ?<ActivityIndicator size={30} color="grey" style={{marginTop:20}}/>
                :<MovieDetails movieFull={movieFull!} cast={cast}/>
            }



        </ScrollView>
    );
}


export const styles = StyleSheet.create({

    imageContainer: {
        width: "100%",
        height: screenHeight * 0.70,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,

        elevation: 5,

        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        overflow: "hidden"
    },
    posterImage: {
        flex: 1,
    },
    marginContainer:{
        marginHorizontal:20,
        marginTop:20,
    },
    subtitle:{
        fontSize:18,
        color:"black",
        opacity:0.8
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:"black"
    }
});