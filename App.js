import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './src/Components/Home'
import Details from './src/Components/Details'
import Cart from './src/Components/Cart';
import styles from './src/Components/styles';
import Login from './src/Components/Login';
import Panresponder from './src/Components/Panresponder';
import Hooks from './src/Components/Hooks';



const App=()=>{
  const Stack=createNativeStackNavigator();
  return(

    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}>
        {/* <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="details" component={Details}/>
        <Stack.Screen name="cart" component={Cart}/>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="Pan" component={Panresponder}/> */}
        <Stack.Screen name="hook" component={Hooks}/>
    
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
