import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SearchJob from '../search/search'
import About from '../jobdetails/about/About'
import { COLORS, icons, images } from '../../constants'
import Welcome from '../home/welcome/Welcome'
import ScreenHeaderBtn from '../common/header/ScreenHeaderBtn'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { createDrawerNavigator } from '@react-navigation/drawer';
import LandingScreen from '../home/welcome/landing'
import CustomDrawer from '../common/custom-drawer/drawer'

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();


function PrivateRoute({ setLogin }) {
    const NavigatorScreenArray = [
        { route: 'Landing', name: 'Home', icon: icons.menu, component: LandingScreen, props: setLogin },
        { route: 'About', name: 'About', icon: icons.menu, component: LandingScreen, props: setLogin },
        { route: 'Search', name: 'Search', icon: icons.menu, component: LandingScreen, props: setLogin }
    ]


    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                drawerStyle: styles.drawerStyles
            }}
        >
            {
                NavigatorScreenArray.map((x, i) => (
                    <Drawer.Screen key={i}
                        name={x.name}
                        component={x.component}
                        options={{
                            item: x
                        }}

                    />
                ))
            }
            {/* <Drawer.Screen name='Landing' >
                {(props) => <LandingScreen setLogin={setLogin} />}
            </Drawer.Screen>

            <Drawer.Screen name='About' component={About} />

            <Drawer.Screen name='Search' component={SearchJob} /> */}
        </Drawer.Navigator>

    )
}

export default PrivateRoute;

const styles = StyleSheet.create({
    drawerStyles: {
        width: 260,
        backgroundColor: 'transparent'
    }
})