import React ,{useEffect, useState,useContext, useRef}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
// import { Link } from "react-router-dom";
import {MyContext} from '../store/context/myContext';
import { Container } from '@material-ui/core'; 
import * as actions from "../store/actions/auth";





export const Login = (props) => {

    const node = useRef();
    

    const [initia, setInitia] = useState({});
    const [error, setError] = useState(false);
    const {state, dispatch } = useContext(MyContext)
    
    useEffect(() => {
        
      if (state.error)
      { setError(state.error);
        console.log(typeof error)
     
     };
        
        actions.authCheckState(dispatch, props)
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
                      
                    }
                })
            }
   
    }, [state.token,state.error]);


  



    const scrollFunction = ()=> {
        if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("scrollnav").style.top = "0";
        } else {
        document.getElementById("scrollnav").style.top = "-150px";
        }
    }

    window.onscroll = ()=>  {scrollFunction()};

    
    const initial=  {}

    const handleSubmit = e => {
        e.preventDefault();

                initial["option1"] = e.target.option1.value
                initial["option2"] = e.target.option2.value

                actions.authLogin(initial["option1"].toLowerCase(), initial["option2"],dispatch)
                if (state.token){
            
                    props.history.push("/initial/");
                }
        
        }

  const handleReturn = e => {
    e.preventDefault();
 
    props.history.push('/signup/');
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
  
