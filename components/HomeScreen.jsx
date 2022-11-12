import React from "react";
import { Button, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {

  return (
    <Button
      title="about"
      onPress={() => 
        navigation.navigate('About')
      }/>
  )
}

export default HomeScreen;