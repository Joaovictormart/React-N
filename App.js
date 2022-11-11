
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import Form from './src/componetes/Form';
import Title from './src/componetes/Title';

export default function App() {

  /*
  const {nome, setNome} = useState('');
  const {email, setEmail} = useState('');
  const {senha, setSenha} = useState('');
*/

  return (
    <View style={styles.container}>
     <Title/>
   

     <Image source={require('./assets/relogio-de-pulso-1595359645219_v2_450x337.jpg')}/>

     <TextInput placeholder="Seu nome .." style={styles.textInput}  />

     <TextInput placeholder="Seu email .." style={styles.textInput}  />

     <TextInput secureTextEntry={true} placeholder="Sua senha .." style={styles.textInput}  />

     {/* <Button style={styles.btn}
     ></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color:'red',
  },

  textInput:{
    width:'90%' ,
    height:40,
    backgroundColor:'white',
    marginBottom:15,
    paddingLeft:10,
    borderRadius:25

  },

  // btn:{
  //   backgroundColor:'gray',
  // }

});
