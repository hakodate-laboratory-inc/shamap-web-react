import React, { Component } from "react";
import { connect } from "react-redux";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
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
  subtitle: {
    fontSize: 15,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerShow: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer(bool) {
    this.setState({ drawerShow: bool});
  }

  render() {
    const { classes, title, isSignedIn } = this.props;
    const { drawerShow } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={() => this.toggleDrawer(true)}>
              <Menu />
            </IconButton>
            <Typography className={classes.flex} variant="title" color="inherit">
              <a href="/" className={classes.title}>ShaMAP</a> <span className={classes.subtitle}>{ title ? `- ${title}` : null }</span>
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

        <Drawer
          open={drawerShow}
          onClose={() => this.toggleDrawer(false)}
        >
          <List>
            <ListItem button component="a" href="/maps">
              <ListItemText>Maps</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.map.title,
  isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn,
});

export default connect(mapStateToProps, null)(
  withStyles(styles)(App)
);
