import React , {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Image ,Alert } from 'react-native';

import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

import { initializeApp } from 'firebase/app';

import {firebaseConfig} from '../database/firebase'

const LoginScreen = ({navigation}) => {

    const [email , setEmail] = useState('');
    const [password, setPassword ] = useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

  const handleLogin = () => {
    if(email === '' && password === '')
    {
        Alert.alert('Enter details to login!')
    }else{
        signInWithEmailAndPassword(auth,email,password)
        .then((userz) => {
            Alert.alert("Successfully veryfied !!!")
            console.log(userz);
            navigation.navigate('Product');
    })
    .catch(error => {
        Alert.alert(error)
    })
    }
  };

  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/Group 61.png')} />
      <TextInput
        style={styles.input}
        placeholder="Usernames"
        autoCapitalize="none"
        value={email}
        onChangeText={(val) => setEmail(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
        value={password}
        onChangeText={(val) => setPassword(val)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor : "#FFA451",
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
  logo: {
    height: 250,
    width: 250,
    marginTop : 50,
  },
});

export default LoginScreen;
