import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import moment from "moment";

import styles from "./styles";

class Lodging extends Component {
  render() {
    const { lodging, displayDetailForLodging } = this.props;

    const reservationDate = () => {
      if (this.props.reservation) {
        const { reservation } = this.props;

        return (
          <View style={styles.reservation_container}>
            <Text style={styles.reservation_text}>
              Du {moment(reservation.startDate).format("DD/MM/YYYY")} au{" "}
              {moment(reservation.endDate).format("DD/MM/YYYY")}
            </Text>
          </View>
        );
      } else {
        return false;
      }
    };

    const reservationDisplayDetail = () => {
      if (this.props.reservation) {
        return displayDetailForLodging(lodging.id, this.props.reservation);
      } else {
        return displayDetailForLodging(lodging.id);
      }
    };
    return (
      <TouchableOpacity
        onPress={() => reservationDisplayDetail()}
        style={styles.main_container}
      >
        <Image style={styles.image} source={{ uri: lodging.albums[0] }} />
        <Text style={styles.price_text}>{lodging.price.toFixed(0)}€</Text>
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{lodging.name}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={1}>
              {lodging.description}
            </Text>
          </View>
          <View style={styles.footer_container}>
            {reservationDate()}
            <View style={styles.date_container}>
              <Text style={styles.date_text}>à {lodging.city}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Lodging;
