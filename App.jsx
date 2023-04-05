import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { COLORS, icons, images } from './constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenHeaderBtn, Welcome } from './components';
import About from './components/jobdetails/about/About';
import SearchJob from './components/search/search';

const Stack = createNativeStackNavigator();

function App({ navigation }) {
  const [fontsLoaded, setFontsLoaded] = React.useState(true);

  return (
    <SafeAreaView style={{
      backgroundColor: COLORS.lightWhite,
      flex: 1
    }}>

      {
        fontsLoaded === true ?
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName='Welcome'
            >
              <Stack.Screen options={{
                headerStyle: {
                  backgroundColor: COLORS.lightWhite,
                },
                headerShadowVisible: false,
                headerLeft: () => (
                  <ScreenHeaderBtn
                    handlePress={() => {
                      
                    }}
                    iconUrl={icons.menu}
                    dimension={"60%"} />
                ),
                headerRight: () => (
                  <ScreenHeaderBtn
                    handlePress={() => {

                    }}
                    iconUrl={images.user}
                    dimension={"100%"} />
                )
              }} name='Welcome' component={Welcome} />

              <Stack.Screen options={{
                headerStyle: {
                  backgroundColor: COLORS.lightWhite,
                },
                headerShadowVisible: false,
                headerBackVisible : false,
                headerLeft : () =>(
                  <ScreenHeaderBtn 
                  iconUrl={icons.left} 
                  dimension="60%"
                  handlePress={() => {
                    // navigation.navigate("Welcome")
                  }} />
                ),
                headerTitle : "",
                headerRight : () =>(
                  <ScreenHeaderBtn 
                  iconUrl={icons.share} 
                  dimension="60%"
                  handlePress={() => {
                    // navigation.navigate("Welcome")
                  }} />
                )
                
              }}
                name='About' component={About} />

                <Stack.Screen
                options={{
                  headerStyle : {
                    backgroundColor : COLORS.lightWhite
                  },
                  headerShadowVisible: false,
                headerBackVisible : false,
                headerLeft : () =>(
                  <ScreenHeaderBtn 
                  iconUrl={icons.left} 
                  dimension="60%"
                  handlePress={() => {
                    // navigation.navigate("Welcome")
                  }} />
                ),
                headerTitle : "",
                headerRight : () =>(
                  <ScreenHeaderBtn 
                  iconUrl={icons.share} 
                  dimension="60%"
                  handlePress={() => {
                    // navigation.navigate("Welcome")
                  }} />
                )
                }} 
                name='Search' component={SearchJob}
                />
            </Stack.Navigator>

          </NavigationContainer>
          :
          <View>
            <Text>Loading SplashScreen</Text>
          </View>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
