import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Movie } from '../../interfaces/movieInterface';
import { RootStackParams } from '../Navigation';

interface Props extends StackScreenProps <RootStackParams,"DetailScreen">{}

export const DetailScreen = ({route}: Props) => {

    const movie = route.params as Movie

    return (
        <View>
            <Text>DetailScreen</Text>
        </View>
    );
}
