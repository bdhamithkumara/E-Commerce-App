import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import Products from './components/Products';
import Viewall from './components/Viewall';
import SplashScreen from './components/SpalshScreen'
import WelcomeScreen from './components/WelcomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false,headerBackTitle:''}}>
           
      <Stack.Screen  name="SplashScreen" component={SplashScreen} />
     <Stack.Screen  name="WelcomeScreen" component={WelcomeScreen} />
     <Stack.Screen  name="Register" component={RegisterScreen} />
     <Stack.Screen name="Login"  component={LoginScreen} />
     <Stack.Screen name="Product"  component={Products} />

     <Stack.Screen name="Viewall"  component={Viewall} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
