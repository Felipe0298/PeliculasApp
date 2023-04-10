import React, { useContext } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';

interface Props{
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({children}: Props) => {

     const {colors} = useContext(GradientContext)
    return (
     <View style={{flex:1}}>
        <LinearGradient 
        colors={[ colors.primary, colors.secondary, "white"]}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x:0.1 , y: 0.1}}
        end={{x:0.5, y:0.8}}/>
        {children}
     </View>
    );
}

const styles = StyleSheet.create({

});