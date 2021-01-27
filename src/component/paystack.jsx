import React ,{useContext, }from "react";
import { usePaystackPayment,  } from 'react-paystack';
import {ResContext} from '../store/context/resultContext';
import { updateChild} from "../store/actions/assignments";
import {MyContext} from '../store/context/myContext';
import { getResults} from "../store/actions/assignments";

import { init } from 'emailjs-com';
init("user_jDFiteMUy9NWNFehWpWQR");

const config = {
    reference: (new Date()).getTime(),
    email: "oluwaboriife@gmail.com",
    amount: 2000,
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

export const Pay = (props) => {
  
  const {resstate, resdispatch} = useContext(ResContext);
  const {title} = resstate;
  const {state, dispatch} = useContext(MyContext)
  const id = props.chill.id

  const child = props.chill
  child.paid = true
  config.email = child.email
    const componentProps = {
        config,
        text: 'Paystack Button Implementation',
        onSuccess: () => {

          updateChild(id,child,state.token, resdispatch)
          getResults(id,state.token, resdispatch)

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
            
        })
        .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    
          props.history.push("/result/");
        },


        onClose: () => null
    };
  
    return (
        <div className="App">
         
          <PaystackHookExample {...componentProps}/>
        </div>
      );
}

