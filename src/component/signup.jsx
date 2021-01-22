import React ,{useEffect, useState, useContext, useRef}from "react";
import {MenuLayout} from './menu';
import {MyContext} from '../store/context/myContext';
import mini_header_2 from '../static/assets/mini_header_2.png';
import * as actions from "../store/actions/auth";
// import {Redirect } from "react-router-dom";
import { Divider, Card } from '@material-ui/core'; 
import { useAlert } from 'react-alert'



export const SignUp = (props) => {

    const node = useRef();
    const alert = useAlert()
    // const node3 = useRef();
    const [error, setError] = useState('');
    const {state,dispatch} = useContext(MyContext)

     const [stat, setStat] = useState({ input: {},
        errors: {}});
        // var errd = ""
    useEffect(() => {

        if (state.error)
      { setError(state.error);
       
      console.log(typeof error)
    //   console.log(errd)  
     };


        if(state.token){
            props.history.push('/');}
       
        node.current.addEventListener('click', (e)=>  {
            for (const select of node.current.querySelectorAll('.custom-select')) {
                if (!select.contains(e.target)) {
                    select.classList.remove('open');
                }
            }
        });

        for (const option of node.current.querySelectorAll(".custom-option")) {
            option.addEventListener('click', () =>  {
                if (!option.classList.contains('selected')) {
                    option.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
                    option.classList.add('selected');
                    option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent;
                }
            })   }
      
            for (const dropdown of node.current.querySelectorAll(".custom-select-wrapper")) {
                dropdown.addEventListener('click', ()=> {
                    dropdown.querySelector('.my-custom-select').classList.toggle('open');
                })
                
            }

            for (const option of node.current.querySelectorAll(".custom-choice")) {
                option.addEventListener('click', () =>{
                    if (!option.classList.contains('active')) {
                        if( option.parentNode.querySelector('.custom-choice.active')){
                         option.parentNode.querySelector('.custom-choice.active').classList.remove('active');}
                         option.classList.add('active');
                        // option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent; 
                    }
                })
            }
  

    }, [ state.token]);

   
const scrollFunction = ()=> {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("scrollnav").style.top = "0";
    } else {
    document.getElementById("scrollnav").style.top = "-150px";
    }
}

window.onscroll = ()=>  {scrollFunction()};


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

                console.log(stat);
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
        
        {/* <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" integrity="sha512-3n19xznO0ubPpSwYCRRBgHh63DrV+bdZfHK52b1esvId4GsfwStQNPJFjeQos2h3JwCmZl0/LgLxSKMAI55hgw==" crossorigin="anonymous"></script>
		 */}
        </div>
)}
  
