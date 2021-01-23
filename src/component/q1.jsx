import React ,{useEffect, useState, useContext, useRef}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
// import  '../static/style.css';
// import {q1script} from './q1j.js';
import * as auth from "../store/actions/auth";
import {MyContext} from '../store/context/myContext';
import {ResContext} from '../store/context/resultContext';


export const Question1 = (props) => {

    const node = useRef();
   
    const [initia, setInitia] = useState({});
    const {state, dispatch} = useContext(MyContext)
    const {resstate, resdispatch} = useContext(ResContext)
  
    useEffect(() => {
        auth.authCheckState(dispatch, props)
        if (state.token === undefined || state.token === null) {
            props.history.push('/login/');
            }
            // if (resstate.child.id === undefined || resstate.child.id === null) {
            // props.history.push('/initial/');
            // }
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
    //   if(alert){  document.addEventListener('load', fadeOutEffect)}
    //   else{ document.removeEventListener('load', fadeOutEffect);}
  

    // return () =>  {
    //     // document.removeEventListener('load', fadeOutEffect);
    
    // // for (const option of node.current.querySelectorAll(".custom-option")) {
    // //     option.removeEventListener('click', () =>  {
    // //         if (!option.classList.contains('selected')) {
    // //             option.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
    // //             option.classList.add('selected');
    // //             option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent;
    // //         }
    // //     })   }
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
        
    //     // for (const option of node.current.querySelectorAll(".custom-choice")) {
    //     //     option.removeEventListener('click', () =>{
    //     //         if (!option.classList.contains('active')) {
    //     //            if( option.parentNode.querySelector('.custom-choice.active')){
    //     //             option.parentNode.querySelector('.custom-choice.active').classList.remove('active');}
    //     //             option.classList.add('active');
    //     //             // option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent; 
    //     //         }
    //     //     })
    //     // }
    
    // }

    }, []);


  



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
            initial["option3"] = e.target.option3.value
            initial["option4"] = e.target.option4.value
            initial["option5"] = e.target.option5.value
            initial["option6"] = e.target.option6.value
            initial["option7"] = e.target.option7.value
            // initial["option8"] = e.target.option8.value
            // console.log(initial)
            // setInitia(initia)
            props.history.push('/age/');

//             for (const [key, value] of Object.entries(initial)) {
//                 if( value == ""){
//                     setError(true)
//                     props.history.push('/initial/');
//                 break;
                
//                 }
                
//                 if(initial["option6"]=='no'){
//                     props.history.push('/q1/');
//                 }else if(initial["option6"]=='yes'){
   
//                  props.history.push('/age/');
//               }
//             // console.log(initial)
//             setInitia(initial)
//   }
  }


  const handleReturn = e => {
    e.preventDefault();
 
    props.history.goBack();
  }

  return(
        <div ref={node}>
       {/* <div ref={node2} className="se-pre-con"></div> */}
        <div className="jumbotron forum-header mini_header bgimg" style={{backgroundImage: {mini_header_2}}}>
            <MenuLayout/>
            <br/>
            <br/>
            <br/><br/>
            <br/>
            <br/>
            <br/><br/>
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
                    <h4 className="form-title">These questions will help is determine the best solutions for your child/ward</h4>
                </div>
                
                    <div className="col-md-10" style={{marginTop: '30px'}}>
                    <form onSubmit={handleSubmit}>
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">Were there any complications during pregnancy?</p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className=" custom-choice btn btn-secondary ">
                                    <input type="radio" name="option1" id="option1" value = 'yes' autoComplete="off"required  /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option1" id="option1" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">Were there any complications at delivery? </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option2" id="option2" value = 'yes' autoComplete="off" required  /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option2" id="option2" value = 'no' autoComplete="off" required  /> No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">Did your child cry immediately after birth? </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option3" id="option3" value = 'yes' autoComplete="off" required /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option3" id="option3" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">Are there any current medical issues like seizures, head injuries, or infections?  </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option4" id="option4" value = 'yes' autoComplete="off" required  /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option4" id="option4" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">Is the child presently on any prescribed medication? </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option5" id="option5" value = 'yes' autoComplete="off"required  /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option5" id="option5" value = 'no' autoComplete="off"required /> No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">Has your child been previously seen by a specialist such as a psychologist, occupational therapist, speech therapist, behavioral analyst, developmental paediatrician or any other professional? </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className=" custom-choice btn btn-secondary ">
                                    <input type="radio" name="option6" id="option6" value = 'yes' autoComplete="off" required /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option6" id="option6" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>
                     
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">If yes, please state which professional:</p>
                            </div>
                            <div className="col-md-3">
                            <input input className="question-input form-control" type="text" id = "option7"name = "option7" required />
                            
                            </div>
                        </div>
                        {/* <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">If yes, please state which professional:</p>
                            </div>
                            <div className="col-md-3">
                                <input className="question-input form-control" type="text"/>
                            </div>
                        </div> */}


                        {/* <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">If yes, please state which professional:</p>
                            </div>
                            <div className="col-md-3">
                                <input className="question-input form-control" type="text"/>
                            </div>
                        </div> */}

                        {/* <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">If yes, please state which professional ?</p>
                            </div>
                            <div className="col-md-3">
                                
                                    <div className="custom-select-wrapper">
                                    <div className="my-custom-select">
                                        <div className="custom-select__trigger"><span>psychologist</span>
                                            <div className="arrow"></div>
                                            <div className="custom-options">
                                            <label className="custom-option selected" ><input type="radio" id = "option7"name = "option7" value="psychologist" />
                                            psychologist</label>
                                            <label className="custom-option" ><input type="radio" id = "option7"name = "option7" value="occupational therapist" />
                                            occupational therapist</label>
                                            <label className="custom-option" ><input type="radio" id = "option7"name = "option7" value="speech therapist"/>
                                            speech therapist</label>
                                            <label className="custom-option " ><input type="radio" id = "option7"name = "option7" value="behavioral analyst"/>
                                            behavioral analyst</label>
                                            <label className="custom-option"><input type="radio" id = "option7"name = "option7" value="developmental paediatrician"/>
                                            developmental paediatrician</label>
                                            <label className="custom-option" ><input type="radio" id = "option7"name = "option7" value="other professional"/>
                                            other professional</label>

                                        </div>
                                        </div>
                                        
                                    </div>
                                     </div>
                                
                            </div>
                        </div> */}
{/* 
                        <div className="row questions">
							
								<div className="col-md-3">
                                <div className="col-md-9 question-box">
									<p className="question">How old is your child ?</p>
								</div>
									 <div className="custom-select-wrapper">
									    <div className="my-custom-select">
									        <div className="custom-select__trigger"><span>1</span>
									            <div className="arrow"></div>
									        </div> 
									        <div className="custom-options">
                                            <div className="custom-options">
                                            <label className="custom-option selected" ><input type="radio" id = "option8"name = "option8" value="1" />
                                             1</label>
                                            <label className="custom-option" ><input type="radio" id = "option8"name = "option8" value="2" />
                                             2</label>
                                            <label className="custom-option" ><input type="radio" id = "option8"name = "option8" value="3"/>
                                             3</label>
                                            <label className="custom-option" ><input type="radio" id = "option8"name = "option8" value="4"/>
                                             4</label>
                                            <label className="custom-option"><input type="radio" id = "option8"name = "option8" value="5"/>
                                             5</label>
                                         

                                        </div>
									        </div>
									    </div>
									</div>
									
								</div>
							</div> */}
                        <br/>
                            <br/>
                            <br/>
                        <div className="col-12 step-control">
                                <button onClick = {handleReturn} className="btn btn-secondary deepblue curvebtn my-2 my-sm-0 colorf">Previous
                                </button>
                                <button type="submit" value="Submit" className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Next
                                </button>
                        </div>
                    </form>
                    </div>
            
                
            </div>

        </div>
        </div>
        
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" integrity="sha512-3n19xznO0ubPpSwYCRRBgHh63DrV+bdZfHK52b1esvId4GsfwStQNPJFjeQos2h3JwCmZl0/LgLxSKMAI55hgw==" crossorigin="anonymous"></script>
		
        </div>
)}