import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { StatusBar } from "react-native";

import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

class App extends React.Component {
  render() {
    return <StatusBar hidden />;
  }
}

const TabNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { header: null }
  },
  SignIn: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  }
});

const AppContainer = createAppContainer(TabNavigator);

export default () => (
  <AppContainer>
    <StatusBar hidden />
  </AppContainer>
);
