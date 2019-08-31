import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./src/screens/Home";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import Lodgings from "./src/screens/Lodgings";

const TabNavigator = createStackNavigator(
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
    Lodgings: {
      screen: Lodgings,
      navigationOptions: {
        title: "AtypiqueHouse"
      }
    }
  },
  { headerLayoutPreset: "center" }
);

export default createAppContainer(TabNavigator);
