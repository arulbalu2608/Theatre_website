import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  CssBaseline,
  Container,
} from "@material-ui/core";
import React from "react";
import useStyle from "./Styles";

function Landing() {
  const classes = useStyle();
  return (
    <>
      <div className={classes.d1}>
        <AppBar color="transparent">
          <Toolbar>
            <Typography variant="h5" className={classes.apptitle}>
              Prasad <span className={classes.secondclr}>Cinemas</span>
            </Typography>
          </Toolbar>
        </AppBar>

        <CssBaseline />
        <Container>
          <section className={classes.herosec}>
            <div>
              <Typography variant="h3" className={classes.apptitle}>
                Enjoy The Movie In Our
                <br />
                <span className={classes.secondclr}>4K RGB Projector</span>
              </Typography>
              <br />
              <Button size="large" variant="contained" color="secondary">
                Book Your Tickets
              </Button>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
}

export default Landing;
