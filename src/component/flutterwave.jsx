
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
  const alert = useAlert()
    const {resstate, resdispatch} = useContext(ResContext);
    const {title} = resstate;
    const {state, dispatch} = useContext(MyContext)
    const id = props.chill.id
  
   const config = {
    public_key: `${process.env.REACT_APP_PUBLIC_KEY}`,
    tx_ref: Date.now(),
    amount: 1,
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

  console.log(config.public_key)

  const child = props.chill
  
  config.customer.email = child.email
  config.customer.phonenumber = child.phone
  config.customer.name = child.name



const onSuccess =  () => {
    child.paid = true
    
    updateChild(id,child,state.token, resdispatch)
    getResults(id,state.token, resdispatch).
    then(res => {
      fetch(`${HOST_URL}/send_payment_email?email=${child.email}&child=${child.id}`) 
      props.closeModal()
    
    })   
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