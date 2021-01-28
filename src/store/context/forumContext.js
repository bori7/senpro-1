import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import React, { useReducer, createContext } from "react";



export const ForumContext = createContext();

const initialState = {
  error: null,
  loading: false,
  message: null,
  comments:[],
  forums: []
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

const getForumListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getForumListSuccess = (state, action) => {
  return updateObject(state, {
    forums: action.forums,
    error: null,
    loading: false,
    
  });
};

const getForumListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const getCommentsStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
  };
  
  const getCommentsSuccess = (state, action) => {
    return updateObject(state, {
      comments: action.comments,
      error: null,
      loading: false,
    });
  };
  
  const getCommentsFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
  };
  
  const postCommentsStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
  };
  
  const postCommentsSuccess = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: false,
      message:action.message,
    });
  };
  
  const postCommentsFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
  };

  const postForumStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
  };
  
  const postForumSuccess = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: false,
      message:action.message,
    });
  };
  
  const postForumFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
  };
  

const reducer = (state, action) => {
  switch (action.type) {
    
    case actionTypes.MESSAGE_SUCCESS:
        return messageSuccess(state, action);
    case actionTypes.ERROR_SUCCESS:
        return errorSuccess(state, action);

    case actionTypes.GET_FORUM_LIST_START:
        return getForumListStart(state, action);
    case actionTypes.GET_FORUM_LIST_SUCCESS:
        return getForumListSuccess(state, action);
    case actionTypes.GET_FORUM_LIST_FAIL:
        return getForumListFail(state, action); 
        
    case actionTypes.GET_COMMENTS_START:
        return getCommentsStart(state, action);
    case actionTypes.GET_COMMENTS_SUCCESS:
        return getCommentsSuccess(state, action);
    case actionTypes.GET_COMMENTS_FAIL:
        return getCommentsFail(state, action);
        
    case actionTypes.POST_COMMENTS_START:
        return postCommentsStart(state, action);
    case actionTypes.POST_COMMENTS_SUCCESS:
        return postCommentsSuccess(state, action);
    case actionTypes.POST_COMMENTS_FAIL:
        return postCommentsFail(state, action);    

    case actionTypes.POST_FORUM_START:
        return postForumStart(state, action);
    case actionTypes.POST_FORUM_SUCCESS:
        return postForumSuccess(state, action);
    case actionTypes.POST_FORUM_FAIL:
        return postForumFail(state, action);   

    default: 
      return state;
  }
};

export const ForumContextProvider = props => {
   const [forumstate, forumdispatch] = useReducer(reducer, initialState);
  return (
    <ForumContext.Provider value={{forumstate, forumdispatch}}>
      {props.children}
    </ForumContext.Provider>
  );
};


