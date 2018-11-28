import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
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
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {
  Menu as MenuIcon,
  AccountCircle,
} from "@material-ui/icons";
import { signOutUser } from "./config/redux-token-auth-config";

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

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerShow: false,
      accountMenu: false,
      redirect: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.toggleAccountMenu = this.toggleAccountMenu.bind(this);
    this.handleAccountMenuClose = this.handleAccountMenuClose.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  toggleDrawer(bool) {
    this.setState({ drawerShow: bool});
  }

  toggleAccountMenu() {
    this.setState(state => ({ accountMenu: !state.accountMenu }));
  }

  handleAccountMenuClose() {
    this.setState({ accountMenu: false });
  }

  signOut(e) {
    e.preventDefault();
    this.props.signOutUser()
      .then(() => this.setState({ redirect: true }))
  }

  render() {
    const { classes, title, isSignedIn } = this.props;
    const { drawerShow, accountMenu } = this.state;
    return (
      <div className={classes.root}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={() => this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography className={classes.flex} variant="title" color="inherit">
              <Link to="/" className={classes.title}>ShaMAP</Link> <span className={classes.subtitle}>{ title ? `- ${title}` : null }</span>
            </Typography>
            { isSignedIn ?
              <div>
                <IconButton
                  color="inherit"
                  buttonRef={node => this.accountMenuAnchor = node}
                  aria-owns={accountMenu ? "menu-list-grow" : null}
                  aria-haspopup="true"
                  onClick={this.toggleAccountMenu}
                >
                  <AccountCircle />
                </IconButton>
                <Popper
                  open={accountMenu}
                  anchorEl={this.accountMenuAnchor}
                  placement="bottom-end"
                  style={{ zIndex: 1000 }}
                  transition disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      id="menu-list-grow"
                      style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={this.handleAccountMenuClose}>
                          <MenuList onClick={this.handleAccountMenuClose}>
                            <MenuItem onClick={this.signOut}>ログアウト</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            : <Button component={Link} variant="contained" to="/signin">ログイン</Button> }
          </Toolbar>
        </AppBar>

        <Drawer
          open={drawerShow}
          onClose={() => this.toggleDrawer(false)}
        >
          <List onClick={() => this.toggleDrawer(false)}>
            <ListItem button component={Link} to="/maps">
              <ListItemText>Maps</ListItemText>
            </ListItem>
          </List>
        </Drawer>

        { this.state.redirect ?
          <Redirect to="/" />
        : null }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.map.title,
  isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn,
});

export default connect(mapStateToProps, {signOutUser})(
  withStyles(styles)(Navbar)
);
