import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoarding from '../public_screens/onBoarding';
import Login from '../public_screens/login';


const Stack = createNativeStackNavigator();

function PublicRoutes({setLogin}) {

    
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Onboarding" >
                {(props) => <OnBoarding setLogin={setLogin} /> }
            </Stack.Screen>
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    )
}

export default  PublicRoutes;