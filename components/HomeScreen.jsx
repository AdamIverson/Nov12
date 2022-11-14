import React from "react";
import { Button, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {

  return (
  <View>
    <Button
      title="about"
      onPress={() =>
        navigation.navigate('About')
      } />
      <Button title="please please contact us" onPress={() => navigation.navigate('Contact')}/>
  </View>

  )
}

export default HomeScreen;