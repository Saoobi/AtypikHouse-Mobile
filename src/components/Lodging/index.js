import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

class Lodging extends Component {
  render() {
    const { lodging, displayDetailForLodging } = this.props;
    return (
      <TouchableOpacity
        onPress={() => displayDetailForLodging(lodging.id)}
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
          <View style={styles.date_container}>
            <Text style={styles.date_text}>à {lodging.city}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Lodging;
