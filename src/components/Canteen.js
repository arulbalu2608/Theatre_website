import React from "react";
import { Typography, Grid, Avatar, CardMedia } from "@material-ui/core";
import useStyle from "./Styles";
import can from "./img/cantenn.png";
import popcorn from "./img/popcorn.jpg";
import cola from "./img/cola.jpg";
import vegroll from "./img/vegroll.jpg";
import chicken from "./img/chicken.jpg";

function Canteen() {
  const classes = useStyle();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardMedia component="img" image={can} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h3" className={classes.snacks}>
            Book your Food With Tickets and
            <span className={classes.secondclr}> Get 10% Offer</span>
          </Typography>
          <div className={classes.forflex}>
            <Avatar src={popcorn} className={classes.large} />
            <Avatar src={cola} className={classes.large} />
            <Avatar src={vegroll} className={classes.large} />
            <Avatar src={chicken} className={classes.large} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Canteen;
