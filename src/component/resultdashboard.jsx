import React ,{useEffect, useContext,}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';

import {MyContext} from '../store/context/myContext';
import {ResContext} from '../store/context/resultContext';
import main_logo from '../static/assets/main-logo.png';

import { getChilds} from "../store/actions/assignments";
import { getResults} from "../store/actions/assignments";
import * as auth from "../store/actions/auth";


import {Pay} from './flutterwave';
export const ResultDashboard = (props) => {

    const {resstate, resdispatch} = useContext(ResContext);

    const {state, dispatch} = useContext(MyContext)
    const {explain, childs,child_id} = resstate;

  
  
    useEffect(() => {
        
        auth.authCheckState(dispatch, props); 
        getChilds(state.userId.pk,state.token,resdispatch)
   
    }, [state.token,explain]);





var chilre = childs.filter(y=>y.testres)

const handleClick = (id,e) => {
    e.preventDefault();
    
    getResults(id,state.token, resdispatch)
  
    props.history.push("/result/");

}

  return(
        <div>
       
      
        <div className="jumbotron forum-header mini_header bgimg" style={{backgroundImage: {mini_header_2}}}>
           
            
          
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
	
        </div>
)}