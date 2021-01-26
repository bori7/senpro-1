import React ,{useEffect, useState,useContext, useCallback, useRef}from "react";
// import logo from './logo.svg';
// import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
// import * as auth from "../store/actions/auth";
// import {ResContext} from '../store/context/resultContext';
// import { updateChild} from "../store/actions/assignments";
import {MyContext} from '../store/context/myContext';
// import { getResults} from "../store/actions/assignments";
// import * as emailjs from 'emailjs-com';
import { useAlert } from 'react-alert';
import { init } from 'emailjs-com';
init("user_jDFiteMUy9NWNFehWpWQR");


const config = {
    reference: (new Date()).getTime(),
    email: "oluwaboriife@gmail.com",
    amount: 20000,
    publicKey: 'pk_test_c3efee1a891a5b886791f966dde3afe76b1f4b63',
};


const PaystackHookExample = ({config,onSuccess,onClose}) => {
    const initializePayment = usePaystackPayment(config);
    return (
        <div>
            <button 
             className="btn btn-primary deepblue curvebtn my-2 my-sm-0 margin-right colorf" onClick={() => {
                initializePayment(onSuccess,onClose)
            }}>Pay through Paystack</button>
        </div>
    );
};

export const PayAppoint = (props) => {
    const alert = useAlert()
//   const {resstate, resdispatch} = useContext(ResContext);
//   const {title} = resstate;
  const {state, dispatch} = useContext(MyContext)
// console.log(state.userId.email)
    if(state.userId){config.email = state.userId.email}
    
    if(props.amount){config.amount = props.amount*51000}
    const componentProps = {
        config,
        text: 'Paystack Button Implementation',
        onSuccess: () => 

        
        {

            var message = "You have been scheduled to meet with the "+props.name
           
            let templateParams = {
            from_name: 'SENPRO',
            to_name: state.username,
            subject: 'SENPRO ANALYSIS',
            message: message,
            check:'check the website for your results',
            reply_to: state.userId.email }
            
          window.emailjs.send(
            'gmail',
            'template_fkturqn',
             templateParams,
             "user_jDFiteMUy9NWNFehWpWQR"
           ).then(res => {
            // console.log('Email successfully sent!',res)
        })
        .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    
        alert.show('Check your e-mail for your Appointemt schedule',{type: 'success',});
        },


        onClose: () => null
    };
  
    return (
        <div className="App">
         
          <PaystackHookExample {...componentProps}/>
        </div>
      );
}

