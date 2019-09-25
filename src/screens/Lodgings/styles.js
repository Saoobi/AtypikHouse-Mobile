import { Dimensions } from "react-native";

import palette from "../../stylesheets/palette";

const { width: deviceWidth } = Dimensions.get("window");
const HORIZONTAL_MARGIN = 15;

const styles = {
  containerMain: {
    flex: 1
  },
  //popup
  popupContainer: {
    zIndex: 1,
    width: deviceWidth - HORIZONTAL_MARGIN * 2
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
