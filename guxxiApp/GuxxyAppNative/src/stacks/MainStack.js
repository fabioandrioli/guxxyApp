/** 
 *
*/

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Preload from '../screens/preload/index'
import SignIn from '../screens/signin/index'
import SignUp from '../screens/signup/index'

const Stack = createStackNavigator();

MainStack = () =>{
    return(
        <Stack.Navigator
            initialRouteName="Preload"
            screenOptions={{
                headerShown:false,
            }}
        >
            <Stack.Screen name="Preload" component={Preload}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
        </Stack.Navigator>
    );
}

export default MainStack;
