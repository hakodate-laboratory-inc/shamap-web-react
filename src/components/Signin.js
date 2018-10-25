import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
  Button,
  Snackbar,
  SnackbarContent,
  TextField,
} from "@material-ui/core";
import { theme } from "../config/ui";
import { signInUser } from "../config/redux-token-auth-config";

const styles = {
  error: {
    backgroundColor: theme.palette.error.dark,
  },
};

class Signin extends Component {
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
    const { signInUser } = this.props;
    const email    = e.target.email.value,
          password = e.target.password.value;
    try {
      await signInUser({email, password})
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
        <h2>ログイン</h2>
        <form onSubmit={submitForm}>
          <TextField type="email" name="email" label="メールアドレス" className="AuthInput" fullWidth required />
          <TextField type="password" name="password" label="パスワード" className="AuthInput" fullWidth required />
          <Button type="submit" variant="contained" color="primary">ログイン</Button>

          { this.props.history ?
            <div>
              アカウントをお持ちでなければ
              <Button variant="contained" color="secondary" component={Link} to="/signup">新規登録</Button>
            </div>
          : null }
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

export default connect(null, {signInUser})(Signin);
export { Signin as PureSignin }
