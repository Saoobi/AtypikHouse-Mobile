import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

class Lodging extends Component {
  render() {
    const { lodging, displayDetailForLodging } = this.props;
    return (
      /*<TouchableOpacity
        //onPress={() => displayDetailForLodging(lodging.id)}
        style={styles.main_container}
      >
        <Image style={styles.image} />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{lodging.name}</Text>
            <Text style={styles.price_text}>{lodging.price}€</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>
              {lodging.description}
            </Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>{lodging.city}</Text>
          </View>
        </View>
      </TouchableOpacity>*/
      <TouchableOpacity
        onPress={() => displayDetailForLodging()}
        style={styles.main_container}
      >
        <Image style={styles.image} />
        <Text style={styles.price_text}>340€</Text>
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>
              La possibilité d'évoluer plus simplement
            </Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={1}>
              Ipsam at consequuntur aut debitis iure aut voluptas consectetur
              rerum.
            </Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>à MarechalBourg</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Lodging;
