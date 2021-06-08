import axios from "axios";
import * as actionTypes from "./actionTypes";
import  {HOST_URL} from '../clientResult';




const createASNTStart = () => {
  return {
    type: actionTypes.CREATE_ASSIGNMENT_START
  };
};

const createChildStart = (dob) => {
  return {
    type: actionTypes.CREATE_CHILD_START,
    D_O_B: dob
  };
};

const createAppointmentStart = () => {
  return {
    type: actionTypes.CREATE_APPOINTMENT_START
  };
};

const getChildsStart = () => {
  return {
    type: actionTypes.GET_CHILDS_START
  };
};

const getResultsStart = () => {
  return {
    type: actionTypes.GET_RESULTS_START
  };
};

const createResultStart = () => {
  return {
    type: actionTypes.CREATE_RESULT_START
  };
};

const updateChildStart = () => {
  return {
    type: actionTypes.UPDATE_CHILD_START,
  };
};

const updateChildSuccess = (res) => {
  return {
    type: actionTypes.UPDATE_CHILD_SUCCESS,
    child_id:res.id,
    message :'Successful'
  };
};

const updateChildFail = (err) => {
  return {
    type: actionTypes.UPDATE_CHILD_FAIL,
    error:err
  };
};


const createASNTSuccess=(message, cart) => {
  return {
    type: actionTypes.CREATE_ASSIGNMENT_SUCCESS,
    message:message,
    cartItems: cart
  };
};

const createChildSuccess=(res) => {
  return {
    type: actionTypes.CREATE_CHILD_SUCCESS,
    child:res,
    
  };
};

const createAppointmentSuccess=(res) => {
  return {
    type: actionTypes.CREATE_APPOINTMENT_SUCCESS,
    appointment:res,
    
  };
};

const getChildsSuccess=(res) => {
  return {
    type: actionTypes.GET_CHILDS_SUCCESS,
    childs:res,
    
  };
};

const getResultsSuccess=(res,id) => {
  return {
    type: actionTypes.GET_RESULTS_SUCCESS,
    result:res,
    child_id:id,
  };
};

const createResultSuccess=(result) => {
  return {
    type: actionTypes.CREATE_RESULT_SUCCESS,
    result:result,
    
  };
};

const createResultFail = error => {
  return {
    type: actionTypes.CREATE_RESULT_FAIL,
    error: error
  };
};



const getChildsFail = error => {
  return {
    type: actionTypes.GET_CHILDS_FAIL,
    error: error
  };
};

const getResultsFail = error => {
  return {
    type: actionTypes.GET_RESULTS_FAIL,
    error: error
  };
};

const createChildFail = error => {
  return {
    type: actionTypes.CREATE_CHILD_FAIL,
    error: error
  };
};

const createAppointmentFail = error => {
  return {
    type: actionTypes.CREATE_APPOINTMENT_FAIL,
    error: error
  };
};


export const createASNT = (cart,dispatch) => {
 
  dispatch(createASNTStart());
  
  dispatch(createASNTSuccess('Submitted', cart));
 

};

  
export const getChilds = (parent,token,dispatch) => {
  
  dispatch(getChildsStart());
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`
  };
  return axios
    .get(`${HOST_URL}/clients/childs/?parent=${parent}&ordering=-timestamp`)
    .then(res => {
      let childs = res.data;
     
      dispatch(getChildsSuccess( childs));
      console.log(res.data)
      return res.data
    })
    .catch(err => {
     
      dispatch(getChildsFail(err.response.data));
    });
};

export const createChild = (token, child, dispatch,dispatch2) => {
 
    
    
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
  axios
      .post(`${HOST_URL}/clients/childs/`, child)
      .then(res => {
        
        dispatch2(createChildSuccess(res.data));

        dispatch2(createChildStart(child.D_O_B));

      })
      .catch(err => {
        dispatch2(createChildFail(err.response));
      });
  
};

export const createAppointment = (token, appointment, dispatch, props) => {
 
  dispatch(createAppointmentStart());
  
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.headers = {
    "Content-Type": "application/json",
   //Authorization: `Token ${process.env.REACT_APP_Api_Key}`
  };
return axios
    .post(`${HOST_URL}/clients/appointments/`, appointment)
    .then(res => {
      console.log(res)
      dispatch(createAppointmentSuccess(res.data));
      return res
     
    })
    .catch(err => {
      dispatch(createAppointmentFail(err.response));
    });

};



export const updateChild = (id,child, token, dispatch) => {
  
  dispatch(updateChildStart());
  
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`
  };
axios
    .put(`${HOST_URL}/clients/childs/${id}/`, child)
    .then(res => {
     
      dispatch(updateChildSuccess(res.data));

    })
    .catch(err => {
     
      dispatch(updateChildFail(err.response));
      
    });

};


export const createResult = (token, result, dispatch) => {
 
   
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    var x 
    let results = []
    for(x of result.title){
      var reso = {
        title: x,
        explain: result.explain[result.title.indexOf(x)],
        tip: result.tip[result.title.indexOf(x)],
        child: result.child
    }

    results.push(reso)
    
      
    }

    return axios
      .post(`${HOST_URL}/result/create`, results)
      
      .catch(err => {
        
        
      });
  
  
};

export const getResults = (child,token,dispatch) => {
 
  dispatch(getResultsStart());
 
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`
  };
  
  return axios
    .get(`${HOST_URL}/clients/results/?child=${child}`)
    .then(res => {
      const results = res.data;
      const result = {title:[],
                      explain:[],
                    tip:[]}
      var x;              
      for (x of results){
        result.title.push(x.title)
        result.explain.push(x.explain)
        result.tip.push(x.tip)
      }              
      dispatch(getResultsSuccess(result,child));

      return result
      
    })
    .catch(err => {
     
      dispatch(getResultsFail(err.response.data));
    });
};