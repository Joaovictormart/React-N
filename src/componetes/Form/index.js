import React, {useState} from "react"

import { View, TextInput, 
    TouchableOpacity,Text } from "react-native"

import styles from "./style"

import {NavigationContainer} from '@react-navigation/native'

import { createStackNavigator } from "@react-navigation/stack"

import Register from "../../../pages/Register"



export default function Form (navigation) {



    const [email, setEmail] = useState(null);

    const[senha, setSenha] = useState(null);

    // const Stack = createStackNavigator.Navigation();

    // <NavigationContainer>

    //     <Stack.Navigation>

    //         <Stack.Screen
           
    //        name="Register"
    //        component= {Register}
    //         />
    //     </Stack.Navigation>
    // </NavigationContainer>
  

    return( 
        

            <View style={styles.nCnt} >
            <View style={styles.form}>
     {/* <TextInput placeholder="Seu nome .." style={styles.textInput} />

    <TextInput placeholder="Seu sobrenome .." style={styles.textInput} /> */}

    <Text   style={styles.formLabel}>E-mail</Text>
    <Text style={styles.errorMessage}>   </Text>

    <TextInput placeholder="Seu email .." style={styles.textInput}  />

    <Text  style={styles.formLabel} >Senha</Text>

    <Text style={styles.errorMessage}>   </Text>

    <TextInput secureTextEntry={true} placeholder="Sua senha .." style={styles.textInput}  />

   <TouchableOpacity
   onPress={()=> navigation.navigate('Register')}
   style={styles.btn}
   >
   

<Text style={styles.btnText}>Login</Text>
   </TouchableOpacity>


   
        </View>
        </View>

    );
}