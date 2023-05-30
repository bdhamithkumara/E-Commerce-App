import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  View,
  Image,
} from 'react-native';

const WelcomeScreen = ({navigation}) => {

  const handleLogin = () => {navigation.navigate('Login');};
  const handlesignup = () => {navigation.navigate('Register');};
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/signup.jpg')}
        style={styles.pageoneimage}
        resizeMode="contain"></Image>

      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Welcome</Text>
      <Text
        style={{
          fontSize: 16,
          color: 'gray',
          textAlign: 'center',
          marginHorizontal: 20,
        }}>
        Complete point of sale software tailored to your bussiness needs
      </Text>

      <View style={{ flexDirection: 'row', margin: 20, paddingVertical: 20,  }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            padding: 10,
            width: 150,
            borderRadius: 30,
            marginVertical: 2,
            marginHorizontal:10,
          }} onPress={handleLogin}>
          <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 18 }}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#FFF',
            padding: 10,
            width: 150,
            borderRadius: 30,
            marginVertical: 2,
            borderWidth: 1,
            borderColor: 'blue',
          }} onPress={handlesignup}>
          <Text style={{ textAlign: 'center', color: 'bule', fontSize: 18 }}>
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 16, marginTop: 10 }}>or via social media</Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
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
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginTop: 70,
  },
  pageoneimage: {
    width: '100%',
    height: 300,
  },
});
