import React from "react";
import { Typography, Grid } from "@material-ui/core";
import useStyle from "./Styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

function Footer() {
  const classes = useStyle();
  var d = new Date();
  var year = d.getFullYear();
  return (
    <div>
      <div className={classes.foot}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" className={classes.bold}>
              Prasad <span className={classes.secondclr}>cinemas</span>
            </Typography>
            <Typography variant="body1">
              Prasad Cinemeas is one of the most popular multiplex in the city.
              It is currently renovated with State-of-the-art amenities such as
              Dolby Atmos, 4K Projection, Luxurious Interiors, 15000 Sq.Ft Food
              Court, 7 Screens, Multi Sports Arena and Ample Parking Space for
              the ultimate movie experience.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" className={classes.bold}>
              Our Official <span className={classes.secondclr}>Handlings</span>
            </Typography>
            <FacebookIcon className={classes.large} />
            <InstagramIcon className={classes.large} />
            <WhatsAppIcon className={classes.large} />
          </Grid>
        </Grid>
        <div className={classes.copy} align="center">
          <p className="copy ">
            &copy;{year}
            <span> All Rights reserved | Prasad Cinemas</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
