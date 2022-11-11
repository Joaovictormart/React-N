import React from "react"

import { View,Text, TextInput, Button } from "react-native"


export default function Form() {

    return( 

        <View>
            <Text>E-mail</Text>
            <TextInput
            placeholder="email@gmail.com"
            ></TextInput>

            <Text>Senha</Text>
            <TextInput
            placeholder="password"
            ></TextInput>

            <Button title="Login"></Button>

            <Button title="Register"   ></Button>
        </View>

    )
}