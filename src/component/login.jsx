import React ,{useEffect, useState,useContext,}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import {MyContext} from '../store/context/myContext';
import * as actions from "../store/actions/auth";
import {Link } from "react-router-dom";

export const Login = (props) => {


    const [error, setError] = useState(false);
    const {state, dispatch } = useContext(MyContext)
    
    useEffect(() => {
        actions.authCheckState(dispatch, props)
      if (state.error)
      { setError(state.error);};
 
        

    }, [state.token,state.error]);

    const initial=  {}

    const handleSubmit = e => {
        e.preventDefault();

                initial["option1"] = e.target.option1.value
                initial["option2"] = e.target.option2.value

                actions.authLogin(initial["option1"].toLowerCase(), initial["option2"],dispatch)
                if (state.token){
            
                    props.history.push("/start-here/");
                }
        }

  const handleReturn = e => {
    e.preventDefault();
 
    props.history.push('/signup/');
  }

  
  return(
        <div >
        <div className="jumbotron forum-header mini_header bgimg" style={{backgroundImage: {mini_header_2}}}>
            <MenuLayout/>
            <br/>
            
            
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-12 text-center">	
                            <h1>Login</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
        
        <div className=" container jumbotron bg-white  text-center">
        <div className="container">
            <div className="row " style={{justifyContent: 'center'}}>
                    
                    <div className="col-md-8" style={{marginTop: '10px'}}>
                    
                    <form onSubmit={handleSubmit}>
                    
                    <p className="questions text-danger col-md-9">{error}</p>
                        <div className="row questions" style={{justifyContent: 'center'}}>
                            
                            <div className="col-md-9">
                            <input input className="question-input form-control" placeholder="Username" type="text" id = "option1" name = "option1" required />
                            
                            </div>
                        </div>

                        <div className="row questions" style={{justifyContent: 'center'}}>
                           
                            <div className="col-md-9">
                            <input input className="question-input form-control" placeholder="Password" type="password" id = "option2"name = "option2" required />
                             </div>
                        </div>

         
                       
                        <div className="row" style={{justifyContent: 'center'}}>
                           
                        <div className="col-9 step-control" style={{justifyContent: 'flex-end'}}>
            
                            <button type="submit" value="Submit" style={{width: '100%'}} className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Login
                            </button> 
            
                        </div>
                        </div>

                        <div className="row"  style={{marginTop : '20px', justifyContent: 'center'}}>
                        
                            <div className="text-center col-9"><p><strong>New to Senpro ?</strong></p></div>
                        </div>
                        
                        <div className="row" style={{marginTop : '10px' , justifyContent: 'center'}}>
                            
                            <div className="col-9 step-control" style={{justifyContent: 'flex-end'}}>
            
                            <button onClick = {handleReturn} style={{width: '100%', marginTop : '20px'}} className="btn btn-secondary deepblue curvebtn my-2 my-sm-0 colorf">Get Started
                            </button>
            
                            </div>
                       
                        </div>

                        <div className="row"  style={{marginTop : '20px', justifyContent: 'center'}}>
                        
                            <div className="text-center col-9"><p><Link  to={`/resetpassword/`} >Forgot Password?</Link></p></div>
                        </div>
                        
                    </form>
                    
                    </div>
                    
                
            </div>

        </div>
        </div>
        
      
        </div>
)}
  
