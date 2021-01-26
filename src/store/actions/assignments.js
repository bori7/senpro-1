import axios from "axios";
import * as actionTypes from "./actionTypes";
// import  {cart_item} from '../clientResult';
import  {HOST_URL} from '../clientResult';

const getASNTListStart = () => {
  return {
    type: actionTypes.GET_ASSIGNMENT_LIST_START
  };
};

const getASNTListSuccess = assignments => {
  return {
    type: actionTypes.GET_ASSIGNMENTS_LIST_SUCCESS,
    cartItem :assignments
  };
};

const getASNTListFail = error => {
  return {
    type: actionTypes.GET_ASSIGNMENTS_LIST_FAIL,
    error: error
  };
};

// export const getASNTS = (token,dispatch) => {
  
//     dispatch(getASNTListStart());
//      axios.defaults.headers = {
//       "Content-Type": "application/json",
//       Authorization: `Token ${token}`
//     };
    
//      axios
//       .get("/assignments/")
//       .then(res => {
//         const assignments = res.data;
//         console.log(token,assignments);
//         dispatch(getASNTListSuccess(assignments));
//       })
//       .catch(err => {
//         dispatch(getASNTListFail(err.response.data.message));
//       });
      
  
// };

// export const getASNTS = (dispatch) => {
  
//   dispatch(getASNTListStart());
   
//   dispatch(getASNTListSuccess(cart_item['cartitem']));
//   console.log(cart_item['cartitem'])
    
// };

const getASNTDetailStart = () => {
  return {
    type: actionTypes.GET_ASSIGNMENT_DETAIL_START
  };
};

const getASNTDetailSuccess = assignment => {
  return {
    type: actionTypes.GET_ASSIGNMENT_DETAIL_SUCCESS,
    assignment
  };
};

const getASNTDetailFail = error => {
  return {
    type: actionTypes.GET_ASSIGNMENT_DETAIL_FAIL,
    error: error
  };
};

export const getASNTSDetail = (token, id, dispatch) => {
  
    // dispatch(getASNTDetailStart());
    // axios.defaults.headers = {
    //   "Content-Type": "application/json",
    //   Authorization: `Token ${token}`
    // };
    //  axios
    //   .get(`/assignments/${id}/`)
    //   .then(res => {
    //     const assignment = res.data;
    //     dispatch(getASNTDetailSuccess(assignment));
    //     console.log(token,assignment);
    //   })
    //   .catch(err => {
    //     dispatch(getASNTDetailFail(err.response.data.message));
    //   });
};

const createASNTStart = () => {
  return {
    type: actionTypes.CREATE_ASSIGNMENT_START
  };
};

const createChildStart = () => {
  return {
    type: actionTypes.CREATE_CHILD_START
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

const createASNTFail = error => {
  return {
    type: actionTypes.CREATE_ASSIGNMENT_FAIL,
    error: error
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


export const createASNT = (cart,dispatch) => {
 
  dispatch(createASNTStart());
  // cart_item['cartitem'] = cart
      dispatch(createASNTSuccess('Submitted', cart));
    // console.log(cart)

};

  
export const getChilds = (parent,token,dispatch) => {
  // console.log( parent)
  dispatch(getChildsStart());
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`
  };
  axios
    .get(`${HOST_URL}/clients/childs/?parent=${parent}&ordering=-timestamp`)
    .then(res => {
      const childs = res.data;
      dispatch(getChildsSuccess( childs));
      // console.log( childs , res)
    })
    .catch(err => {
      // console.log(err)
      dispatch(getChildsFail(err.response.data));
    });
};

export const createChild = (token, child, dispatch,dispatch2) => {
 
    dispatch(createChildStart());
    // console.log(token,child)
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
  axios
      .post(`${HOST_URL}/clients/childs/`, child)
      .then(res => {
        // console.log(res)
        // console.log(res.data)
        dispatch2(createChildSuccess(res.data));

      })
      .catch(err => {
        // console.log(err.response.request.responseText)
        // dispatch(createChildFail(err.response.request.responseText));
      });
  
};


export const updateChild = (id,child, token, dispatch) => {
  
  dispatch(updateChildStart());
  // console.log(token,child)
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`
  };
axios
    .put(`${HOST_URL}/clients/childs/${id}/`, child)
    .then(res => {
      // console.log(res)
      // console.log(res.data)
      dispatch(updateChildSuccess(res.data));
      // props.history.push("/result/");

    })
    .catch(err => {
      // console.log(err)
      dispatch(updateChildFail(err.response));
      
    });

};


export const createResult = (token, result, dispatch) => {
 
    dispatch(createResultStart());
    // console.log(token,result)
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    var x 
    for(x of result.title){
      var reso = {
        title: x,
        explain: result.explain[result.title.indexOf(x)],
        tip: result.tip[result.title.indexOf(x)],
        child: result.child
    }
      axios
      .post(`${HOST_URL}/clients/results/`, reso)
      .then(res => {
        // console.log(res)
        dispatch(createResultSuccess(res.data));
        
      })
      .catch(err => {
        // console.log(err.response.request.responseText)
        dispatch(createResultFail(err.response.request.responseText));
      });
    }
  
  
};

export const getResults = (child,token,dispatch) => {
 
  dispatch(getResultsStart());
  // console.log(token)
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`
  };
  axios
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
      // console.log( results , res, result)
    })
    .catch(err => {
      // console.log(err)
      dispatch(getResultsFail(err.response.data));
    });
};