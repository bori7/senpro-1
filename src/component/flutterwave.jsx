
import React ,{useContext}from "react";
import {ResContext} from '../store/context/resultContext';
import { updateChild} from "../store/actions/assignments";
import {MyContext} from '../store/context/myContext';
import { getResults} from "../store/actions/assignments";
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { useAlert } from 'react-alert'
import {capitalizeFirstLetter} from '../store/utility';
import  {HOST_URL} from '../store/clientResult';
// import dotenv from  'dotenv'



export const Pay = (props) => {
  
    const {resstate, resdispatch} = useContext(ResContext);
    const {state, dispatch} = useContext(MyContext)
    const id = props.chill.id
  
   const config = {
    public_key:`${process.env.REACT_APP_PUBLIC_KEY}`,
    tx_ref: Date.now(),
    payment_options: 'card,mobilemoney,ussd',
    amount: (process.env.REACT_APP_PRICE_MEETING/props.rate)*1.40,
    currency: 'NGN',
    customer: {
      email: 'user@gmail.com',
      phone_number: '07064586146',
      name: 'joel ugwumadu',
      test: 'test',
    },
    customizations: {
      title: 'Senpro Results',
      description: 'Payment for Results',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

 

  const child = props.chill
  
  config.customer.email = child.email
  config.customer.phone_number =  `result-${child.id}`
  config.customer.name = child.name
 



const onSuccess =  () => {
    child.paid = true
    getResults(id,state.token, resdispatch)
    props.closeModal()
}

  const fwConfig = {
    ...config,
    text: 'Pay Now!',
    className:"btn btn-warning deepblue curvebtn my-2 my-sm-0 margin-right colorf",
    callback: (response) => {
      
      onSuccess(); 
      closePaymentModal();
    },
    onClose: () => {
      props.closeModal()
    },
  };

  return (
    <div className="App">
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}