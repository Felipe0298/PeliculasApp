import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import { styles } from '../navigation/screens/DetailScreen';

interface Props {
    movieFull: MovieFull;
    cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{flexDirection:"row"}}>
                    <Text style={{fontSize:16, fontWeight:"bold"}}>⭐</Text>
                    <Text style={styles.subtitle}>{movieFull.vote_average.toFixed(2)}</Text>

                    <Text style={{...styles.subtitle}}>
                        -{ movieFull.genres.map(gen => gen.name).join(",")}
                    </Text>
                </View>
            </View>
        </>
    );
}
