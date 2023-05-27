import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({navigation}) => {
  const handleLogin = () => {
    // Handle login logic here
    navigation.navigate('RegisterScreen');
  };

  return (
    <View style={styles.container}>
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

export default LoginScreen;
