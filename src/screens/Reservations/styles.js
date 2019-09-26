import { Dimensions } from "react-native";

import palette from "../../stylesheets/palette";

const styles = {
  containerMain: {
    flex: 1
  },
  containerError: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textError: {
    margin: 20,
    fontStyle: "italic",
    fontSize: 20,
    color: palette.blue,
    textAlign: "center"
  }
};

export default styles;
