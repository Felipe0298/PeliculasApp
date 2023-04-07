import React from 'react';
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { MoviePoster } from '../../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {  ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../../components/HorizontalSlider';

const { width: windowWidht } = Dimensions.get("window")

export const HomeScreen = () => {

    const { nowPlaying, isLoading, popular, topRated, upcoming } = useMovies()
    const { top } = useSafeAreaInsets()

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }
    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>
                                                    {/*  El simbolo ! es para decirle a typescript que confie en mi */}
                {/* Carosel Principal */}
                <View style={{ height: 440 }}>
                    <Carousel
                        data={nowPlaying!}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidht}
                        itemWidth={300} 
                        inactiveSlideOpacity={0.9}/>
                </View>

                {/* Peliculas populares */}

                    <HorizontalSlider movies={popular} title='Populares' />
                    <HorizontalSlider movies={topRated} title='Mejores Calificadas' />
                    <HorizontalSlider movies={upcoming} title='Proximamente' />
            </View>
        </ScrollView>

    );
}
