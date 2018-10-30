import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  Button,
  Snackbar,
  SnackbarContent,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import { theme } from "../config/ui";
import { registerUser } from "../config/redux-token-auth-config";

const styles = {
  error: {
    backgroundColor: theme.palette.error.dark,
  },
};

class PasswordError extends Error {
  constructor(message, ...params) {
    super(...params);

    if(Error.captureStackTrace) {
      Error.captureStackTrace(this, PasswordError);
    }

    this.name = null;
    this.confirmPassword = message;
  }
}

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snackOpen: false,
      errors: {},
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleSnackClose = this.handleSnackClose.bind(this);
  }

  async submitForm(e) {
    e.preventDefault();
    const { registerUser } = this.props;
    const name     = e.target.name.value,
          email    = e.target.email.value,
          password = e.target.password.value,
          confirmPassword = e.target.confirmPassword.value;
    try {
      await (() => {
        if(password !== confirmPassword) throw new PasswordError("Wrong password");
      })();
      await registerUser({name, email, password});
      this.setState({ redirect: true });
    } catch(e) {
      this.setState({ errors: e.response ? e.response.data.errors : e });
      this.setState({ snackOpen: true });
    }
  }

  handleSnackClose(event, reason) {
    this.setState({ snackOpen: false });
  }

  render() {
    const { errors } = this.state;
    const submitForm = this.submitForm;
    return (
      <div className="AuthForm">
        <h2>ユーザ登録</h2>
        <form onSubmit={submitForm}>
          <FormControl className="AuthInput"  error={errors.name} aria-describedby="name-error" fullWidth>
            <InputLabel htmlFor="name">ユーザ名</InputLabel>
            <Input type="text" id="name" name="name" required />
            <FormHelperText id="name-error">{errors.name}</FormHelperText>
          </FormControl>
          <FormControl className="AuthInput" error={errors.email} aria-describedby="email-error" fullWidth>
            <InputLabel htmlFor="email">メールアドレス</InputLabel>
            <Input type="email" id="email" name="email" required />
            <FormHelperText id="email-error">{errors.email}</FormHelperText>
          </FormControl>
          <FormControl className="AuthInput" error={errors.password || errors.confirmPassword} aria-describedby="password-error" fullWidth>
            <InputLabel htmlFor="password">パスワード</InputLabel>
            <Input type="password" id="password" name="password" required />
            <FormHelperText id="password-error">{errors.password}</FormHelperText>
          </FormControl>
          <FormControl className="AuthInput" error={errors.password || errors.confirmPassword} aria-describedby="confirm-password-error" fullWidth>
            <InputLabel htmlFor="confirm-password">パスワード確認</InputLabel>
            <Input type="password" id="confirm-password" name="confirmPassword" required />
            <FormHelperText id="confirm-password-error">{errors.confirmPassword}</FormHelperText>
          </FormControl>

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
            message={<span>新規登録に失敗しました</span>}
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
