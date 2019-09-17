import palette from "../../stylesheets/palette";

const styles = {
  containerMain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 20,
    backgroundColor: palette.blueGray
  },
  logo: {
    flex: 3
  },
  containerButton: {
    flex: 2,
    display: "flex",
    justifyContent: "space-between"
  },
  containerPrivacy: {
    flex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default styles;
