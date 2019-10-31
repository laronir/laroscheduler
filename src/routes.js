import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import SelectProvider from './pages/Agendar/SelectProvider';
import SelectDate from './pages/Agendar/SelectDate';
import Confirm from './pages/Agendar/Confirm';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createMaterialBottomTabNavigator(
          {
            Dashboard,
            Agendar: {
              screen: createStackNavigator(
                {
                  SelectProvider,
                  SelectDate,
                  Confirm,
                },
                {
                  headerLayoutPreset: 'center',

                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Agendar',
                tabBarIcon: (
                  <Icon
                    name="add-circle-outline"
                    size={20}
                    color="rgba(255, 255, 255, 0.6)"
                  />
                ),
                tabBarVisible: false,
              },
            },
            Profile,
          },
          {
            resetOnBlur: true,
            keyboardHidesNavigationBar: true,
            activeColor: '#fff',
            inactiveColor: 'rgba(255,255,255,0.6)',
            barStyle: {
              backgroundColor: '#22c1c3',
            },
          }
        ),
      },
      { initialRouteName: isSigned ? 'App' : 'Sign' }
    )
  );
