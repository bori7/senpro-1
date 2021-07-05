import React ,{useContext, }from "react";
import {MyContext} from '../store/context/myContext';
import {ResContext} from '../store/context/resultContext';
import { useAlert } from 'react-alert';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import {capitalizeFirstLetter} from '../store/utility';
import * as actions from "../store/actions/assignments";
import { useHistory } from "react-router-dom";

export const PayAppoint = (props) => {

    const alert = useAlert()
    const {state, dispatch} = useContext(MyContext)
    const {resstate, resdispatch} = useContext(ResContext)
    const history = useHistory();

  const config = {
    public_key: 'FLWPUBK_TEST-1afe530682da3dfa991142ac5df907c1-X',//`${process.env.REACT_APP_PUBLIC_KEY}`,
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '07064586146',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'Senpro Consultancy Payment',

      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

    if(state.userId){config.customer.email = state.userId.email}
    if(state.username){config.customer.name = state.username}
   

    if(props.amount){config.amount = Math.ceil((props.amount/props.rate)*1.25)}
    if(props.name){config.customizations.description += props.name}

const appnt = {
                user: props.pk,
                professional: props.name,
                amount: props.amount,
                user_id: props.pk
              }
              // console.log(appnt)

const onSuccess = () => {

    var message = "Thank you for the recent payment you have made to us. You will notified through email on further updates. Thanks"
    let templateParams = {
    from_name: 'SENPRO',
    to_name: capitalizeFirstLetter( state.username) ,
    subject: 'Payment Recieved',
    message: message,
    check:'check the website for the contact of the '+props.name,
    reply_to: state.userId.email }
    actions.createAppointment(state.token,appnt,resdispatch, props).then(
      res => {
        props.closeModal()
        
        history.push(`/manage-appointment/${res.data.id}`)
      }
    )
    var message = "An application has just been submitted on SENPRO. Please login to the consultant to review"
    

    
    
    
}

const fwConfig = {
    ...config,
    text: 'Book Now!',
    className:"btn btn-warning deepblue curvebtn my-2 my-sm-0 margin-right colorf",
    callback: (response) => {

      
      closePaymentModal()
       onSuccess();

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