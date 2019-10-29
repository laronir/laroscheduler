import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

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
            Profile,
          },
          {
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
