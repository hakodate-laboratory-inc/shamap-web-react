import React from "react";
import { connect } from "react-redux";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {
  Menu,
  AccountCircle,
} from "@material-ui/icons";
import Routes from "./Routes";

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  title: {
    textDecoration: "none",
    color: "white",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const App = props => {
  const { classes, title, isSignedIn } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <Menu />
          </IconButton>
          <Typography className={classes.flex} variant="title" color="inherit">
            <a href="/" className={classes.title}>ShaMAP</a> { title ? `- ${title}` : null }
          </Typography>
          { isSignedIn ?
            <div>
              <IconButton
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          : <Button variant="contained" href="/signin">ログイン</Button> }
        </Toolbar>
      </AppBar>
      <Routes />
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    title: state.map.title,
    isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn,
  };
};

export default connect(mapStateToProps, null)(
  withStyles(styles)(App)
);
