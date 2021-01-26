import React ,{useContext, }from "react";
import {MyContext} from '../store/context/myContext';
import { useAlert } from 'react-alert';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { init } from 'emailjs-com';
import {capitalizeFirstLetter} from '../store/utility';

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
    
    alert.show('Check your e-mail for your Appointemt schedule',{type: 'success',});
    })
    .catch(err => {
    alert.show('Payment Failed',{type: 'error',});
    })
    
    
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