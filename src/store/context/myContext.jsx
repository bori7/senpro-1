import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import React, { useReducer, createContext } from "react";



export const MyContext = createContext();

const initialState = {

  assignments: [],
  currentAssignment: {},
  token: null,
  username: null,
  userId: null,
  error: null,
  loading: false,
  message: null,
  child:{},

};

const messageSuccess = (state, action) => {
  return updateObject(state, {
    message: null,
    
  });
};

const errorSuccess = (state, action) => {
  return updateObject(state, {
    error:null,
  });
};


const authStart = (state, action) => {
  
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.user.token,
    username: action.user.username,
    userId: action.user.userId,
    error: null,
    loading: false
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updateObject(state, initialState);
};



const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
  
      case actionTypes.MESSAGE_SUCCESS:
        return messageSuccess(state, action);
      case actionTypes.ERROR_SUCCESS:
          return errorSuccess(state, action);

    default:
      return state;
  }
};



export const MyContextProvider = props => {
   const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{state, dispatch}}>
      {props.children}
    </MyContext.Provider>
  );
};


