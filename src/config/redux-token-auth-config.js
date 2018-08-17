import { generateAuthActions } from "redux-token-auth";

const config = {
  authUrl: "localhost:3000/auth",
  userAttributes: {
    email: "E-mail",
    name: "name",
  },
  userRegistrationAttributes: {
    name: "name",
  },
};

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config);

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
};
