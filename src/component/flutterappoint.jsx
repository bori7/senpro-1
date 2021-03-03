import React ,{useContext, }from "react";
import {MyContext} from '../store/context/myContext';
import {ResContext} from '../store/context/resultContext';
import { useAlert } from 'react-alert';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import {capitalizeFirstLetter} from '../store/utility';
import * as actions from "../store/actions/assignments";

export const PayAppoint = (props) => {

    const alert = useAlert()
    const {state, dispatch} = useContext(MyContext)
    const {resstate, resdispatch} = useContext(ResContext)

  const config = {
    public_key: `${process.env.REACT_APP_PUBLIC_KEY}`,
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
      title: 'Senpro Consultancy Payment',
      description: 'Session with a ',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

    if(state.userId){config.customer.email = state.userId.email}
    if(state.username){config.customer.name = state.username}

    if(props.amount){config.amount = props.amount}
    if(props.name){config.customizations.description += props.name}

const appnt = {
                user: props.pk,
                professional: props.name,
                amount: props.amount,
              }
              // console.log(appnt)

const onSuccess = () => {

    var message = "You have been scheduled to meet with the "+props.name
    let templateParams = {
    from_name: 'SENPRO',
    to_name: capitalizeFirstLetter( state.username) ,
    subject: 'SENPRO ANALYSIS',
    message: message,
    check:'check the website for the contact of the '+props.name,
    reply_to: state.userId.email }

    window.emailjs.send(
    'gmail',
    'template_fkturqn',
    templateParams,
    "user_jDFiteMUy9NWNFehWpWQR"
    ).then(res => {
    // console.log(res)
    
    alert.show('Check your e-mail for your Appointemt schedule',{type: 'success',});
    })
    .catch(err => {
      // console.log(err)
    alert.show('Email not sent',{type: 'error',});
    })

    actions.createAppointment(state.token,appnt,resdispatch)
    
    
}

const fwConfig = {
    ...config,
    text: 'Book Now!',
    className:"btn btn-warning deepblue curvebtn my-2 my-sm-0 margin-right colorf",
    callback: (response) => {
    
       onSuccess();
      closePaymentModal()
    },
    onClose: () => {},
  };

  return (
    <div className="App">
        <FlutterWaveButton {...fwConfig} />
     
    </div>
  );
}