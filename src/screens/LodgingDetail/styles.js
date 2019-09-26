import palette from "../../stylesheets/palette";
import { StyleSheet } from "react-native";

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
  scrollView_container: {
    flex: 1
  },
  container_image: {
    height: 300,
    backgroundColor: palette.blueGray
  },
  price_text: {
    position: "absolute",
    top: "82%",
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
  icon_back: {
    position: "absolute",
    top: "9%",
    left: "5%"
  },
  container_content: {
    flex: 1,
    margin: 25
  },
  container_title: {
    marginBottom: 25
  },
  container_data: {
    marginBottom: 15
  },
  container_reservation_data: {
    padding: 5,
    borderWidth: 2,
    borderColor: palette.blue,
    borderRadius: 4
  },
  category_text: {
    color: palette.blue,
    fontSize: 13,
    fontWeight: "bold"
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 21,
    flex: 1,
    flexWrap: "wrap",
    color: palette.black
  },
  container_titleDescription: {
    flexDirection: "row",
    marginBottom: 5
  },
  icon_titleDescription: {
    marginRight: 10
  },
  titleDescription_text: {
    fontSize: 15,
    fontWeight: "bold"
  },
  container_detail: {
    marginLeft: 10
  },
  container_reservation: {
    flex: 1,
    flexDirection: "row"
  },
  container_reservation_column: {
    flex: 1
  },
  reservation_price_text: {
    color: palette.blue,
    fontWeight: "bold"
  },
  description_text: {
    fontStyle: "italic",
    color: palette.black
  },
  container_comment: {
    flex: 1,
    paddingBottom: 10
  },
  container_comment_header: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: palette.blueGray,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingHorizontal: 5
  },
  container_comment_name: {
    flex: 1
  },
  comment_name_text: {
    fontSize: 16,
    color: palette.blue
  },
  container_comment_date: {
    flex: 1
  },
  comment_date_text: {
    textAlign: "right",
    fontStyle: "italic",
    fontSize: 12
  },
  container_comment_body: {
    color: "#666666",
    margin: 5,
    marginBottom: 10
  },
  container_footer: {
    marginHorizontal: 5
  },
  container_note: {
    width: 70,
    alignSelf: "flex-end"
  }
});

export default styles;
