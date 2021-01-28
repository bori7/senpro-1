import React ,{useEffect, useState, useContext,}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import {MyContext} from '../store/context/myContext';
import * as actions from "../store/actions/assignments";
import * as auth from "../store/actions/auth";
import {ResContext} from '../store/context/resultContext';




export const InitialForm = (props) => {

  
   

    const [initia, setInitia] = useState({});
    const [error, setError] = useState(false);
    const {state, dispatch} = useContext(MyContext)
    const {resstate, resdispatch} = useContext(ResContext)
  
    useEffect(() => {
        auth.authCheckState(dispatch, props);
        
    
    }, [state.token]);






    const initial=  {}
    const handleSubmit = e => {
    e.preventDefault();
 
            initial["option1"] = e.target.option1.value
            initial["option2"] = e.target.option2.value
            initial["option3"] = e.target.option3.value
            initial["option4"] = e.target.option4.value
          
            initial["option6"] = e.target.option6.value
           const child =  {
                name: initial["option1"],
                email: initial["option2"],
                phone: initial["option3"],
                D_O_B: initial["option4"],
                parent: state.userId.pk
            }
            

          
                if(initial["option6"]==='no'){
                    actions.createChild(state.token, child,dispatch,resdispatch)
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;  
                    props.history.push('/q1/');
                }else if(initial["option6"]==='yes'){
                    child["upfile"] = true
                    actions.createChild(state.token, child,dispatch,resdispatch)
                    props.history.push('/files/');
              }
         
            setInitia(initial)
  }

  const handleReturn = e => {
    e.preventDefault();
 
    props.history.goBack();
  }


  return(
        <div >
        <div className="jumbotron forum-header mini_header bgimg" style={{backgroundImage: {mini_header_2}}}>
            <MenuLayout props = {props}/>
           
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
                    <h4 className="form-title">These questions will help us determine the best pathway for your child/ward</h4>
                </div>
                
                    <div className="col-md-10" style={{marginTop: '30px'}}>
                    <form onSubmit={handleSubmit}>
                     
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">Child's Name</p>
                            </div>
                            <div className="col-md-3">
                            <input input className="question-input form-control" type="text" id = "option1" name = "option1" required />
                            
                            </div>
                        </div>

                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">Parent or Guardian's Email</p>
                            </div>
                            <div className="col-md-3">
                            <input input className="question-input form-control" type="email" id = "option2"name = "option2" required />
                             </div>
                        </div>

                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">Parent or Guardian's Phone no.(WhatsApp)</p>
                            </div>
                            <div className="col-md-3">
                            <input input className="question-input form-control" type="tel" id = "option3"name = "option3" required  />
                            </div>
                        </div>

                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">Child's Date of Birth</p>
                            </div>
                            <div className="col-md-3">
                            <input input className="question-input form-control" type="date" id = "option4"name = "option4" required  />
                            </div>
                        </div>

         
 
                      
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">Does your child have a pre-existing diagnosis?   </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option6" id="option6" value = 'yes' autoComplete="off" required /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option6" id="option6" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>
                      
                        

                       
                        <br/>
                            <br/>
                            <br/>
                        <div className="col-12 step-control">
                                <button onClick={handleReturn} className="btn btn-secondary deepblue curvebtn my-2 my-sm-0 colorf">Previous
                                </button>
                                <button type="submit" value="Submit" className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Next
                                </button>
                                
                               
                        </div>
                    </form>
                    </div>
            
                
            </div>

        </div>
        </div>
      
        </div>
)}
  
