import {
  AppBar,
  Button,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";

import styles from "./styles";

const PrimaryHeader = ({ classes, toggleModal, history }) => (
  <AppBar position="fixed" className={classes.primaryHeader}>
    <Grid container>
      <Grid xs={6}>
        <Typography>
          <Link to="/" className={classes.logo}>
            MALANA
          </Link>
        </Typography>
      </Grid>
      <Grid xs={6} style={{ textAlign: "right" }}>
        {history.location.pathname === "/" && (
          <Button
            variant="contained"
            color="default"
            className={classes.newPostButton}
            onClick={toggleModal}
          >
            New Post
          </Button>
        )}
      </Grid>
    </Grid>
  </AppBar>
);

export default withStyles(styles)(PrimaryHeader);
