//Management file for all reducers

/*benefits of using configureStore:
Combines Reducers,Adds Middleware,Enables DevTools, Simplifies Configuration

 */

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterReducer";
import authReducer from "./authReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authReducer,
  },
});

export default store;
