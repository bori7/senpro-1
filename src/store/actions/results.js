import axios from "axios";
import * as actionTypes from "./actionTypes";
import  {HOST_URL} from '../clientResult';

const getGradedASNTListStart = () => {
  return {
    type: actionTypes.GET_GRADED_ASSIGNMENT_LIST_START
  };
};

const getGradedASNTListSuccess = res=> {
  return {
    type: actionTypes.GET_GRADED_ASSIGNMENTS_LIST_SUCCESS,
    res: res
  };
};

const getGradedASNTListFail = error => {
  return {
    type: actionTypes.GET_GRADED_ASSIGNMENTS_LIST_FAIL,
    error: error,
    
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

const createGradedASNTListFail = () => {
  return {
    type: actionTypes.CREATE_GRADED_ASSIGNMENTS_LIST_FAIL,

  };
};


export const getForum = (token,dispatch) => {
 
    dispatch(getForumListStart());
    
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
       
      })
      .catch(err => {
   
        dispatch(getForumListFail('Loading... Forum failed'));
      });
  };

  
export const getComments = (token,dispatch) => {
 
  dispatch(getCommentsStart());
 
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
    
    })
    .catch(err => {
    
      dispatch(getCommentsFail(JSON.stringify(err.response)));
    });
};

export const postComments = (comm,token,dispatch) => {
 
  dispatch(postCommentsStart());

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
    
    })
    .catch(err => {
     
      // JSON.stringify(err.response)
      dispatch(postCommentsFail( 'Loading... comments failed'));
    });
};

export const postForum = (fom,token,dispatch) => {
 
  dispatch(postForumStart());
 
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
    
    })
    .catch(err => {
      // err.response.request.responseText
      dispatch(postForumFail('Failed to create topic'));
    });
};


export const createGradedASNT = (asnt, dispatch) => {
  
  dispatch(createGradedASNTListStart());
    
  dispatch(createGradedASNTListSuccess('Results Generated', asnt));

  dispatch(createGradedASNTListFail());
    
  
};
