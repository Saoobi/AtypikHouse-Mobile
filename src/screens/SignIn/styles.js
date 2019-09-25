import { Dimensions } from "react-native";

import palette from "../../stylesheets/palette";

const { width: deviceWidth } = Dimensions.get("window");
const HORIZONTAL_MARGIN = 15;

const styles = {
  container_global: {
    display: "flex",
    flex: 1
  },
  container_main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 20,
    backgroundColor: palette.blueGray
  },
  logo: {
    zIndex: 0,
    justifyContent: "center",
    alignItems: "center",
    flex: 2
  },
  form: {
    flex: 2,
    justifyContent: "center"
  },
  //popup
  popupContainer: {
    zIndex: 1,
    width: deviceWidth - HORIZONTAL_MARGIN * 2
  }
};

export default styles;
