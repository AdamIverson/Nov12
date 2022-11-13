import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import About from './components/About';
import Contact from './components/ContactScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="About" component={About} options={{ title: 'aboot'}}/>
        <Stack.Screen name="Contact" component={Contact} options={{ title: 'contact us please contact us' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
