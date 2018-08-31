import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Snackbar,
  SnackbarContent,
  TextField,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { signInUser } from "../config/redux-token-auth-config";

const theme = createMuiTheme();

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    margin: theme.spacing.unit,
    width: "80%",
    maxWidth: "500px",
  },
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
      console.log("Success to login!");
      window.location.href = "/";
    } catch(e) {
      console.warn("Faild to login...");
      this.setState({ snackOpen: true });
    }
  }

  handleSnackClose(event, reason) {
    this.setState({ snackOpen: false });
  }

  render() {
    const submitForm = this.submitForm;
    return (
      <div>
        <form style={styles.container} onSubmit={submitForm}>
          <TextField style={styles.textField} type="email" name="email" label="メールアドレス" />
          <TextField style={styles.textFiled} type="password" name="password" label="パスワード" />
          <Button type="submit" variant="contained" color="primary">ログイン</Button>
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
      </div>
    )
  }
}

export default connect(null, {signInUser})(Signin);
export { Signin as PureSignin }
