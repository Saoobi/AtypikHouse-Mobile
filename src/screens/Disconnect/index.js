import React from "react";
import { Alert, AsyncStorage } from "react-native";

import NavigationService from "../../components/NavigationService";

function Disconnect() {
  disconnectUser = () => {
    AsyncStorage.clear();

    NavigationService.navigate("Home");
  };

  Alert.alert(
    "Confirmer",
    "Êtes-vous sûr de vouloir vous déconnecter ?",
    [
      { text: "Oui", onPress: () => disconnectUser() },
      { text: "Je reste !", onPress: () => NavigationService.goBack() }
    ],
    { cancelable: false }
  );

  return null;
}

export default Disconnect;
