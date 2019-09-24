import React, { Component } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View
} from "react-native";

import styles from "./styles";

import Form from "../../components/Form";
import Lodging from "../../components/Lodging";
import NavigationService from "../../components/NavigationService";
import { getCategory, getLodgingsFromApiWithSearchText } from "../../API";

class Lodgings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // listPicker: [],
      lodgings: [],
      isLoading: false,
      category: "Cabane"
    };
  }

  handleInputChange = (text, key) => {
    this.setState({
      [key]: text
    });
  };

  _loadLodgings() {
    this.setState({ isLoading: true });
    getLodgingsFromApiWithSearchText(this.state.category).then(data => {
      this.setState({
        lodgings: [...this.state.lodgings, ...data],
        isLoading: false
      });
    });
  }

  componentDidMount() {
    /*getCategory().then(data => {
      const listCategory = [];
      data.map(item => {
        listCategory.push(item.category);
      });
      this.setState({
        listPicker: [...this.state.listPicker, ...listCategory]
      });
    });*/
    this._loadLodgings();
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

  _displayDetailForLodging = idLodging => {
    NavigationService.navigate("LodgingDetail", { idLodging: idLodging });
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
    /*const FormInputs = [
      {
        label: "Type de logement",
        listPicker: this.state.listPicker,
        name: "category",
        onSubmitEditing: this.handleFormSubmit,
        placeholder: "Cabane, Foret, . . .",
        selectedValue: this.state.category,
        type: "picker"
      }
    ];*/

    const FormInputs = [
      {
        label: "Type de logement",
        name: "category",
        onSubmitEditing: this.handleFormSubmit,
        placeholder: "Cabane, Foret, . . .",
        type: "input",
        value: this.state.category
      }
    ];

    return (
      <View style={styles.containerMain}>
        <View>
          <Form
            handleInputChange={this.handleInputChange}
            inputsArray={FormInputs}
            withButtonSubmit={false}
          />
        </View>
        {this._displayResultData()}
      </View>
    );
  }
}

export default Lodgings;
