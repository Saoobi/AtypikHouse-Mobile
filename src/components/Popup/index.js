import React from "react";
import { View, Text } from "react-native";

import Icon from "../Icon";
import styles from "./styles";

function Popup({ appIconSource, appTitle, timeText, title, body }) {
  let popupHeaderContainer = styles.popupHeaderContainer.default;
  if (appTitle == "Succes") {
    popupHeaderContainer = styles.popupHeaderContainer.success;
  } else if (appTitle == "Erreur") {
    popupHeaderContainer = styles.popupHeaderContainer.error;
  }
  return (
    <View style={styles.popupContentContainer}>
      <View style={popupHeaderContainer}>
        <View style={styles.headerIconContainer}>
          <Icon name={appIconSource} size={18} />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText} numberOfLines={1}>
            {appTitle || ""}
          </Text>
        </View>
        <View style={styles.headerTimeContainer}>
          <Text style={styles.headerTime} numberOfLines={1}>
            {timeText || ""}
          </Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.contentTitleContainer}>
          <Text style={styles.contentTitle}>{title || ""}</Text>
        </View>
        <View style={styles.contentTextContainer}>
          <Text style={styles.contentText}>{body || ""}</Text>
        </View>
      </View>
    </View>
  );
}

export default Popup;
