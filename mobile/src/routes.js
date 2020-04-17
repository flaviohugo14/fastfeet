import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';

import Dashboard from './pages/Dashboard';

import Details from './pages/DeliveryDetails/Details';
import ShowProblems from './pages/DeliveryDetails/ShowProblems';
import RegisterProblem from './pages/DeliveryDetails/RegisterProblem';
import ConfirmDelivery from './pages/DeliveryDetails/ConfirmDelivery';

import Profile from './pages/Profile';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        App: createBottomTabNavigator(
          {
            Dashboard,
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#7d40e7',
              inactiveTintColor: '#999',
              style: {
                backgroundColor: '#fff',
                height: 70,
              },
            },
          }
        ),
        DeliveryDetails: {
          screen: createStackNavigator(
            {
              Details,
              RegisterProblem,
              ShowProblems,
              ConfirmDelivery,
            },
            {
              defaultNavigationOptions: {
                headerTransparent: true,
                headerTintColor: '#FFF',
                headerLeftContainerStyle: {
                  marginLeft: 20,
                },
              },
            }
          ),
          navigationOptions: {
            tabBarVisible: false,
            tabBarLabel: 'Agendar',
            tabBarIcon: (
              <Icon
                name="add-circle-outline"
                size={20}
                color="rgba(255, 255, 255, 0.6)"
              />
            ),
          },
        },
      },
      {
        initialRouteName: signedIn ? 'App' : 'SignIn',
      }
    )
  );
