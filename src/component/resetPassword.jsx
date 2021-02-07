import React ,{useEffect, useState,useContext,}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import { useAlert } from 'react-alert';
import axios from "axios";
import  {HOST_URL} from '../store/clientResult';

export const ResetPassword = (props) => {

    const alert = useAlert()
    

    const resetPassword = (email) => {
  
        axios.defaults.headers = {
          "Content-Type": "application/json",
        };
        axios
          .post(`${HOST_URL}/rest-auth/users/reset_password/`, {
            email: email,
          })
          .then(res => {
            // console.log(res);
            
                alert.show('Email Sent',{ type: 'success',})
                
                props.history.push("/");
            
            
          })
          .catch(err => {
        //  console.log(err)
        alert.show('E-mail not sent',{ type: 'error',})
          
        }
        );
      };
    
    

    const initial=  {}

    const handleSubmit = e => {
        e.preventDefault();

        initial["option2"] = e.target.option2.value
        resetPassword( initial["option2"])
     
        }

        

  const handleReturn = e => {
    e.preventDefault();
 
    props.history.push('/login/');
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
                            <h1>Request Password Reset</h1>
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
                         <div className="row questions" style={{justifyContent: 'center'}}>
                            <div className="col-md-9">
                            <input input className="question-input form-control" placeholder="E-mail" type="email" id = "option2"name = "option2" required />
                            </div>
                        </div>

                        <div className="row" style={{justifyContent: 'center'}}><div className="col-9 step-control" style={{justifyContent: 'flex-end'}}>
                                <button type="submit" value="Submit" style={{width: '100%'}} className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">
                                Send a mail 
                                </button>
                            </div>
                        </div>

                        
                        <div className="row" style={{marginTop : '10px' , justifyContent: 'center'}}> 
                            <div className="col-9 step-control" style={{justifyContent: 'flex-end'}}>
                                <button onClick = {handleReturn} style={{width: '100%', marginTop : '20px'}} 
                                className="btn btn-secondary deepblue curvebtn my-2 my-sm-0 colorf">
                                Login
                                </button>
                            </div>
                        </div>
                        
                    </form>
                    
                </div>
                    
                
            </div>

        </div>
        </div>
        
      
        </div>
)}
  
