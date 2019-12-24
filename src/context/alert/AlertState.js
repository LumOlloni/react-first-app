import React from "react";
import { SET_ALERT, REMOVE_ALERT } from "../types";
import { useReducer } from "react";

import AlertReducer from "./AlertReducer";
import AlertContext from "./AlertContext";

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, type) => {
    // setAlert({ msg, type });

    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
