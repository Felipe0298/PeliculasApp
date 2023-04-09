import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import { styles } from '../navigation/screens/DetailScreen';
import { CastItem } from './CastItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>⭐</Text>
                    <Text style={{ ...styles.subtitle, fontSize: 16, color: "grey" }}>{movieFull.vote_average.toFixed(2)} </Text>

                    <Text style={{ ...styles.subtitle, fontSize: 16, color: "grey" }}>
                         - {movieFull.genres.map(gen => gen.name).join(",")}
                    </Text>
                </View>

                {/* Historia */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold", color: "black" }}>
                    Historia
                </Text>

                <Text style={{ color: "black", fontSize: 16 }}>{movieFull.overview}</Text>

                {/* Presupuesto */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold", color: "black" }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 16, color: "black" }}>

                    {
                        new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(movieFull.budget)

                    }
                </Text>

                {/* Casting */}
                <View style={{ marginTop: 10, marginBottom:100 }}>
                    <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold", color: "black", marginHorizontal:20 }}>
                        Actores
                    </Text>
                   <FlatList
                    data={cast}
                    keyExtractor={(item) =>item.id.toString()}
                    renderItem={({item})=> <CastItem actor={item}/>}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop:10, height:70}}
                   />
                    {/* <CastItem actor={cast[0]} /> */}
                </View>
            </View>
        </>
    );
}
