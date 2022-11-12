import React from "react";
import { Button, Text, View } from 'react-native';

const Profile = ({ navigation, route }) => {
  return (
    <Text>This is {route.params}'s profile</Text>
  )
};

export default Profile;