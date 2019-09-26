import React, { Component } from "react";

import { AsyncStorage } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Icon from "./src/components/Icon";
import NavigationService from "./src/components/NavigationService";

import Disconnect from "./src/screens/Disconnect";
import Home from "./src/screens/Home";
import Locations from "./src/screens/Locations";
import Lodgings from "./src/screens/Lodgings";
import LodgingDetail from "./src/screens/LodgingDetail";
import palette from "./src/stylesheets/palette";
import Reservations from "./src/screens/Reservations";
//import ReservationDetail from "./src/screen/ReservationDetail";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: undefined
    };
  }
  async componentDidMount() {
    const data = await AsyncStorage.getItem("USER_TOKEN");
    this.setState({
      token: data
    });
  }
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
          screen: LodgingDetail,
          navigationOptions: {
            header: null
          }
        }
      },
      {
        headerLayoutPreset: "center"
      }
    );

    const LodgingsStackVisitor = createStackNavigator(
      {
        LodgingsVisitor: {
          screen: Lodgings,
          navigationOptions: {
            title: "Les logements",
            headerLeft: (
              <Icon
                additionalStyles={{ marginLeft: 15 }}
                name="arrow-back"
                onPress={() => NavigationService.goBack()}
                size={28}
              />
            )
          }
        },
        LodgingDetail: {
          screen: LodgingDetail,
          navigationOptions: {
            header: null
          }
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
        },
        ReservationDetail: {
          screen: LodgingDetail,
          navigationOptions: {
            header: null
          }
        }
      },
      {
        headerLayoutPreset: "center"
      }
    );

    const LocationsStack = createStackNavigator(
      {
        Locations: {
          screen: Locations,
          navigationOptions: {
            title: "Mes atypikHouses"
          }
        },
        LocationDetail: {
          screen: LodgingDetail,
          navigationOptions: {
            header: null
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
            tabBarLabel: "Rerservation",
            tabBarIcon: ({ tintColor }) => (
              <Icon color={tintColor} name="calendar" size={24} />
            )
          }
        },
        Locations: {
          screen: LocationsStack,
          navigationOptions: {
            tabBarLabel: "Location",
            tabBarIcon: ({ tintColor }) => (
              <Icon color={tintColor} name="leaf" size={24} />
            )
          }
        },
        Disconnect: {
          screen: Disconnect,
          navigationOptions: {
            tabBarLabel: "Déconnexion",
            tabBarIcon: ({ tintColor }) => (
              <Icon color={tintColor} name="power" size={24} />
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
        },
        Visiting: {
          screen: LodgingsStackVisitor,
          navigationOptions: {
            header: null
          }
        }
      },
      {
        headerLayoutPreset: "center"
      }
    );

    const AppNavigatorInitialRoute = this.state.token ? "App" : "Auth";

    const AppNavigator = createSwitchNavigator(
      {
        App: AppDrawer,
        Auth: AuthStack
      },
      {
        initialRouteName: AppNavigatorInitialRoute
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
