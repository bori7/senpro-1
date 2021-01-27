import axios from "axios";
import * as actionTypes from "./actionTypes";
import  {HOST_URL} from '../clientResult';

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
      
        checkAuthTimeout(3600,dispatch);
      })
      .catch(err => {
        if(!err.response.data.non_field_errors){
          window.location.reload();
        }
        else {
          if(err.response.data.non_field_errors[0].toString().toLowerCase().includes('invalid token')){
          var seror = 'Please reload the page and login again'
        }else{
          var seror=err.response.data.non_field_errors[0]
          seror+=' \nIncorrect Username or Password'}
        dispatch(authFail(seror));
      }});
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
   
        dispatch(authSuccess(user));
        checkAuthTimeout(360000,dispatch);

        window.emailjs.send(
          'service_37tv5bq',
          'template_fkturqn',
           templateParams,
           "user_jDFiteMUy9NWNFehWpWQR"
         ).then(res => {
        
      })
      .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
  
      })
      .catch(err => {
        
        var errd=""
        if(err.response.data){
        Object.entries(err.response.data).forEach(
          ([key, value]) => (errd += value+'\n'))
        }else{
          errd = 'Incorrect Username or Password'
        }

     
        dispatch(authFail(errd));
        
        
      });
  };

export const authCheckState = (dispatch, props) => {
  
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === undefined || user === null) {
      if (props.location.pathname == '/' || props.location.pathname == '/consultants/'){

      }else{
      logout(dispatch);
      if (props.location.pathname != '/login/'){
        localStorage.setItem('next', props.location.pathname)
        props.history.push('/login/');
      }
      }
    } else {
      const expirationDate = new Date(user.expirationDate);
      
      if (expirationDate <= new Date()) {
        logout(dispatch);
        props.history.push('/login/');
      } else {
        dispatch(authSuccess(user));
         
          if (props.location.pathname == '/login/'){
            if (localStorage.getItem('next') != 'false'){
              props.history.push(localStorage.getItem('next'));
              localStorage.setItem('next','/')
            }else{
            props.history.push('/initial/');
            }
          }
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          ,dispatch);
      }
    }
  };

