import React from "react";
import { StyleSheet, View, Button, Image, Text } from "react-native";
import MyButton from "../../components/Button";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.maint_container}>
        <Image style={styles.image} source={{ uri: "Image" }} />
        <Text>Bienvenue sur AtypiqueHouse</Text>
        <MyButton buttonTitle="Connexion" />
        <MyButton buttonTitle="Inscription" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maint_container: {
    marginTop: 25,
    flex: 1
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Home;
