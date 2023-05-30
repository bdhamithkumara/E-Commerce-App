import React , {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Image ,Alert ,Text , TouchableOpacity} from 'react-native';

import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

import { initializeApp } from 'firebase/app';

import {firebaseConfig} from '../database/firebase'

const LoginScreen = ({navigation}) => {

    const [email , setEmail] = useState('');
    const [password, setPassword ] = useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handlesignup = () => {navigation.navigate('Register');};

  const handleLogin = () => {
    if(email === '' && password === '')
    {
        alert('Enter details to login!')
    }else{
        signInWithEmailAndPassword(auth,email,password)
        .then((userz) => {
            alert("Successfully veryfied !!!")
            console.log(userz);
            navigation.navigate('Product');
    })
    .catch(error => {
        alert(error)
    })
    }
  };

  return (
    <View style={styles.container}>
          <Text style={{ fontSize: 20, marginTop: 20 }}>Welcome Back!</Text>
      <Text style={{ fontSize: 16, marginTop: 20, color: 'gray' }}>
        Sign in to comtinue
      </Text>

      <TextInput
                style={{
          marginTop: 40,
          borderBottomColor: '#ddd',
          borderBottomWidth: 1,
          paddingBottom: 20,
        }}
        placeholder="Usernames"
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
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
        value={password}
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
          {/* <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 16 }}>
          <Button title="Login" onPress={handleLogin} />

          </Text> */}

          <button onClick={handleLogin} style={{ textAlign: 'center', color : 'white', fontSize: 18 , backgroundColor: 'transparent', borderStyle : 'none',
            }}> <Text>Login</Text> </button>


        </TouchableOpacity>
        <Text style={{ marginTop:20, }}>
            Forget Pasword ?
          </Text>
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
      <View style={{flexDirection:'row',marginTop:20,}}>
       <Text style={{ color:'gray' }}>
            Don't have an account ? 
          </Text>
          <Text style={{ fontWeight:'bold',marginHorizontal: 10, }} onPress={handlesignup}>
            SignUp
          </Text>
      </View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
})


export default LoginScreen;
