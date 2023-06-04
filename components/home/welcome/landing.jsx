import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from './Welcome';
import About from '../../jobdetails/about/About';
import ScreenHeaderBtn from '../../common/header/ScreenHeaderBtn';
import { COLORS, icons, images } from '../../../constants';
const Stack = createNativeStackNavigator();


function LandingScreen({ setLogin }) {
    return (
        <Stack.Navigator
            initialRouteName='Welcome' >
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite,
                    },
                    headerShadowVisible: false,
                    headerShown:false,
                    // headerLeft: () => (
                    //     <ScreenHeaderBtn
                    //         handlePress={() => {

                    //         }}
                    //         iconUrl={icons.menu}
                    //         dimension={"60%"} />
                    // ),
                    // headerRight: () => (
                    //     <ScreenHeaderBtn
                    //         handlePress={() => {
                    //             setLogin(false)
                    //         }}
                    //         iconUrl={images.user}
                    //         dimension={"100%"} />
                    // )
                }}
            />

            <Stack.Screen options={{
                headerStyle: {
                    backgroundColor: COLORS.lightWhite,
                },
                headerShadowVisible: false,
                headerBackVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.left}
                        dimension="60%"
                        handlePress={() => {
                            // navigation.navigate("Welcome")
                        }} />
                ),
                headerTitle: "",
                headerRight: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.share}
                        dimension="60%"
                        handlePress={() => {
                            // navigation.navigate("Welcome")
                        }} />
                )

            }}
                name='About' component={About} />
        </Stack.Navigator>
    )
}

export default LandingScreen;