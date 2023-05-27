import React from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';

const LoginScreen = ({navigation}) => {
  const handleLogin = () => {
    // Handle login logic here
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/Group 61.png')} />
      <TextInput
        style={styles.input}
        placeholder="Usernames"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
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
