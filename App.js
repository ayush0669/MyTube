
import React from 'react';
import Home from './src/screens/Home'
import Search from './src/screens/Search'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'



const Stack = createStackNavigator()



export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="search" component={Search}/>


      </Stack.Navigator>

    </NavigationContainer>

  );
};



