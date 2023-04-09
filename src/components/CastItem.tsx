import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props{
    actor: Cast
}

export const CastItem = ({actor}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View style={styles.container}>
            {
                actor.profile_path &&
                <Image source={{uri}}
                style={{width: 50, height: 50, borderRadius:10}}/>
            }
            

            <View style={styles.actorInfo}>
                <Text style={{fontSize:18, fontWeight:"bold", color:"black"}}>
                    {actor.name}
                </Text>
                <Text style={{fontSize:18, fontWeight:"bold", color:"black", opacity:0.5}}>
                    {actor.character}
                </Text>
            </View>
        </View>
    );
}



export const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:"white",
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginHorizontal:15,
        paddingRight:10,
        height:50,
    },
    actorInfo:{
        marginLeft:10,
    }
});