<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
//First Main File

>>>>>>> a203f9a652753c3eb747c5bb14407b63e0229025
=======
//First Main File

>>>>>>> a203f9a652753c3eb747c5bb14407b63e0229025
=======
//First Main File

>>>>>>> a203f9a652753c3eb747c5bb14407b63e0229025
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Provider } from "react-redux";
import store from "./store/index";
=======
import { Provider } from "react-redux"; //To wrap the <App />
import store from "./store";
>>>>>>> a203f9a652753c3eb747c5bb14407b63e0229025
=======
import { Provider } from "react-redux"; //To wrap the <App />
import store from "./store";
>>>>>>> a203f9a652753c3eb747c5bb14407b63e0229025
=======
import { Provider } from "react-redux"; //To wrap the <App />
import store from "./store";
>>>>>>> a203f9a652753c3eb747c5bb14407b63e0229025

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
