import React, { Component } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

import Lodging from "../../components/Lodging";
import NavigationService from "../../components/NavigationService";
import { getLodgingDetailFromApi, getReservationsUserFromApi } from "../../API";

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

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        <View>
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
        </View>
        {this._displayLoading()}
      </View>
    );
  }
}

export default Reservations;
