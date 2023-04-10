import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Text, View } from 'react-native';
import { Navigation } from './src/navigation/Navigation';
import { FadeScreen } from './src/components/FadeScreen';

const App = () => {
  return (
      <NavigationContainer>
        <Navigation/>
        {/* <FadeScreen/> */}
      </NavigationContainer>
  );
}

export default App