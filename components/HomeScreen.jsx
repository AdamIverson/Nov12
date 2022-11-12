import React from "react";
import { Button, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {

  return (
    <Button
      title="go to jane's profile"
      onPress={() => 
        navigation.navigate('Profile')
      }/>
  )
}

export default HomeScreen;