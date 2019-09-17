import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image
} from "react-native";
//import { getLodgingDetailFromApi, getImageFromApi } from "../API/TMDBAPi";

class LodgingDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lodging: undefined,
      isLoading: true
    };
  }

  /* componentDidMount() {
    getLodgingDetailFromApi(this.props.navigation.state.params.idLodging).then(
      data => {
        this.setState({
          lodging: data,
          isLoading: false
        });
      }
    );
  }*/

  _displayLodging() {
    const lodging = this.state.lodging;
    if (lodging != undefined) {
      return (
        <ScrollView style={styles.scrollView_container}>
          <Image
            style={styles.image}
            source={{ uri: getImageFromApi(lodging.backdrop_path) }}
          />
          <Text style={styles.title_text}>{lodging.title}</Text>
          <Text style={styles.description_text}>{lodging.overview}</Text>
          <Text style={styles.default_text}>Sorti le </Text>
          <Text style={styles.default_text}>
            Note : {lodging.vote_average} / 10
          </Text>
          <Text style={styles.default_text}>
            Nombre de votes : {lodging.vote_count}
          </Text>
          <Text style={styles.default_text}>Budget :</Text>
          <Text style={styles.default_text}>
            Genre(s) :{" "}
            {lodging.genres
              .map(function(genre) {
                return genre.name;
              })
              .join(" / ")}
          </Text>
          <Text style={styles.default_text}>
            Companie(s) :{" "}
            {lodging.production_companies
              .map(function(company) {
                return company.name;
              })
              .join(" / ")}
          </Text>
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
  scrollview_container: {
    flex: 1
  },
  image: {
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 35,
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: "#000000",
    textAlign: "center"
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666",
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  }
});

export default LodgingDetail;
