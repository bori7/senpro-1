import React ,{useEffect, useState, useCallback, useRef, useContext}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
// import  '../static/style.css';
// import {q1script} from './q1j.js';
import { Link } from "react-router-dom";
import * as auth from "../store/actions/auth";
import {MyContext} from '../store/context/myContext';


export const Above5 = (props) => {

    const node = useRef();
    const {state, dispatch } = useContext(MyContext);
    
  
    useEffect(() => {
        auth.authCheckState(dispatch, props);
        // node.current.addEventListener('click', (e)=>  {
        //     for (const select of node.current.querySelectorAll('.custom-select')) {
        //         if (!select.contains(e.target)) {
        //             select.classList.remove('open');
        //         }
        //     }
        // });

        // for (const option of node.current.querySelectorAll(".custom-option")) {
        //     option.addEventListener('click', () =>  {
        //         if (!option.classList.contains('selected')) {
        //             option.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
        //             option.classList.add('selected');
        //             option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent;
        //         }
        //     })   }
      
        //     for (const dropdown of node.current.querySelectorAll(".custom-select-wrapper")) {
        //         dropdown.addEventListener('click', ()=> {
        //             dropdown.querySelector('.my-custom-select').classList.toggle('open');
        //         })
                
        //     }

        //     for (const option of node.current.querySelectorAll(".custom-choice")) {
        //         option.addEventListener('click', () =>{
        //             if (!option.classList.contains('active')) {
        //                 if( option.parentNode.querySelector('.custom-choice.active')){
        //                  option.parentNode.querySelector('.custom-choice.active').classList.remove('active');}
        //                  option.classList.add('active');
        //                 // option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent; 
        //             }
        //         })
        //     }
    //   if(alert){  document.addEventListener('load', fadeOutEffect)}
    //   else{ document.removeEventListener('load', fadeOutEffect);}
  

    // return () =>  {
    //     // document.removeEventListener('load', fadeOutEffect);
    
    // for (const option of node.current.querySelectorAll(".custom-option")) {
    //     option.removeEventListener('click', () =>  {
    //         if (!option.classList.contains('selected')) {
    //             option.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
    //             option.classList.add('selected');
    //             option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent;
    //         }
    //     })   }
    //     for (const dropdown of node.current.querySelectorAll(".custom-select-wrapper")) {
    //         dropdown.removeEventListener('click', ()=> {
    //             dropdown.querySelector('.my-custom-select').classList.toggle('open');
    //         })
            
    //     }
    //     document.removeEventListener('click', (e)=>  {
    //         for (const select of node.current.querySelectorAll('.custom-select')) {
    //             if (!select.contains(e.target)) {
    //                 select.classList.remove('open');
    //             }
    //         }
    //     });    
        
    //     for (const option of node.current.querySelectorAll(".custom-choice")) {
    //         option.removeEventListener('click', () =>{
    //             if (!option.classList.contains('active')) {
    //                if( option.parentNode.querySelector('.custom-choice.active')){
    //                 option.parentNode.querySelector('.custom-choice.active').classList.remove('active');}
    //                 option.classList.add('active');
    //                 // option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent; 
    //             }
    //         })
    //     }
    
    // }

    }, []);


  



// const scrollFunction = ()=> {
//     if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
//     document.getElementById("scrollnav").style.top = "0";
//     } else {
//     document.getElementById("scrollnav").style.top = "-150px";
//     }
// }

// window.onscroll = ()=>  {scrollFunction()};


// for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
//     dropdown.addEventListener('click', ()=> {
//         dropdown.querySelector('.my-custom-select').classList.toggle('open');
//     })
    
// }

// for (const option of document.querySelectorAll(".custom-option")) {
//     option.addEventListener('click', () =>  {
//         if (!option.classList.contains('selected')) {
//             option.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
//             option.classList.add('selected');
//             option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent;
//         }
//     })
    
// }

// window.addEventListener('click', (e)=>  {
//     for (const select of document.querySelectorAll('.custom-select')) {
//         if (!select.contains(e.target)) {
//             select.classList.remove('open');
//         }
//     }
// });
    


    // const initial=  {}
//     const handleSubmit = e => {
//     e.preventDefault();
 
//             // initial["option1"] = e.target.option1.value
//             // initial["option2"] = e.target.option2.value
//             // initial["option3"] = e.target.option3.value
//             // initial["option4"] = e.target.option4.value
//             // initial["option5"] = e.target.option5.value
//             // initial["option6"] = e.target.option6.value
//             // initial["option7"] = e.target.option7.value
//             // initial["option8"] = e.target.option8.value
//             // console.log(initial)
//             // setInitia(initia)
//   }

  const handleReturn = e => {
    e.preventDefault();
 
    props.history.goBack();
  }


  return(
        <div ref={node}>
       {/* <div ref={node2} className="se-pre-con"></div> */}
        <div className="jumbotron forum-header mini_header bgimg" style={{backgroundImage: {mini_header_2}}}>
            <MenuLayout/>
            
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-12">	
                            <h1>Let Us Help</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>

        <div className="jumbotron bg-white">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <h4 className="form-title">Please specify one major area of concern:</h4>
                </div>
                
                    <div className="col-md-10" style={{marginTop: '30px'}}>
                    <form >
                      

                    
                     
                        <div className="row questions">
                           
                            <div className="col-md-4 custom-choice">
                            <Link to={`/academics/`}>
                                <button className="question-input form-control ">ACADEMICS</button> 
                                </Link>
                            </div>
                        </div>

                        <div className="row questions">
                           
                            <div className="col-md-4 custom-choice">
                            <Link to={`/behavior/`}>
                                <button className="question-input form-control custom-choice"><span>EMOTIONS AND BEHAVIORS<span/></span></button> 
                                </Link>
                            </div>
                        </div>

                        <div className="row questions">
                           
                            <div className="col-md-4 custom-choice">
                            <Link to={`/speech/`}>
                                <button className="question-input form-control custom-choice">SPEECH AND LANGUAGE</button>
                                </Link> 
                            </div>
                        </div>

                        <div className="row questions">
                            
                            <div className="col-md-4 custom-choice">
                            <Link to={`/mental/`}>
                                <button className="question-input form-control custom-choice">MENTAL HEALTH</button> 
                                </Link>
                            </div>
                        </div>

                  
                        <br/>
                            <br/>
                            <br/>
                        <div className="col-12 step-control">
                                <button onClick = { handleReturn} className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Previous
                                </button>
                              
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