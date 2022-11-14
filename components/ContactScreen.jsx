import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Contact = ({ navigation }) => {
  const [text, onChangeText] = React.useState('');
  const [num, onChangeNum] = React.useState('')

  return (
    <View>
      <Text>PLEASE CONTACT US PLEASE</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNum}
        value={num}
        keyboardType="numeric"
      />
      <Button 
        title="for the love of god submit folks we are lonely"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 20,
    padding: 10,
  },
});

export default Contact;