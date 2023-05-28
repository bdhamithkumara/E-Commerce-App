import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

import {getAuth, createUserWithEmailAndPassword , signWithEmailAndPassword} from 'firebase/auth'

import { initializeApp } from 'firebase/app';

import {firebaseConfig} from '../database/firebase'


const RegisterScreen = ({navigation}) =>  {

    const [email , setEmail] = useState('');
    const [password, setPassword ] = useState('');
    const [displayname , setDisplayname] = useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const createAccount = () => {
        if(email === '' && password === '')
        {
            Alert.alert('Enter details to signup!')
        }else{
            createUserWithEmailAndPassword(auth,email,password,displayname)
            .then((user) => {
                console.log(
                  "Registration Successful. Please Login to proceed"
                );
                Alert.alert("Registration Successful. Please Login to proceed")
                console.log(user);
                navigation.navigate('Login');
            })
            
        }

       
    }
 

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    autoCapitalize="none"
                    value={displayname}
                    onChangeText={(val) => setDisplayname(val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={(val) => setEmail(val)}
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    placeholder="Password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(val) => setPassword(val)}
                />
                <Button title="Signup"
                    onPress={createAccount}
                />
            </View>
        )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});


export default RegisterScreen;

