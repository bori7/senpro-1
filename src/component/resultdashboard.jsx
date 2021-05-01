import React ,{useEffect, useContext, useState}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';

import {MyContext} from '../store/context/myContext';
import {ResContext} from '../store/context/resultContext';
import main_logo from '../static/assets/main-logo.png';

import { getChilds} from "../store/actions/assignments";
import { getResults} from "../store/actions/assignments";
import * as auth from "../store/actions/auth";
import { useLocation } from "react-router-dom";
import axios from "axios";
import  {HOST_URL} from '../store/clientResult';


import {Pay} from './flutterwave';
export const ResultDashboard = (props) => {

    const {resstate, resdispatch} = useContext(ResContext);
    const {state, dispatch} = useContext(MyContext)
    const [surveys, setSurvey] = useState([])
    const [load, setLoad] = useState(false)
    
    useEffect(() => {
        
        auth.authCheckState(dispatch, props);
        let user = JSON.parse(localStorage.getItem('user'))
        if (user){

        fetchResults(user.userId.pk,user.token)
        .then(res => {   
            setSurvey(res);
           
        }
        )  
        
        getChilds(user.userId.pk,user.token,resdispatch)
        
        
        }
   
    }, []);

    const toggleLoadState = () =>{
     
        setLoad(!load)
   }

   const setModal = () => {
       setLoad(false)
   }


    const fetchResults = (parent, token) => {

        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`
        };
        return axios
          .get(`${HOST_URL}/clients/childs/?parent=${parent}&ordering=-timestamp`)
          .then(res => {
            let childs = res.data;
            console.log(res.data)
            return res.data
          })
          .catch(err => {
           
          });
    }







const handleClick = (id,e) => {
    e.preventDefault();
    
    getResults(id,state.token, resdispatch)
    
    props.history.push(
        
        {
            pathname: '/result/',
            state: { from: 'yes' }
            }
    
    );
    
    

}

  return(
        <div>
             {load? <div className="se-pre-con"></div>:null}
       
      
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

                        <p class="text-center">Thank you for filling this questionnaire. Please note that a payment of $25 will be required to view results. Thank you.</p>
                        
                        {surveys.length !==0 ?
                       
                       <div class="row">
                           <div class="col-md-6 col-xs-6">
                                <h4 class="form-title">Surveys </h4>
                            </div>

                            <div class="col-md-6 col-xs-6">
                                <h4 class="form-title">Results</h4>
                            </div>
                       </div>:""}
                       
                       {surveys.length != 0 ? (surveys.map( item => 
                       
                       <div key={item.id}  class="row">
                           
                            <div class="col-md-6">
                                    <ul class="summary">
                                    <li >Date {(new Date(item.timestamp)).toLocaleDateString()} 
                                     _{(new Date(item.timestamp)).toLocaleTimeString()} </li>
                                    </ul>
                                    
                                </div>

                                <div class="col-md-6">
                                    {item.paid ?  (<ul key={item.id} class="summary">
                                    <button onClick = {(e) => handleClick(item.id, e)}  className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">
                                    View result
                                    </button>
                                    </ul>) :(<div key={item.id} onClick={toggleLoadState}  className='total'>
                                    <Pay chill={item} closeModal={setModal} />    
                                            </div>) }       

                                </div>
                        </div>)
                                            
                        ) : (
                                <h4 class="form-title">No Results from any questionnaire</h4>
                           )}
                        
                        
                    </div>
                </div>
            </div>
		</div>
	
        </div>
)}