import React from 'react';
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { MoviePoster } from '../../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../../components/HorizontalSlider';
import { GradientBackground } from '../../components/GradientBackground';
import ImageColors from 'react-native-image-colors';

const { width: windowWidht } = Dimensions.get("window")

export const HomeScreen = () => {

    const { nowPlaying, isLoading, popular, topRated, upcoming } = useMovies()
    const { top } = useSafeAreaInsets()
   
    const getPosterColors = async(index: number) =>{
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        
        const colors = await ImageColors.getColors(uri, {});
        console.log(colors)
    }

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }
    return (
        <GradientBackground>
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
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={ index => getPosterColors( index )}
                            />
                    </View>

                    {/* Peliculas populares */}

                    <HorizontalSlider movies={popular} title='Populares' />
                    <HorizontalSlider movies={topRated} title='Mejores Calificadas' />
                    <HorizontalSlider movies={upcoming} title='Proximamente' />
                </View>
            </ScrollView>
        </GradientBackground>
    );
}