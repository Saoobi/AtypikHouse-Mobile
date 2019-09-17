import React, { Component } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

import Lodging from "../../components/Lodging";
import NavigationService from "../../components/NavigationService";
import { getReservationsUserFromApi } from "../../API";

class Reservations extends Component {
  constructor(props) {
    super(props);
    this.state = { lodgings: [], isLoading: false };
  }

  _loadLodgings() {
    this.setState({ isLoading: true });
    getReservationsUserFromApi().then(data => {
      this.setState({
        lodgings: [...this.state.lodgings, ...data],
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

  _displayDetailForLodging = idLodging => {
    NavigationService.navigate("LodgingDetail", { idLodging: idLodging });
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
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <Lodging
                lodging={item}
                displayDetailForLodging={this._displayDetailForLodging}
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
