import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert , Text , TouchableOpacity} from 'react-native';

import {getAuth, createUserWithEmailAndPassword , signWithEmailAndPassword} from 'firebase/auth'

import { initializeApp } from 'firebase/app';

import {firebaseConfig} from '../database/firebase'


const RegisterScreen = ({navigation}) =>  {

    const [email , setEmail] = useState('');
    const [password, setPassword ] = useState('');
    const [displayname , setDisplayname] = useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleLogin = () => {navigation.navigate('Login');};

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
                      <Text style={{ fontSize: 20, marginTop: 20 }}>Welcome to Signup!</Text>
      <Text style={{ fontSize: 16, marginTop: 20, color: 'gray' }}>
        Signup to continue
      </Text>
                <TextInput
                            style={{
                                marginTop: 40,
                                borderBottomColor: '#ddd',
                                borderBottomWidth: 1,
                                paddingBottom: 20,
                              }}
                    placeholder="Name"
                    autoCapitalize="none"
                    value={displayname}
                    onChangeText={(val) => setDisplayname(val)}
                />
                <TextInput
                            style={{
                                marginTop: 40,
                                borderBottomColor: '#ddd',
                                borderBottomWidth: 1,
                                paddingBottom: 20,
                              }}
                    placeholder="Email"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={(val) => setEmail(val)}
                />
                <TextInput
                           style={{
                            marginTop: 40,
                            borderBottomColor: '#ddd',
                            borderBottomWidth: 1,
                            paddingBottom: 20,
                          }}
                    value={password}
                    placeholder="Password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(val) => setPassword(val)}
                />



<View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
        }}>
        <TouchableOpacity
          style={{
            width: 200,
            backgroundColor: '#0d47a1',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            marginTop: 30,
          }}>
          <Text style={{ textAlign: 'center', coloe: '#FFF', fontSize: 16 }}>
          <Button title="Signup"
                    onPress={createAccount}
                />
          </Text>
        </TouchableOpacity>
        
          <View style={{ flexDirection: 'row', marginTop: 60 }}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 40 / 2,
            backgroundColor: '#3f51b5',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize:25,fontWeight:'bold',color:'#FFF'}}>f</Text>
          </View>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 40 / 2,
            backgroundColor: '#f44336',
            marginHorizontal: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize:25,fontWeight:'bold',color:'#FFF'}}>G</Text>
          </View>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 40 / 2,
            backgroundColor: '#1565c0',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize:25,fontWeight:'bold',color:'#FFF'}}>in</Text>
          </View>
      </View>
      <View style={{flexDirection:'row',marginTop:40,}}>
       <Text style={{ color:'gray' }}>
            Already have an account ?
          </Text>
          <Text style={{ fontWeight:'bold' ,marginHorizontal: 10,}} onPress={handleLogin}>
            Login
          </Text>
      </View>
      </View>




            </View>

            
        )
    
}

const styles = StyleSheet.create({
    container: {
        padding: 20,

    },

});


export default RegisterScreen;

