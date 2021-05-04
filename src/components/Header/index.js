import React from "react";
import {
  AppBar,
  Button,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";

import styles from "./styles.js";
import Background from "./background.js";
import PrimaryHeader from "./PrimaryHeader/index.js";

const Header = ({ classes, toggleModal, history }) => (
  <div className={classes.headerContainer}>
    <PrimaryHeader history={history} toggleModal={toggleModal} />
    <Background />
    <Typography variant="h1" className={classes.title}>
      STORIES
    </Typography>
  </div>
);

export default withStyles(styles)(Header);
