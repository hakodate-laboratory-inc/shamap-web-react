import { generateAuthActions } from "redux-token-auth";

const config = {
  authUrl: "https://production.shamap.ga/auth",
  userAttributes: {
    id: "id",
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
