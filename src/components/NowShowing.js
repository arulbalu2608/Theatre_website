import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import useStyle from "./Styles";

import { Nowshowing, UpComing } from "./Movies";
import MovieIcon from "@material-ui/icons/Movie";

function NowShowing() {
  const classes = useStyle();
  return (
    <div>
      <Container>
        <Typography variant="h4" className={classes.bodytitle}>
          Now <span className={classes.secondclr}>Showing</span>
          <MovieIcon fontSize="large" />
        </Typography>
        <Grid container spacing={4}>
          {Nowshowing.map((movie) => {
            return (
              <Grid item key={movie.id} xs={12} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia component="img" srcSet={movie.img} />
                    <CardContent>
                      <Typography variant="h4" component="h2">
                        {movie.title}
                      </Typography>
                      <Typography variant="caption">{movie.genere}</Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {movie.about}
                      </Typography>
                      <br />
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Typography variant="h6">{movie.screen}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="h6">
                            Time : {movie.time}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="medium"
                      fullWidth
                      variant="contained"
                      color="secondary"
                    >
                      Book Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Typography variant="h4" className={classes.bodytitle}>
          Up <span className={classes.secondclr}>Coming</span>
          <MovieIcon fontSize="large" />
        </Typography>
        <Grid container spacing={4}>
          {UpComing.map((movie) => {
            return (
              <Grid item key={movie.id} xs={12} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia component="img" height="250" image={movie.img} />
                    <CardContent>
                      <Typography variant="h4" component="h2">
                        {movie.title}
                      </Typography>
                      <Typography variant="caption">{movie.genere}</Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {movie.about}
                      </Typography>
                      <br />
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="medium"
                      fullWidth
                      variant="contained"
                      color="secondary"
                    >
                      Pre Booking
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default NowShowing;
