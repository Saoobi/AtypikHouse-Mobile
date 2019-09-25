import palette from "../../stylesheets/palette";

const styles = {
  popupContentContainer: {
    backgroundColor: "white", // TEMP
    borderRadius: 12,
    minHeight: 86,
    // === Shadows ===
    // Android
    elevation: 2,
    // iOS
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },

  popupHeaderContainer: {
    default: {
      height: 32,
      backgroundColor: "#F1F1F1",
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      paddingVertical: 6,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    success: {
      height: 32,
      backgroundColor: palette.green,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      paddingVertical: 6,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    error: {
      height: 32,
      backgroundColor: palette.red,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      paddingVertical: 6,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }
  },
  headerIconContainer: {
    height: 20,
    width: 20,
    marginLeft: 12,
    marginRight: 8,
    borderRadius: 4
  },
  headerIcon: {
    height: 20,
    width: 20,
    resizeMode: "contain"
  },
  headerTextContainer: {
    flex: 1
  },
  headerText: {
    fontSize: 13,
    fontWeight: "bold",
    color: palette.black,
    lineHeight: 20
  },
  headerTimeContainer: {
    marginHorizontal: 16
  },
  headerTime: {
    fontSize: 12,
    color: "#808080",
    lineHeight: 14
  },
  contentContainer: {
    width: "100%",
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 16
  },
  contentTitleContainer: {},
  contentTitle: {
    fontSize: 15,
    lineHeight: 18,
    color: "black"
  },
  contentTextContainer: {},
  contentText: {
    fontSize: 12,
    lineHeight: 14,
    color: "#808080",
    marginTop: 5
  }
};

export default styles;
