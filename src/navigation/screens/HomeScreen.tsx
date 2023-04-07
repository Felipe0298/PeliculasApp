import React from 'react';
import {ActivityIndicator, Dimensions, Text, View} from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { MoviePoster } from '../../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

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
        <ScrollView>
             <View style={{marginTop: top+20}}>

{/* Carosel Principal */}
<View style={{height: 440}}>
<Carousel 
data={peliculasEnCine}
renderItem={({item}:any)=> <MoviePoster movie={item}/>}
sliderWidth={windowWidht}
itemWidth={300}/>
</View>

{/* Peliculas populares */}

<View style={{backgroundColor:"red", height: 260}}>
    <Text style={{fontSize:30, fontWeight:"bold", color: "black"}}>En cine</Text>
    <FlatList 
        data={peliculasEnCine}
        renderItem={({item}:any)=> (
            <MoviePoster movie={item} width={140} height={200}/>
            )}
        keyExtractor={(item)=>item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
    />
</View>
</View>
        </ScrollView>
       
    );
}
