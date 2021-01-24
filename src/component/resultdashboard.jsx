import React ,{useEffect, useState,useContext, useCallback, useRef}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import {Link } from "react-router-dom";
import { getGradedASNTS } from "../store/actions/results";
import {MyContext} from '../store/context/myContext';
import {ResContext} from '../store/context/resultContext';
import main_logo from '../static/assets/main-logo.png';
import { Divider, Card } from '@material-ui/core'; 
import { createASNT } from "../store/actions/assignments";
import { getChilds} from "../store/actions/assignments";
import { getResults} from "../store/actions/assignments";
import * as auth from "../store/actions/auth";
import { useAlert } from 'react-alert'
// import {Pay} from './paystack';
import {Pay} from './flutterwave';
export const ResultDashboard = (props) => {

    const {resstate, resdispatch} = useContext(ResContext);
    const alert = useAlert()
    const {state, dispatch} = useContext(MyContext)
    const {explain, childs,child_id} = resstate;
    const node = useRef();
  
  
    useEffect(() => {
        
        auth.authCheckState(dispatch, props);
        let user = JSON.parse(localStorage.getItem('user'));
        console.log(user['userId'])
        getChilds(user.userId.pk,user.token,resdispatch)
   
        // console.log(state.userId.pk,state.token)
        
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
    
    }, [state.token,explain]);

const scrollFunction = ()=> {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("scrollnav").style.top = "0";
    } else {
    document.getElementById("scrollnav").style.top = "-150px";
    }
}

window.onscroll = ()=>  {scrollFunction()};

var chilre = childs.filter(y=>y.testres)

const handleClick = (id,e) => {
    e.preventDefault();
    console.log(resstate.explain, id, resstate.child_id)
    getResults(id,state.token, resdispatch)
    console.log(resstate.explain, id, resstate.child_id)
    props.history.push("/result/");

}

  return(
        <div ref={node}>
       {/* <div ref={node2} className="se-pre-con"></div> */}
 
      
        <div className="jumbotron forum-header mini_header bgimg" style={{backgroundImage: {mini_header_2}}}>
           
            
            
            {/* <a className="navbar-brand animate__animated animate__fadeInLeft" href="/"><img className="banner_logo" src={banner_logo} alt = {"banner_logo_1"}/></a>
       */}
        <div className="container-fluid">
        <MenuLayout/>
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-12">	
                            <h1>RESULTS</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>

	
        <div className="jumbotron bg-white">
			<div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        <img src={main_logo} alt = {"main_logo"} style={{width: '200px'}}/>

                        <br/><br/><br/>
                        {chilre.length!==0 ?
                       <div class="row">
                           <div class="col-md-6">
                                <h4 class="form-title">Surveys</h4>
                            </div>

                            <div class="col-md-6">
                                <h4 class="form-title">Results</h4>
                            </div>
                       </div>:""}
                       {chilre.length!==0 ? (chilre.map(x=> 
                       
                       <div key={x.id}  class="row">
                            <div class="col-md-6">
                                    <ul class="summary">
                                    <li >Date {(new Date(x.timestamp)).toLocaleDateString()} 
                                     _{(new Date(x.timestamp)).toLocaleTimeString()} </li>
                                    </ul>
                                    
                                </div>

                                <div class="col-md-6">
                                    {x.paid ?  (<ul key={x.id} class="summary">
                                    <button onClick = {(e) => handleClick(x.id, e)}  className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">
                                    View result
                                    </button>
                                    </ul>) :(<div key={x.id}  className='total'>
                                        <Pay chill={x} />    
                                            </div>) }       

                                </div>
                        </div>)
                                            
                        ) : (
                                <h4 class="form-title">No Results from any questionnaire</h4>
                           )}
                        <br/>
                        <br/>
                        
                    </div>
                </div>
            </div>
		</div>

       
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" integrity="sha512-3n19xznO0ubPpSwYCRRBgHh63DrV+bdZfHK52b1esvId4GsfwStQNPJFjeQos2h3JwCmZl0/LgLxSKMAI55hgw==" crossorigin="anonymous"></script>
		
        </div>
)}