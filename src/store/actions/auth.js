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
        email : username,
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
        return user
        
      })
      .catch(err => {
        if(!err.response.data.non_field_errors){
          window.location.reload();
        }
        else {
          if(err.response.data.non_field_errors[0].toLowerCase().includes('invalid token')){
          var seror = 'Please reload the page and login again'
        }else{
          var seror=err.response.data.non_field_errors[0]
          seror+=' '}
        dispatch(authFail(seror));
      }});
  };


export const authSignup = (
  username,
  email,
  password1,
  password2,
 dispatch,
 templateParams,
 props
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
   
        dispatch(authSuccess(user,res));
        checkAuthTimeout(360000,dispatch);

        fetch(`${HOST_URL}/send_registration_email?email=${templateParams.reply_to}&username=${templateParams.to_name}`)
         .then(res => {
        
      })
      .catch(err =>{
        //  console.error('There has been an error.  Here some thoughts on the error that occured:', err)
      }
      )
  
      })
      .catch(err => {
        
        let errd = 'Username or email has already been used'
        dispatch(authFail(errd));
        props.history.push(
        {
        pathname: '/signup/',
        state: { error: errd }
        }
        );
        
        
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

  
  