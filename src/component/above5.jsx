import React ,{useEffect, useContext}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import { Link } from "react-router-dom";
import * as auth from "../store/actions/auth";
import {MyContext} from '../store/context/myContext';


export const Above5 = (props) => {

   
    const {state, dispatch } = useContext(MyContext);
    
  
    useEffect(() => {
        auth.authCheckState(dispatch, props);
      

    }, []);


  

  const handleReturn = e => {
    e.preventDefault();
 
    props.history.goBack();
  }


  return(
        <div >
  
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
        </div>
)}