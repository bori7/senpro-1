import axios from "axios";
import * as actionTypes from "./actionTypes";
import  {HOST_URL} from '../clientResult';
import { init } from 'emailjs-com';
init("user_jDFiteMUy9NWNFehWpWQR");

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = user => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    user:user
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = (dispatch) => {
  localStorage.removeItem("user");
  dispatch( {
    type: actionTypes.AUTH_LOGOUT
  });
};

export const checkAuthTimeout = (expirationTime,dispatch) => {
  return (
    setTimeout(() => {
      logout(dispatch);
    }, expirationTime * 1000)
  )
  };
  

export const authLogin = (username, password, dispatch) => {
  
    dispatch(authStart());
  
    return axios
      .post(`${HOST_URL}/rest-auth/login/`, {
        username: username,
        password: password
      })
      .then(res => {
        const user = {
          token: res.data.token,
          username:username,
          userId: res.data.user,
          expirationDate: new Date(new Date().getTime() + 360000 * 1000),
          error:null
        };
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(authSuccess(user,res));
        // console.log(res.data)
        checkAuthTimeout(3600,dispatch);
      })
      .catch(err => {
        console.log(err.response.data)
        if(err.response.data.non_field_errors[0].toString().includes('invalid token')){
          var seror = 'please reload the page and login again'
        }else{var seror=err.response.data.non_field_errors[0]}
        dispatch(authFail(seror));
      });
  };


export const authSignup = (
  username,
  email,
  password1,
  password2,
 dispatch,
 templateParams
) => {
  
    dispatch(authStart());
    const user = {
      username,
      email,
      password1,
      password2,
    };
    axios
      .post(`${HOST_URL}/rest-auth/registration/`, user)
      .then(res => {
        const user = {
          token: res.data.token,
          username:username,
          userId: res.data.user,
          expirationDate: new Date(new Date().getTime() + 360000 * 1000)
        };
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user)
        dispatch(authSuccess(user));
        checkAuthTimeout(360000,dispatch);

        window.emailjs.send(
          'gmail',
          'template_fkturqn',
           templateParams,
           "user_jDFiteMUy9NWNFehWpWQR"
         ).then(res => {
          console.log('Email successfully sent!',res)
      })
      .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
  
      })
      .catch(err => {
        console.log(err.response.data)
        var errd=""
        if(err.response.data){
        Object.entries(err.response.data).forEach(
          ([key, value]) => (errd += value+'\n'))
        }else{
          errd = 'Unable to signup, please try again.'
        }

          console.log(errd)
        dispatch(authFail(errd));
        
        
      });
  };

export const authCheckState = (dispatch, props) => {
  
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === undefined || user === null) {
      if (props.location.pathname == '/' || props.location.pathname == '/consultants/'){

      }else{
      logout(dispatch);
      props.history.push('/login/');
      }
    } else {
      const expirationDate = new Date(user.expirationDate);
      console.log('here')
      if (expirationDate <= new Date()) {
        logout(dispatch);
        props.history.push('/login/');
      } else {
        dispatch(authSuccess(user));
          console.log(props.location)
          if (props.location.pathname == '/login/'){
            props.history.push('/initial/');
          }
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          ,dispatch);
      }
    }
  };

