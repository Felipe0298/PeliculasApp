import React from 'react';
import {ActivityIndicator, Dimensions, Text, View} from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { MoviePoster } from '../../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

const {width: windowWidht} = Dimensions.get("window")

export const HomeScreen = () => {

    const {peliculasEnCine, isLoading} =useMovies()
    const {top} =useSafeAreaInsets()
    
    if(isLoading){
        return(
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <ActivityIndicator color="red" size={100}/>
            </View>
        )
    }
    return (
        <View style={{marginTop: top+20}}>
            <View style={{height: 440}}>
            <Carousel 
            data={peliculasEnCine}
            renderItem={({item}:any)=> <MoviePoster movie={item}/>}
            sliderWidth={windowWidht}
            itemWidth={300}/>
            </View>
        </View>
    );
}
