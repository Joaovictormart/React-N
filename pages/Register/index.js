import React, {useState} from "react"

import { View, TextInput, 
    TouchableOpacity,Text } from "react-native"

import styles from "./style"




export default function Register () {


    const [errorMessage, setErrorMessage] = useState(null);

    const [email, setEmail] = useState(null);

    const[senha, setSenha] = useState(null);

    function verifica() {

        if(email === null  && senha === null) {
            setErrorMessage ("campo obrigatorio")
        }


    }

    return( 
        

            <View style={styles.nCnt} >
            <View style={styles.form}>
     {/* <TextInput placeholder="Seu nome .." style={styles.textInput} />

    <TextInput placeholder="Seu sobrenome .." style={styles.textInput} /> */}

    <Text   style={styles.formLabel}>E-mail</Text>
    <Text style={styles.errorMessage}> {setErrorMessage}  </Text>

    <TextInput placeholder="Seu email .." style={styles.textInput}  />

    <Text  style={styles.formLabel} >Senha</Text>

    <Text style={styles.errorMessage}> {setErrorMessage}  </Text>

    <TextInput secureTextEntry={true} placeholder="Sua senha .." style={styles.textInput}  />

   <TouchableOpacity
   onPress={verifica()}
   style={styles.btn}
   >
   

<Text style={styles.btnText}>Login</Text>
   </TouchableOpacity>


   
        </View>
        </View>

    );
}