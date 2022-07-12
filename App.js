import React from 'react';

import MainView from './src/view/PrayingAloneView/MainView/MainView.js';
import ListView from './src/view/PrayingAloneView/ListView/ListView.js';
import CreateReactView from './src/view/PrayingAloneView/CreatePray/CreatePrayView.js';
import TodayListView from './src/view/PrayingAloneView/TodayListView/TodayListView.js';
import TodayExplanationView from './src/view/PrayingAloneView/TodayExplanationView/TodayExplanationView.js';
import PrayView from './src/view/PrayingAloneView/PrayView/PrayView.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MainView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="List"
          component={ListView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Create"
          component={CreateReactView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Today"
          component={TodayListView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Explan"
          component={TodayExplanationView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pray"
          component={PrayView}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
