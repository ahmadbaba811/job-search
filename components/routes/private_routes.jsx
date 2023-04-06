import { View, Text } from 'react-native'
import React from 'react'
import SearchJob from '../search/search'
import About from '../jobdetails/about/About'
import { COLORS, icons, images } from '../../constants'
import Welcome from '../home/welcome/Welcome'
import ScreenHeaderBtn from '../common/header/ScreenHeaderBtn'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { createDrawerNavigator } from '@react-navigation/drawer';
import LandingScreen from '../home/welcome/landing'

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();


function PrivateRoute({ setLogin }) {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name='Landing' >
                {(props) => <LandingScreen setLogin={setLogin} />}
            </Drawer.Screen>

            <Drawer.Screen name='About' component={About} />

            <Drawer.Screen name='Search' component={SearchJob}
            />
        </Drawer.Navigator>

    )
}

export default PrivateRoute;