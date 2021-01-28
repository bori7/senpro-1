import React ,{useEffect, useContext} from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import {MyContext} from '../store/context/myContext';
import {PayAppoint} from './flutterappoint';
import * as auth from "../store/actions/auth";
import './checkout.styles.scss';


export const CheckOut = (props) => {
    
    
    const {state, dispatch} = useContext(MyContext);

    useEffect(() => {
    auth.authCheckState(dispatch, props);
  
    }, [state.token]);


const professionals = [ {name:"Counsellor",price:'$75/hr',amount:75},
                        {name:"Behavioral Analyst",price:'$100/hr',amount:100},
                        {name:"Technical Psychologist",price:'$75/hr',amount:75},
                        {name:"Clinical Psychologist",price:'$200/hr',amount:200},
                        {name:"Advocate",price:'$75/hr',amount:75},
                        {name:"Paediatrician",price:'$150/hr',amount:150},
                        {name:"Speech Therapist",price:'$200/hr',amount:200}
                        ]


    const handleReturn = e => {
            e.preventDefault();

            props.history.goBack();
            }

return (

    <div>

        <div className="jumbotron forum-header mini_header bgimg" style={{backgroundImage: {mini_header_2}}}>

        <MenuLayout/>
       
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-12">
        <div className="row">
            <div className="col-12">	
            <h1>Book An Appointment </h1>

            </div>

            </div>
            </div>
            </div>
        </div>
        </div>
        <div className="jumbotron bg-white ">
			<div className="container">
                <div className="row">
                    <div className="col-12 text-center" style={{marginBottom: '20px'}}>
                    <h2 class="header primary-header">Pay for a Session</h2> 
                    </div>
                </div>
        
            <div className="row">
                    {professionals.map(x => 
                        <div key={professionals.indexOf(x)+1} className="col-lg-3 col-md-4">
                            <div className="justify-content-between profile-box-blue 
                            d-flex flex-column pay-box align-items-center py-3" 
                            style={{height: '200px'}}>
                                <h3  >{x.name} </h3>
                                <h2 > {x.price} </h2>
                                <a key={professionals.indexOf(x)+1}  >
                                    <PayAppoint amount={x.amount} name={x.name} />    
                                </a>
                            </div>
                        </div>
                        ) 
                    }
            </div>
            <div class="row">
                <div className="col-12 step-control">
                    <button onClick = {handleReturn}
                    className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Previous
                    </button>
                </div>
            </div>
        </div>
		
            
            
       
    
    </div>
</div>

)}


