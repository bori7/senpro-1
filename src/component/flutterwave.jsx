
import React ,{useEffect, useState,useContext, useCallback, useRef}from "react";
import * as auth from "../store/actions/auth";
import {ResContext} from '../store/context/resultContext';
import { updateChild} from "../store/actions/assignments";
import {MyContext} from '../store/context/myContext';
import { getResults} from "../store/actions/assignments";
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { init } from 'emailjs-com';
import { useAlert } from 'react-alert';
init("user_jDFiteMUy9NWNFehWpWQR");


export const Pay = (props) => {

    const {resstate, resdispatch} = useContext(ResContext);
    const {title} = resstate;
    const {state, dispatch} = useContext(MyContext)
    const id = props.chill.id
    const alert = useAlert()
  
   const config = {
    public_key: 'FLWPUBK_TEST-aa04e2b8c50a2d3dfce7742398f14203-X',
    tx_ref: Date.now(),
    amount: 200,
    currency: 'USD',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '07064586146',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'Senpro Results',
      description: 'Payment for Results',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const child = props.chill
  child.paid = true
  config.customer.email = child.email
  config.customer.phonenumber = child.phone
  config.customer.name = child.name

//   if(props.amount){config.amount = props.amount}

const onSuccess =  () => {
    // console.log(child)
    updateChild(id,child,state.token, resdispatch)
    getResults(id,state.token, resdispatch)
    // console.log(resstate.title, id, resstate.child_id)

    setTimeout(function(){console.log('hello')},5000)

    var message = ''
    var u
    for (u of title){
    message += u + " " +"\n" + " "
    }

    let templateParams = {
    from_name: 'SENPRO',
    to_name: state.username,
    subject: 'SENPRO ANALYSIS',
    message: message,
    check:'check the website for your results',
    reply_to: child.email 
    }

    window.emailjs.send(
    'gmail',
    'template_q8uee8n',
    templateParams,
    "user_jDFiteMUy9NWNFehWpWQR"
    ).then(res => {
    // console.log('Email successfully sent!',res)
    alert.show('Check your e-mail for your Results',{type: 'success',});
    })
    .catch(err => {console.error('There has been an error.  Here some thoughts on the error that occured:', err);
    alert.show('Payment Failed',{type: 'error',});
    })
    // props.history.push("/result/");
}

  const fwConfig = {
    ...config,
    text: 'Book Now!',
    className:"btn btn-warning deepblue curvebtn my-2 my-sm-0 margin-right colorf",
    callback: (response) => {
      //  console.log(response);
       onSuccess();
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="App">
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}