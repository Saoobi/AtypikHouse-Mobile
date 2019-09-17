const styles = {
  main_container: {
    margin: 15,
    height: 330
  },
  image: {
    alignSelf: "stretch",
    height: 220,
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: "gray"
  },
  content_container: {
    flex: 1
  },
  header_container: {
    flex: 2,
    flexDirection: "row"
  },
  title_text: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 18,
    flexWrap: "wrap",
    flex: 1,
    paddingRight: 5
  },
  price_text: {
    position: "absolute",
    top: "50%",
    left: "75%",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 25,
    shadowColor: "#878787",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4
  },
  description_container: {
    flex: 2
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666"
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: "right",
    fontSize: 14
  }
};

export default styles;
