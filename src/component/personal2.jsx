import React ,{useEffect, useContext, }from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import {MyContext} from '../store/context/myContext';
import {ResContext} from '../store/context/resultContext';
import main_logo from '../static/assets/main-logo.png';
import { createASNT } from "../store/actions/assignments";

export const Personal = (props) => {

    const {resstate, resdispatch} = useContext(ResContext);
    
    const {state, dispatch} = useContext(MyContext)
    const {explain,tips,title,child_id} = resstate;
  
    
  
    useEffect(() => {
      
   
    }, [state.token,child_id,explain]);


    var cart = []

const handleSubmit = e => {
    e.preventDefault();
    createASNT(cart,resdispatch)
    props.history.push("/checkout/");
  }

  const handleReturn = e => {
    e.preventDefault();
 
    props.history.push("/");
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
                       
                       <div class="row">
                           <div class="col-md-6">
                                
                                <h4 class="form-title">Summary</h4>

                                <ul class="summary">
                                {title.map(x=> 
                                        <li key={title.indexOf(x)}>{x}</li>
                                    )}
                                </ul>
                                
                            </div>

                            <div class="col-md-6">
                                
                                <h4 class="form-title">Recomendations</h4>

                                <ul class="summary">
                                {title.map(x=> 
                                        <li key={title.indexOf(x)} >{tips[title.indexOf(x)]}</li>
                                    )}
                                </ul>
                                
                            </div>
                       </div>
                        
                        
                     
                        <div className="col-12 step-control">
                               
                        <button onClick = { handleReturn} className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Back to Home
                        </button>
                        <button onClick = { handleSubmit}  className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Book An Appointment
                        </button>
                        
                        </div>
                       
                    </div>
                </div>
            </div>
		</div>

       
        
        </div>
)}