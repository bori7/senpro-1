import React ,{useEffect, useContext, useState} from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import {MyContext} from '../store/context/myContext';
import {PayAppoint} from './flutterappoint';
import * as auth from "../store/actions/auth";
import './checkout.styles.scss';



export const CheckOut = (props) => {
    
    
    const {state, dispatch} = useContext(MyContext);
    const [load, setLoad] = useState(false);
    const [rate, setRate] = useState(null)
    var pk = ''
    if(state.userId){pk = state.userId.pk}

    useEffect(() => {
    auth.authCheckState(dispatch, props);
    getRate()
    }, [state.token,]);


const professionals = [
                        {name:"Behaviour Assessment",price:'$400/hr',amount:400, slug:'behaviour-assessment'},
                        {name:"Speech Therapy",price:'$100/hr',amount:100, slug: 'speech-therapy'},
                        {name:"Paediatrician",price:'$125/hr',amount:125, slug: 'paediatrician'},
                        {name:"Speech Accessment",price:'$150/hr',amount:150, slug: 'speech-accessment'},
                        {name:"Educational Accessor",price:'$300/hr',amount:300, slug: 'educational-accesssor'},
                        {name:"Behaviour Therapy",price:'$100/hr',amount:100, slug: 'behaviour-therapy'},
                        {name:"Academic Intervention",price:'$50/hr',amount:50, slug: 'academic-intervention'},
                        {name:"Physical Therapy",price:'$75/hr',amount:75, slug: 'physical-therapy'},
                        {name:"Advocate",price:'$75/hr',amount:75, slug: 'advocate'},
                        {name:"Counsellor",price:'$75/hr',amount:5, slug: 'counsellor'},

                        ]


   const toggleLoadState = () =>{
     
        setLoad(!load)
   }

   const getRate = () => {
    fetch('https://data.fixer.io/api/latest?access_key=863f53ae1710e89a24528fa2feb59e3a&base=NGN&symbols=USD')
    .then(resp => resp.json()).then(res => setRate(res.rates?.USD))
   }

   const setModal = () => {
       setLoad(false)
   }


return (

    <div>
         {load? <div className="se-pre-con"></div>:null}

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
                    <h2 class="header primary-header">Book An Appointment</h2> 
                    </div>
                </div>
        
            <div className="row">
                    {rate ?  professionals.map(x => 
                        <div key={professionals.indexOf(x)+1} className="col-lg-3 col-md-4">
                            <div className="justify-content-between profile-box-blue 
                            d-flex flex-column pay-box align-items-center py-3" 
                            style={{height: '200px'}}>
                                <h3  >{x.name} </h3>
                                <h2 > {x.price} </h2>
                                <a key={professionals.indexOf(x)+1} onClick={toggleLoadState}  >
                                    <PayAppoint rate={rate} closeModal={setModal} amount={x.amount} name={x.slug} pk={pk}/>    
                                </a>
                            </div>
                        </div>
                        ) : ''
                    }
            </div>
          
        </div>
		
            
            
       
    
    </div>
</div>

)}


