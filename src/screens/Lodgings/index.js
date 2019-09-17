import React, { Component } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

import Form from "../../components/Form";
import Lodging from "../../components/Lodging";
import NavigationService from "../../components/NavigationService";
import { getLodgingsFromApiWithSearchText } from "../../API";
import palette from "../../stylesheets/palette";

class Lodgings extends Component {
  constructor(props) {
    super(props);
    this.state = { lodgings: [], isLoading: false, category: "" };
  }

  handleInputChange = (text, key) => {
    this.setState({
      [key]: text
    });
  };

  _loadLodgings() {
    this.setState({ isLoading: true });
    if (this.state.category.length > 0) {
      getLodgingsFromApiWithSearchText(this.state.category).then(data => {
        this.setState({
          lodgings: [...this.state.lodgings, ...data],
          isLoading: false
        });
      });
    }
  }

  handleFormSubmit = () => {
    this.setState(
      {
        lodgings: []
      },
      () => {
        //Fonction qui s'execute à la fin de la tache async de setState
        this._loadLodgings();
      }
    );
  };

  /* _displayDetailForLodging = idLodging => {
    NavigationService.navigate("LodgingDetail", { idLodging: idLodging });
  };*/
  _displayDetailForLodging = () => {
    NavigationService.navigate("LodgingDetail");
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

  _displayResult() {
    if (this.state.lodgings && this.state.lodgings.length) {
      return (
        <ScrollView>
          <Lodging
            lodging=""
            displayDetailForLodging={this._displayDetailForLodging}
          />
          <Lodging
            lodging=""
            displayDetailForLodging={this._displayDetailForLodging}
          />
          <Lodging
            lodging=""
            displayDetailForLodging={this._displayDetailForLodging}
          />
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
        </ScrollView>
      );
    } else {
      return (
        <View style={styles.containerError}>
          <Text style={styles.textError}>
            Pas de résultat trouvé pour votre recherche
          </Text>
        </View>
      );
    }
  }
  render() {
    const FormInputs = [
      {
        label: "Type de logement",
        name: "category",
        onSubmitEditing: this.handleFormSubmit,
        placeholder: "Cabane, Foret, . . ."
      }
    ];

    return (
      <View>
        <View>
          <Form
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            inputsArray={FormInputs}
            submitButtonTitle="Recherche"
            withButtonSubmit={false}
          />
        </View>
        {this._displayResult()}

        {this._displayLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerError: {
    marginTop: 200
  },
  textError: {
    margin: 20,
    fontStyle: "italic",
    fontSize: 20,
    color: palette.blue,
    textAlign: "center"
  }
});

export default Lodgings;
