import axios from "axios";
import * as actionTypes from "./actionTypes";
import  {HOST_URL} from '../clientResult';

const getGradedASNTListStart = () => {
  return {
    type: actionTypes.GET_GRADED_ASSIGNMENT_LIST_START
  };
};

const getForumListStart = () => {
  return {
    type: actionTypes.GET_FORUM_LIST_START
  };
};

const getCommentsStart = () => {
  return {
    type: actionTypes.GET_COMMENTS_START
  };
};

const postCommentsStart = () => {
  return {
    type: actionTypes.POST_COMMENTS_START
  };
};

const postForumStart = () => {
  return {
    type: actionTypes.POST_FORUM_START
  };
};



const getGradedASNTListSuccess = res=> {
  return {
    type: actionTypes.GET_GRADED_ASSIGNMENTS_LIST_SUCCESS,
    res: res
  };
};


const getForumListSuccess = forums => {
  return {
    type: actionTypes.GET_FORUM_LIST_SUCCESS,
    forums: forums
  };
};

const getCommentsSuccess = comments => {
  return {
    type: actionTypes.GET_COMMENTS_SUCCESS,
    comments: comments
  };
};

const postCommentsSuccess = message => {
  return {
    type: actionTypes.POST_COMMENTS_SUCCESS,
    message: message
  };
};

const postForumSuccess = message => {
  return {
    type: actionTypes.POST_FORUM_SUCCESS,
    message: message
  };
};

export const messageSuccess = (dispatch) => {
  return dispatch({
    type: actionTypes.MESSAGE_SUCCESS,
  })
};

export const errorSuccess = (dispatch) => {
  return dispatch({
    type: actionTypes.ERROR_SUCCESS,
  })
};

const getGradedASNTListFail = error => {
  return {
    type: actionTypes.GET_GRADED_ASSIGNMENTS_LIST_FAIL,
    error: error,
    
  };
};

const getForumListFail = error => {
  return {
    type: actionTypes.GET_FORUM_LIST_FAIL,
    error: error,
  };
};

const getCommentsFail = error => {
  return {
    type: actionTypes.GET_COMMENTS_FAIL,
    error: error,
  };
};

const postCommentsFail = error => {
  return {
    type: actionTypes.POST_COMMENTS_FAIL,
    error: error,
  };
};

const postForumFail = error => {
  return {
    type: actionTypes.POST_FORUM_FAIL,
    error: error,
  };
};


const createGradedASNTListStart = () => {
  return {
    type: actionTypes.CREATE_GRADED_ASSIGNMENT_LIST_START,
    
  };
};

const createGradedASNTListSuccess = (message,res) => {
  return {
    type: actionTypes.CREATE_GRADED_ASSIGNMENTS_LIST_SUCCESS,
    message:message,
    title:res.title,
    explain:res.explain,
    tips:res.tip
  };
};

const createGradedASNTListFail = error => {
  return {
    type: actionTypes.CREATE_GRADED_ASSIGNMENTS_LIST_FAIL,
    error: error,
  };
};


export const getForum = (token,dispatch) => {
 
    dispatch(getForumListStart());
    // console.log(token)
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get(`${HOST_URL}/community/forums/?ordering=-id`)
      .then(res => {
        const forums = res.data;
        dispatch(getForumListSuccess(forums));
        // console.log(forums, res)
      })
      .catch(err => {
        // console.log(err)
        dispatch(getForumListFail(err.response));
      });
  };

  
export const getComments = (token,dispatch) => {
 
  dispatch(getCommentsStart());
  // console.log(token)
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`
  };
  axios
    .get(`${HOST_URL}/community/comments/`)
    .then(res => {
      const comments = res.data;
      dispatch(getCommentsSuccess( comments ));
      // console.log( comments , res)
    })
    .catch(err => {
      // console.log(JSON.stringify(err))
      dispatch(getCommentsFail(JSON.stringify(err.response)));
    });
};

export const postComments = (comm,token,dispatch) => {
 
  dispatch(postCommentsStart());
  // console.log(token)
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`
  };
  axios
    .post(`${HOST_URL}/community/comments/`, comm)
    .then(res => {
      const postcomment = res.data;
      dispatch(postCommentsSuccess( 'Comment added '));
      // console.log( postcomment, res)
    })
    .catch(err => {
      // console.log(JSON.stringify(err))
      dispatch(postCommentsFail(JSON.stringify(err.response)));
    });
};

export const postForum = (fom,token,dispatch) => {
 
  dispatch(postForumStart());
  // console.log(fom)
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`
  };
  axios
    .post(`${HOST_URL}/community/forums/`, fom)
    .then(res => {
      const postfom = res.data;
      dispatch(postForumSuccess('Topic Created'));
      // console.log( postfom, res)
    })
    .catch(err => {
      // console.log(err)
      dispatch(postForumFail(err.response.request.responseText));
    });
};
// export const getGradedASNTS = (username, token,dispatch) => {
 
//     dispatch(getGradedASNTListStart());
//     axios.defaults.headers = {
//       "Content-Type": "application/json",
//       Authorization: `Token ${token}`
//     };
//     axios
//       .get(`/graded-assignments/?username=${username}`)
//       .then(res => {
//         const assignments = res.data;
//         dispatch(getGradedASNTListSuccess(assignments));
//         console.log(assignments)
//       })
//       .catch(err => {
//         dispatch(getGradedASNTListFail(err.response.data.message));
//       });
//   };

export const getGradedASNTS = (dispatch) => {
 
  // dispatch(getGradedASNTListStart());
 
 
  //   // const assignments = res.data;
  //   dispatch(getGradedASNTListSuccess());
    // console.log()
    
   
};

// export const createGradedASNT = (token, asnt, dispatch) => {
  
//       dispatch(createGradedASNTListStart());
//     axios.defaults.headers = {
//       "Content-Type": "application/json",
//       Authorization: `Token ${token}`
//     };
//    axios
//       .post(`/graded-assignments/create/`, asnt)
//       .then(res => {
//         // console.log("success",asnt);
//         //console.log('now',res);
//           dispatch(createGradedASNTListSuccess('Submitted'));
//       })
//       .catch(err => {
//         console.log('now',err);
//           dispatch(createGradedASNTListFail(err));
//       });
// };
export const createGradedASNT = (asnt, dispatch) => {
  
  dispatch(createGradedASNTListStart());
      // res['explain'] = asnt.explain 
      // res['title'] = asnt.title
      // res['tips'] = asnt.tips

      dispatch(createGradedASNTListSuccess('Results Generated', asnt));
    // console.log(asnt)
      // dispatch(createGradedASNTListFail(err));
  
};
