import { makeStyles } from "@material-ui/core";
import land from "./img/land.jpg";

const useStyle = makeStyles((theme) => ({
  d1: {
    height: "100vh",
    backgroundImage: `url(${land})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
  },
  apptitle: {
    fontWeight: 800,
    color: "white",
  },

  bodytitle: {
    fontWeight: 800,
    padding: theme.spacing(5),
  },
  secondclr: {
    color: "#FFA500",
  },
  herosec: {
    marginTop: theme.spacing(25),
  },

  //Canteen
  snacks: {
    fontWeight: 700,
    // paddingTop: theme.spacing(10),
    // paddingBottom: theme.spacing(3),
    padding: theme.spacing(10, 3, 3, 3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: theme.spacing(0, 1),
  },
  forflex: {
    display: "flex",
    paddingLeft: theme.spacing(2),
  },
  avatarinline: {
    padding: theme.spacing(0, 10),
  },

  //footer
  foot: {
    backgroundColor: "black",
    color: "white",

    padding: theme.spacing(5),
  },
  bold: {
    fontWeight: 800,
    paddingBottom: theme.spacing(2),
  },
  footgrid: {
    textAlign: "center",
  },
  copy: {
    padding: theme.spacing(3),
  },
}));

export default useStyle;
