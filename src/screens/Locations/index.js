import React, { Component } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View
} from "react-native";

import styles from "./styles";
import Lodging from "../../components/Lodging";
import NavigationService from "../../components/NavigationService";
import { getUser } from "../../API";

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = { locations: [], isLoading: false };
    this.NbLocations = 0;
    this.user = [];
  }

  _loadLocations() {
    this.setState({ isLoading: true });
    getUser().then(data => {
      this.setState({
        locations: [...this.state.locations, ...data.mesBiens],
        isLoading: false
      });
      this.NbLocations = data.mesBiens.length;
      this.user = data.user;
    });
  }

  componentDidMount() {
    this._loadLocations();
  }

  _displayDetailForLodging = idLocation => {
    NavigationService.navigate("LocationDetail", { idLodging: idLocation });
  };

  _displayResultData() {
    /* AFFICHAGE */

    //Lors de la recherche
    if (this.state.isLoading) {
      return (
        <View style={styles.containerError}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    //Lorsque aucun résultat n'a été trouvé
    if (!this.state.locations.length && !this.state.isLoading) {
      return (
        <View style={styles.containerError}>
          <Text style={styles.textError}>
            Vous n'avez pas d'hébérgements en location
          </Text>
        </View>
      );
    }

    //Lorsque des données ont été récupérée
    if (this.state.locations && this.state.locations.length) {
      return (
        <ScrollView>
          <FlatList
            data={this.state.locations}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <Lodging
                lodging={item}
                displayDetailForLodging={this._displayDetailForLodging}
              />
            )}
          />
        </ScrollView>
      );
    }
  }

  render() {
    return (
      <View style={styles.containerMain}>
        <View></View>
        {this._displayResultData()}
      </View>
    );
  }
}

export default Locations;
