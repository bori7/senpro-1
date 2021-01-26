import React ,{useEffect, useState, useContext, useRef}from "react";
import {MenuLayout} from './menu';
import {MyContext} from '../store/context/myContext';
import mini_header_2 from '../static/assets/mini_header_2.png';
import * as actions from "../store/actions/auth";
import { Divider, Card } from '@material-ui/core'; 
import { useAlert } from 'react-alert'



export const SignUp = (props) => {

    const node = useRef();
    const alert = useAlert()
  
    const [error, setError] = useState('');
    const {state,dispatch} = useContext(MyContext)

     const [stat, setStat] = useState({ input: {},
        errors: {}});
  
    useEffect(() => {

        if (state.error)
      { setError(state.error);
       
    
     };


        if(state.token){
            props.history.push('/');}
       
     

     
    }, [ state.token]);

   


const validate=()=>{

    let input = stat.input;
    let errors = stat.errors;
    let isValid = true;

    if (!input["option3"]) {
      isValid = false;
      errors["option3"] = "Please enter your password.";
    }
    if (!input["option4"]) {
      isValid = false;
      errors["option4"] = "Please enter your confirm password.";
    }

    if (typeof input["option3"] !== "undefined" && typeof input["option4"] !== "undefined") {
      if (input["option3"] !== input["option4"]) {
        isValid = false;
        errors["option4"] = "Passwords don't match.";
      }
    } 
    setStat({
        input:input,
      errors: errors
    });
    return isValid;
}


const handleChange = (event)=>{
    event.preventDefault();
    let input = stat.input;
    let errors = stat.errors;
    input[event.target.name] = event.target.value;
    errors[event.target.name] = '';
    setStat({ input, errors
 });
  }

    
const initial=  {}
const handleSubmit = e => {
    e.preventDefault();
 
            initial["option1"] = e.target.option1.value
            initial["option2"] = e.target.option2.value
            initial["option3"] = e.target.option3.value
            initial["option4"] = e.target.option4.value


            if(validate()){

             
                let input = {};
                let errors = {};
                input["option3"] = "";
                input["option4"] = "";
                errors["option3"] = "";
                errors["option4"] = "";
                setStat({input:input,errors:errors});

                let templateParams = {
                    from_name: 'SENPRO',
                    to_name: initial["option1"],
                    subject: 'SENPRO ANALYSIS',
                    message: 'Welcome to SENPRO, we offer a qualitative, efficient and effective psychological child analysis',
                    reply_to: initial["option2"] }
                
                actions.authSignup( initial["option1"].toLowerCase(), initial["option2"],
                    initial["option3"],initial["option4"],dispatch, templateParams)
                if(state.token){
                    alert.show('Welcome')
                    props.history.push('/');
                }else{
                    props.history.push("/initial/");
                }
            }
        }     

    
  return(
        <div ref={node}>
      
        <div className="jumbotron forum-header mini_header bgimg" style={{backgroundImage: {mini_header_2}}}>
            <MenuLayout/>
            <br/>
             
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-12 text-center">	
                            <h1>Sign Up</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
        
        <div className="jumbotron bg-white">
        <div className="container">
            <div className="row" style={{justifyContent: 'center'}}>
                
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
                            <input input className="question-input form-control" placeholder="E-mail" type="email" id = "option2"name = "option2" required />
                             </div>
                        </div>

                        <div className="row questions" style={{justifyContent: 'center'}}>
                            
                            <div className="col-md-9">
                            <input  onChange={handleChange} value={stat.input.option3} className="question-input form-control"
                              placeholder="Password" type="password" id = "option3"name = "option3"  required />
                             <div className="text-danger">{stat.errors.option3}</div>
                             </div>
                             
         
                        </div>

                        <div className="row questions" style={{justifyContent: 'center'}}>
                            
                            <div className="col-md-9">
                            <input  onChange={handleChange} value={stat.input.option4} className="question-input form-control" placeholder="Confirm Password" 
                             type="password" id = "option4" name = "option4"  required />
                                <Card><div className="text-danger">{stat.errors.option4}</div></Card>
                                <Divider/>

                             </div>
                        </div>

                        <div class="row" style={{justifyContent: 'center'}}>
                           
                        <div className="col-4 step-control" style={{justifyContent: 'flex-end'}}>
            
                        <button type="submit" value="Submit" style={{width: '100%'}} className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">SignUp
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
  
