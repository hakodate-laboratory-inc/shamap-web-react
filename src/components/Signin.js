import React, { Component } from "react";
import { connect } from "react-redux";
import { signInUser } from "../config/redux-token-auth-config";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    const { signInUser } = this.props;
    const email    = e.target.email.value,
          password = e.target.password.value;
    signInUser({email, password})
    .then(() => console.log("Success to login!"))
    .catch(() => console.warn("Faild to login..."));
  }

  render() {
    const { submitForm } = this;
    return (
      <div>
        <form onSubmit={submitForm}>
          <input type="email" name="email" />
          <input type="password" name="password" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, {signInUser})(Signin);
