import { generateAuthActions } from "redux-token-auth";
import { apiServer } from "./constants";

const config = {
  authUrl: `${apiServer}/auth`,
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
