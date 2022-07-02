import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OpenPreyView from './src/OpenPrayerRoom/views/OpenPreyView';
import OpenPreyRoomView from './src/OpenPrayerRoom/views/OpenPreyRoomView';
import OpenPreyerRosaryView from './src/OpenPrayerRoom/views/OpenPreyerRosaryView';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OpenPreyView"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="OpenPreyView" component={OpenPreyView} />
        <Stack.Screen name="OpenPreyRoomView" component={OpenPreyRoomView} />
        <Stack.Screen
          name="OpenPreyerRosaryView"
          component={OpenPreyerRosaryView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
