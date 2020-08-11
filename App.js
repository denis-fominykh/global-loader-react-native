import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import { AppProvider, AppConsumer } from './components/Context';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <AppProvider {...this.props}>
        <AppConsumer>
          {(funcs) => {
            global.props = { ...funcs };

            return (
              <SafeAreaProvider>
                <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
                <NavigationContainer>
                  <Stack.Navigator initialRouteName="First">
                    <Stack.Screen name="First" component={FirstScreen} />
                    <Stack.Screen name="Second" component={SecondScreen} />
                    <Stack.Screen name="Third" component={ThirdScreen} />
                  </Stack.Navigator>
                </NavigationContainer>
              </SafeAreaProvider>
            );
          }}
        </AppConsumer>
      </AppProvider>
    );
  }
}

export default App;
