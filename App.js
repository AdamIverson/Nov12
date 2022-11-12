/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './components/HomeScreen';
// import Profile from './components/Profile';

import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Stack = createNativeStackNavigator();

const App = Node = () => {

  const HomeScreen = ({ navigation }) => {

    return (
      <Button
        title="go to jane's profile"
        onPress={() => 
          navigation.navigate('Profile')
        }/>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{ title: 'Welcome' }}
        />
        {/* <Stack.Screen name="Profile" component={Profile()}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
