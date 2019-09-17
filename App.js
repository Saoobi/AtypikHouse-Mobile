import React, { Component } from "react";

import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Icon from "./src/components/Icon";
import NavigationService from "./src/components/NavigationService";

import Home from "./src/screens/Home";
import Lodgings from "./src/screens/Lodgings";
import LodgingDetail from "./src/screens/LodgingDetail";
import palette from "./src/stylesheets/palette";
import Reservations from "./src/screens/Reservations";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";

class App extends Component {
  render() {
    const LodgingsStack = createStackNavigator(
      {
        Lodgings: {
          screen: Lodgings,
          navigationOptions: {
            title: "Les logements"
          }
        },
        LodgingDetail: {
          screen: LodgingDetail
        }
      },
      {
        headerLayoutPreset: "center"
      }
    );

    const ReservationsStack = createStackNavigator(
      {
        Reservations: {
          screen: Reservations,
          navigationOptions: {
            title: "Mes réservations"
          }
        }
      },
      {
        headerLayoutPreset: "center"
      }
    );

    const AppDrawer = createMaterialBottomTabNavigator(
      {
        Lodgings: {
          screen: LodgingsStack,
          navigationOptions: {
            tabBarLabel: "Accueil",
            tabBarIcon: ({ tintColor }) => (
              <Icon color={tintColor} name="home" size={24} />
            )
          }
        },
        Reservations: {
          screen: ReservationsStack,
          navigationOptions: {
            tabBarLabel: "Rerservations",
            tabBarIcon: ({ tintColor }) => (
              <Icon color={tintColor} name="pin" size={24} />
            )
          }
        }
      },
      {
        initialRouteName: "Lodgings",
        activeColor: palette.blue,
        inactiveColor: palette.black,
        barStyle: { backgroundColor: "white" }
      }
    );

    const AuthStack = createStackNavigator(
      {
        Home: {
          screen: Home,
          navigationOptions: {
            title: "AtypikHouse"
          }
        },
        SignIn: {
          screen: SignIn,
          navigationOptions: {
            title: "Connexion"
          }
        },
        SignUp: {
          screen: SignUp,
          navigationOptions: {
            title: "Inscription"
          }
        }
      },
      {
        headerLayoutPreset: "center"
      }
    );

    const AppNavigator = createSwitchNavigator(
      {
        App: AppDrawer,
        Auth: AuthStack
      },
      {
        initialRouteName: "Auth"
      }
    );

    const AppContainer = createAppContainer(AppNavigator);

    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

export default App;
