
import React from 'react';

import {NavigationContainer, StackActions} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';

import Register from './pages/Register'



const Stack = createStackNavigator();

export default function App() {

 

  return (





    <View style={styles.container}>



     <Title/>
   
     <Form/>

   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColo: "#e0e5e5",
    paddingTop:80
  }

});
