import React, { Component } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View
} from "react-native";
import Geocoder from "react-native-geocoding";
import getDirections from "react-native-google-maps-directions";
import moment from "moment";
import { SliderBox } from "react-native-image-slider-box";
import StarRating from "react-native-star-rating";

import Button from "../../components/Button";
import Icon from "../../components/Icon";
import NavigationService from "../../components/NavigationService";
import palette from "../../stylesheets/palette";
import styles from "./styles";
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

  displayReservation() {
    if (this.props.navigation.state.params.reservation) {
      const reservation = this.props.navigation.state.params.reservation;
      console.log(reservation);
      return (
        <View
          style={[styles.container_data, styles.container_reservation_data]}
        >
          <View style={styles.container_titleDescription}>
            <Icon
              style={styles.icon_titleDescription}
              color={palette.black}
              name="globe"
              size={20}
            />
            <Text style={styles.titleDescription_text}>Reservation</Text>
          </View>
          <View style={styles.container_detail}>
            <View style={styles.container_reservation}>
              <View style={styles.container_reservation_column}>
                <Text>
                  Début : {moment(reservation.startDate).format("DD/MM/YYYY")}
                </Text>
                <Text>
                  Fin : {moment(reservation.startDate).format("DD/MM/YYYY")}
                </Text>
              </View>
              <View style={styles.container_reservation_column}>
                <Text>{reservation.voyageur} Voyageurs</Text>
                <Text style={styles.reservation_price_text}>
                  Prix Total : {reservation.prixTotal} €
                </Text>
              </View>
            </View>
          </View>
        </View>
      );
    } else {
      return false;
    }
  }
  _displayLodging() {
    const lodging = this.state.lodging;
    if (lodging != undefined) {
      return (
        <ScrollView style={styles.scrollView_container}>
          <View>
            <View style={styles.container_image}>
              <SliderBox
                images={this.state.images}
                sliderBoxHeight={300}
                dotColor={palette.blue}
              />
            </View>
            <Icon
              color={palette.blue}
              name="arrow-back"
              onPress={() => NavigationService.goBack()}
              size={28}
              style={styles.icon_back}
            />
            <Text style={styles.price_text}>{lodging.price.toFixed(0)}€</Text>
          </View>
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
            {this.displayReservation()}
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
              <View style={styles.container_detail}>
                <FlatList
                  data={lodging.comments}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <View style={styles.container_comment}>
                      <View style={styles.container_comment_header}>
                        <View style={styles.container_comment_name}>
                          <Text style={styles.comment_name_text}>Benjamin</Text>
                        </View>
                        <View style={styles.container_comment_date}>
                          <Text style={styles.comment_date_text}>
                            {moment(item.date).format("DD/MM/YYYY")}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.container_comment_body}>
                        <Text style={styles.comment_text}>{item.comment}</Text>
                      </View>
                      <View style={styles.container_footer}>
                        <View style={styles.container_note}>
                          <StarRating
                            disabled={true}
                            fullStarColor={palette.blue}
                            maxStars={5}
                            rating={item.note}
                            starSize={10}
                          />
                        </View>
                      </View>
                    </View>
                  )}
                />
              </View>
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

export default LodgingDetail;
