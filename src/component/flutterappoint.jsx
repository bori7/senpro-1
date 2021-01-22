import React ,{useEffect, useState,useContext, useCallback, useRef}from "react";
import {MyContext} from '../store/context/myContext';
import * as emailjs from 'emailjs-com';
import { useAlert } from 'react-alert';
// import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { init } from 'emailjs-com';
init("user_jDFiteMUy9NWNFehWpWQR");

export const PayAppoint = (props) => {

    const alert = useAlert()
    const {state, dispatch} = useContext(MyContext)

  const config = {
    public_key: 'FLWPUBK_TEST-aa04e2b8c50a2d3dfce7742398f14203-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'USD',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '07064586146',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'Consultancy Payment',
      description: 'Session with a ',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

    if(state.userId){config.customer.email = state.userId.email}
    if(state.username){config.customer.name = state.username}

    if(props.amount){config.amount = props.amount}
    if(props.name){config.customizations.description += props.name}

// const handleFlutterPayment = useFlutterwave(config);

const onSuccess = () => {

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
    console.log('Email successfully sent!',res)
    alert.show('Check your e-mail for your Appointemt schedule',{type: 'success',});
    })
    .catch(err => {console.error('There has been an error.  Here some thoughts on the error that occured:', err);
    alert.show('Payment Failed',{type: 'error',});
    })
    
    
}

const fwConfig = {
    ...config,
    text: 'Book Now!',
    className:"btn btn-warning deepblue curvebtn my-2 my-sm-0 margin-right colorf",
    callback: (response) => {
       console.log(response);
       onSuccess();
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="App">
        <FlutterWaveButton {...fwConfig} />
      {/* <button className="btn btn-warning deepblue curvebtn my-2 my-sm-0 margin-right colorf" 
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
               onSuccess();
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Pay with Barter
      </button> */}
    </div>
  );
}