import React, { Component } from "react";
import {
  ScrollView,
  ActivityIndicator,
  FlatList,
  Text,
  View
} from "react-native";

import Lodging from "../../components/Lodging";
import NavigationService from "../../components/NavigationService";
import { getLodgingDetailFromApi, getReservationsUserFromApi } from "../../API";

import styles from "./styles";

class Reservations extends Component {
  constructor(props) {
    super(props);
    this.state = { lodgings: [], isLoading: false };
  }

  _loadLodgings() {
    this.setState({ isLoading: true });
    getReservationsUserFromApi().then(data => {
      data.map(item => {
        getLodgingDetailFromApi(item.biens_louer.id).then(lodging => {
          const reservation = {
            idLocation: item.id,
            startDate: item.startDate,
            endDate: item.endDate,
            dureeSejour: item.duree_sejour,
            voyageur: item.voyageur,
            prixTotal: item.prixTotal,
            location: lodging
          };
          this.setState({
            lodgings: [...this.state.lodgings, reservation]
          });
        });
      });

      this.setState({
        isLoading: false
      });
    });
  }

  componentDidMount() {
    this.setState(
      {
        lodgings: []
      },
      () => {
        //Fonction qui s'execute à la fin de la tache async de setState
        this._loadLodgings();
      }
    );
  }

  _displayDetailForLodging = (idLodging, reservation) => {
    NavigationService.navigate("ReservationDetail", {
      idLodging: idLodging,
      reservation: reservation
    });
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
    if (!this.state.lodgings.length && !this.state.isLoading) {
      return (
        <View style={styles.containerError}>
          <Text style={styles.textError}>
            Pas de résultat trouvé pour votre recherche
          </Text>
        </View>
      );
    }

    //Lorsque des données ont été récupérée
    if (this.state.lodgings && this.state.lodgings.length) {
      return (
        <ScrollView>
          <FlatList
            data={this.state.lodgings}
            keyExtractor={item => item.location.id.toString()}
            renderItem={({ item }) => (
              <Lodging
                lodging={item.location}
                displayDetailForLodging={this._displayDetailForLodging}
                reservation={item}
              />
            )}
          />
        </ScrollView>
      );
    }
  }

  render() {
    return (
      <View style={styles.containerMain}>{this._displayResultData()}</View>
    );
  }
}

export default Reservations;
