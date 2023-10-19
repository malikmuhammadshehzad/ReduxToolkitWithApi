import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, SignUp, SingleProduct} from '../screen';
import {useSelector} from 'react-redux';
import Product from '../screen/Product';
import { signupUser } from '../redux/reducers/AuthReducer';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  const {userData} = useSelector(state => state.Auth);
  return (
    <NavigationContainer>
      <Stack.Navigator>
    
        {/* {userData ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <Stack.Screen name="Login" component={Login} />

        )} */}

        <Stack.Screen name="product" component={Product} />
        <Stack.Screen name="singleProduct" component={SingleProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
