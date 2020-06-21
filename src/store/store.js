import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const intialState = {
  user: {
    userId: "",
    name: "",
    email: "",
    role: "",
    csrfToken: "",
  },
};

const rootReducer = (state = intialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "ADD_USERID_EMAIL_ROLE_CSRFTOKEN":
      newState.user = {
        userId: action.payload.userId,
        email: action.payload.email,
        role: action.payload.role,
        csrfToken: action.payload.cfToken,
      };
      break;

    default:
      break;
  }
  return newState;
};

const middlewareLogger = (store) => (next) => (action) => {
  console.log("Logged Action: ", action);
  next();
};

const store = createStore(rootReducer);

export { store };
