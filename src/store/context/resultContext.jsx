import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import React, { useReducer, createContext } from "react";



export const ResContext = createContext();

const initialState = {
  explain: [],
  title: [],
  tips: [],
  error: null,
  loading: false,
  message: null,
  cartItems:[],
  result:{},
  child:{},
  results:[],
  childs:[],
  child_id:null,
  appointment:{}
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
const getGradedASNTListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getGradedASNTListSuccess = (state, action) => {
  return updateObject(state, {
    explain: action.res.explain,
    title: action.res.title,
    tips: action.res.tips,
    error: null,
    loading: false
  });
};

const getGradedASNTListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createGradedASNTListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const createGradedASNTListSuccess = (state, action) => {
  return updateObject(state, {
    message: action.message,
    loading: false,
    explain: action.explain,
    title: action.title,
    tips: action.tips,
  });
};

const createGradedASNTListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const createASNTStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createASNTSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    cartItems: action.cartItems
  });
};

const createASNTFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const updateChildStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const updateChildSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    // message: action.message,
    child_id:action.child_id
  });
};

const updateChildFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const createChildStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createChildSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    child:action.child,
    child_id:action.child.id,
    loading: false,
    message:'Welcome '+ action.child.name,
  });
};

const createChildFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    
  });
};

const createAppointmentStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createAppointmentSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    appointment:action.appointment,
   
  });
};

const createAppointmentFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    
  });
};


const getChildsStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getChildsSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    childs:action.childs,
  });
};

const getChildsFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    
  });
};

const createResultStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createResultSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    result:action.result,
    message:'Result created'
  });
};

const createResultFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getResultsStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getResultsSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    explain: action.result.explain,
    title: action.result.title,
    tips: action.result.tip,
    child_id:action.child_id,
  });
};

const getResultsFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    
  });
};


const reducer = (state, action) => {
  switch (action.type) {
    
    case actionTypes.CREATE_ASSIGNMENT_START:
      return createASNTStart(state, action);
    case actionTypes.CREATE_ASSIGNMENT_SUCCESS:
      return createASNTSuccess(state, action);
    case actionTypes.CREATE_ASSIGNMENT_FAIL:
      return createASNTFail(state, action);

      case actionTypes.CREATE_CHILD_START:
        return createChildStart(state, action);
      case actionTypes.CREATE_CHILD_SUCCESS:
        return createChildSuccess(state, action);
      case actionTypes.CREATE_CHILD_FAIL:
        return createChildFail(state, action);
        
      case actionTypes.CREATE_APPOINTMENT_START:
        return createAppointmentStart(state, action);
      case actionTypes.CREATE_APPOINTMENT_SUCCESS:
        return createAppointmentSuccess(state, action);
      case actionTypes.CREATE_APPOINTMENT_FAIL:
        return createAppointmentFail(state, action);   

        case actionTypes.CREATE_RESULT_START:
      return createResultStart(state, action);
    case actionTypes.CREATE_RESULT_SUCCESS:
      return createResultSuccess(state, action);
    case actionTypes.CREATE_RESULT_FAIL:
      return createResultFail(state, action);

      case actionTypes.UPDATE_CHILD_START:
        return updateChildStart(state, action);
      case actionTypes.UPDATE_CHILD_SUCCESS:
        return updateChildSuccess(state, action);
      case actionTypes.UPDATE_CHILD_FAIL:
        return updateChildFail(state, action);

      case actionTypes.MESSAGE_SUCCESS:
        return messageSuccess(state, action);
      case actionTypes.ERROR_SUCCESS:
          return errorSuccess(state, action);

    case actionTypes.GET_GRADED_ASSIGNMENT_LIST_START:
      return getGradedASNTListStart(state, action);
    case actionTypes.GET_GRADED_ASSIGNMENTS_LIST_SUCCESS:
      return getGradedASNTListSuccess(state, action);
    case actionTypes.GET_GRADED_ASSIGNMENTS_LIST_FAIL:
      return getGradedASNTListFail(state, action);  

    case actionTypes.GET_CHILDS_START:
      return getChildsStart(state, action);
    case actionTypes.GET_CHILDS_SUCCESS:
      return getChildsSuccess(state, action);
    case actionTypes.GET_CHILDS_FAIL:
      return getChildsFail(state, action);    

      case actionTypes.GET_RESULTS_START:
        return getResultsStart(state, action);
      case actionTypes.GET_RESULTS_SUCCESS:
        return getResultsSuccess(state, action);
      case actionTypes.GET_RESULTS_FAIL:
        return getResultsFail(state, action);      
 

    case actionTypes.CREATE_GRADED_ASSIGNMENT_LIST_START:
      return createGradedASNTListStart(state, action);
    case actionTypes.CREATE_GRADED_ASSIGNMENTS_LIST_SUCCESS:
      return createGradedASNTListSuccess(state, action);
    case actionTypes.CREATE_GRADED_ASSIGNMENTS_LIST_FAIL:
      return createGradedASNTListFail(state, action);    
    default:
      return state;
  }
};


export const ResContextProvider = props => {
   const [resstate, resdispatch] = useReducer(reducer, initialState);
 
  return (
    <ResContext.Provider value={{resstate, resdispatch}}>
      {props.children}
    </ResContext.Provider>
  );
};


