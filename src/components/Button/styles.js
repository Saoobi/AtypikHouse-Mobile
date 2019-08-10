import palette from "../../stylesheets/palette";

const { blue, white } = palette;

export const baseStyles = {
  touchable: {
    padding: 12,
    minWidth: "100%",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  text: {
    fontSize: 18,
    textAlign: "center"
  }
};

export const styles = {
  contained: {
    primary: {
      touchable: {
        backgroundColor: blue
      },
      text: {
        color: white
      }
    }
  },

  transparent: {
    primary: {
      touchable: {
        backgroundColor: "transparent",
        shadowOffset: {
          width: 0,
          height: 0
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0
      },
      text: {
        color: blue,
        textDecorationLine: "underline",
        textDecorationColor: blue
      }
    }
  }
};
