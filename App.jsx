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
import PrivateRoute from './components/routes/private_routes';
import PublicRoutes from './components/routes/public_routes';

const Stack = createNativeStackNavigator();

function App({ navigation }) {
  const [fontsLoaded, setFontsLoaded] = React.useState(true);

  const [login, setLogin] = React.useState(false)

  return (
    <SafeAreaView style={{
      backgroundColor: COLORS.lightWhite,
      flex: 1
    }}>
      {
        fontsLoaded === true ?
          <NavigationContainer>
            {
              login ?
                <PrivateRoute setLogin={setLogin} />
                :
                <PublicRoutes setLogin={setLogin} />
            }

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
