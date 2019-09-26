import React from "react";
import { View, Text } from "react-native";

import Button from "../../components/Button";
import Logo from "../../components/Logo";
import styles from "./styles";
import NavigationService from "../../components/NavigationService";

function Home() {
  return (
    <View style={styles.containerMain}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.containerButton}>
        <View>
          <Button
            additionalStyles={{ marginBottom: 15 }}
            buttonTitle="Connexion"
            onPress={() => NavigationService.navigate("SignIn")}
          />
        </View>
        <Button
          buttonType="transparent"
          buttonTitle="Continuer sans m'enregistrer"
          onPress={() => NavigationService.navigate("Visiting")}
        />
      </View>
      <View style={styles.containerPrivacy}>
        <Text>
          En appuyant sur Connexion, Inscription ou Continuer sans
          m'enregistrer, j'accepte les Conditions générales d'utilisation et la
          Politique de confidentialité d'AtypikHouse
        </Text>
      </View>
    </View>
  );
}

export default Home;
