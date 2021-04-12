import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardBottomTab from './DashboardBottomTab';

const Stack = createStackNavigator();

const AppNav = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Dashboard"
          options={{headerShown: false}}
          component={DashboardBottomTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
