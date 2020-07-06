import { createStore, applyMiddleware, compose } from "redux";

const intialState = {
  user: {
    userId: "",
    name: "",
    email: "",
    userType: "",
  },
};

const rootReducer = (state = intialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "INITIAL_ADD_USER":
      newState.user = {
        userId: action.payload.userId,
        email: action.payload.email,
        userType: action.payload.userType,
      };
      break;
    case "DELETE_USER":
      newState.user = {};
    default:
      break;
  }
  return newState;
};

let store;
if (process.env.NODE_ENV === "production") {
  store = createStore(rootReducer);
} else {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(
    rootReducer,
    /* preloadedState, */ composeEnhancers(applyMiddleware())
  );
}

export { store };
