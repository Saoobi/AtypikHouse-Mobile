import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Dimensions
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Geocoder from "react-native-geocoding";
import getDirections from "react-native-google-maps-directions";

import Button from "../../components/Button";
import palette from "../../stylesheets/palette";
import Icon from "../../components/Icon";
import NavigationService from "../../components/NavigationService";
import { getLodgingDetailFromApi } from "../../API";

class LodgingDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lodging: undefined,
      isLoading: true,
      images: []
    };
  }

  componentDidMount() {
    getLodgingDetailFromApi(this.props.navigation.state.params.idLodging).then(
      data => {
        this.setState({
          lodging: data,
          isLoading: false,
          images: data.albums
        });
      }
    );
  }

  _getMapsLocation() {
    const GOOGLE_MAPS_APIKEY = "AIzaSyC_hq_XTTDYtv6WeyskuFJ2W-0I3RLl41c";

    Geocoder.init(GOOGLE_MAPS_APIKEY);

    //Get GPS position from location name
    Geocoder.from(
      `${this.state.lodging.adress} ${this.state.lodging.codePostal} ${this.state.lodging.city}`
    )
      .then(json => {
        const positionDestination = json.results[0].geometry.location;

        console.log(positionDestination);

        //Itineraire from current location (default) to positionDestination
        const data = {
          destination: {
            latitude: positionDestination.lat,
            longitude: positionDestination.lng
          },
          params: [
            {
              key: "travelmode",
              value: "driving"
            }
          ]
        };

        getDirections(data);
      })
      .catch(error => console.warn(error));
  }

  _displayLodging() {
    const lodging = this.state.lodging;
    if (lodging != undefined) {
      return (
        <ScrollView style={styles.scrollView_container}>
          <SliderBox
            images={this.state.images}
            sliderBoxHeight={300}
            dotColor={palette.blue}
          />
          <Icon
            color={palette.blue}
            name="arrow-back"
            onPress={() => NavigationService.goBack()}
            size={28}
            style={styles.icon_back}
          />

          <View style={styles.container_content}>
            <View style={styles.container_title}>
              <Text style={styles.category_text}>{lodging.category}</Text>
              <Text style={styles.title_text}>{lodging.name}</Text>
            </View>
            <View style={styles.container_data}>
              <Text>{lodging.city}</Text>
              <Text>Hôte : {lodging.proprietaire.firstname}</Text>
            </View>
            <View style={styles.container_data}>
              <View style={styles.container_titleDescription}>
                <Icon
                  style={styles.icon_titleDescription}
                  color={palette.black}
                  name="home"
                  size={20}
                />
                <Text style={styles.titleDescription_text}>Logement</Text>
              </View>
              <View style={styles.container_detail}>
                <Text>
                  {lodging.room} pièces - {lodging.surface} m²
                </Text>
                <Text style={styles.description_text}>
                  {lodging.description}
                </Text>
              </View>
            </View>
            <View style={styles.container_data}>
              <View style={styles.container_titleDescription}>
                <Icon
                  style={styles.icon_titleDescription}
                  color={palette.black}
                  name="navigate"
                  size={20}
                />
                <Text style={styles.titleDescription_text}>Localisation</Text>
              </View>
              <View style={styles.container_detail}>
                <Text>
                  {lodging.adress}, {lodging.codePostal}
                </Text>
                <Text>{lodging.city}</Text>
                <Button
                  buttonType="transparent"
                  buttonTitle="Par ici !"
                  onPress={() => this._getMapsLocation()}
                />
              </View>
            </View>
            <View style={styles.container_data}>
              <View style={styles.container_titleDescription}>
                <Icon
                  style={styles.icon_titleDescription}
                  color={palette.black}
                  name="chatboxes"
                  size={20}
                />
                <Text style={styles.titleDescription_text}>Commentaires</Text>
              </View>
              <View style={styles.container_detail}></View>
            </View>
          </View>
        </ScrollView>
      );
    }
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  render() {
    //const idLodging = this.props.navigation.state.params.idLodging;
    return (
      <View style={styles.main_container}>
        {this._displayLodging()}
        {this._displayLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollView_container: {
    flex: 1
  },
  icon_back: {
    position: "absolute",
    top: "6%",
    left: "5%"
  },
  container_content: {
    flex: 1,
    margin: 25
  },
  container_title: {
    marginBottom: 25
  },
  container_data: {
    marginBottom: 15
  },
  category_text: {
    color: palette.blue,
    fontSize: 13,
    fontWeight: "bold"
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 21,
    flex: 1,
    flexWrap: "wrap",
    color: palette.black
  },
  container_titleDescription: {
    flexDirection: "row",
    marginBottom: 5
  },
  icon_titleDescription: {
    marginRight: 10
  },
  titleDescription_text: {
    fontSize: 15,
    fontWeight: "bold"
  },
  container_detail: {
    marginLeft: 10
  },
  description_text: {
    fontStyle: "italic",
    color: palette.black
  }
});

export default LodgingDetail;
