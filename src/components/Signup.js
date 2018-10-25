import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  Button,
  Snackbar,
  SnackbarContent,
  TextField,
} from "@material-ui/core";
import { theme } from "../config/ui";
import { registerUser } from "../config/redux-token-auth-config";

const styles = {
  error: {
    backgroundColor: theme.palette.error.dark,
  },
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snackOpen: false,
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleSnackClose = this.handleSnackClose.bind(this);
  }

  async submitForm(e) {
    e.preventDefault();
    const { registerUser } = this.props;
    const name     = e.target.name.value,
          email    = e.target.email.value,
          password = e.target.password.value;
    try {
      await registerUser({name, email, password});
      this.setState({ redirect: true });
    } catch(e) {
      this.setState({ snackOpen: true });
    }
  }

  handleSnackClose(event, reason) {
    this.setState({ snackOpen: false });
  }

  render() {
    const submitForm = this.submitForm;
    return (
      <div className="AuthForm">
        <h2>ユーザ登録</h2>
        <form onSubmit={submitForm}>
          <TextField type="text" name="name" label="ユーザ名" className="AuthInput" fullWidth required />
          <TextField type="email" name="email" label="メールアドレス" className="AuthInput" fullWidth required />
          <TextField type="password" name="password" label="パスワード" className="AuthInput" fullWidth required />
          <Button type="submit" variant="contained" color="secondary">ユーザ登録</Button>
        </form>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={this.state.snackOpen}
          autoHideDuration={5000}
          onClose={this.handleSnackClose}
        >
          <SnackbarContent
            style={styles.error}
            message={<span>ログインに失敗しました</span>}
          />
        </Snackbar>

        { this.state.redirect ?
          <Redirect to="/" />
          : null
        }
      </div>
    )
  }
}

export default connect(null, {registerUser})(Signup);
export { Signup as PureSignup }
