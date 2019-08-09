import palette from "../../stylesheets/palette";

const styles = {
  touchable: {
    default: {
      backgroundColor: palette.blue,
      padding: 15,
      minWidth: 280,
      borderRadius: 6,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    }
  },
  text: {
    default: {
      textAlign: "center",
      fontSize: 18,
      color: palette.white
    }
  }
};

export default styles;
