import React ,{useEffect, useState, useContext, useCallback, useRef}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
// import {Link } from "react-router-dom";
// import { getASNTS } from "../store/actions/assignments";
import {MyContext} from '../store/context/myContext';
import {ResContext} from '../store/context/resultContext';
// import CheckoutItem from './checkout-item/checkout-item.component';
// import StripeCheckoutButton from './stripe-button/stripe-button.component';
// import {PayAppoint} from './payappoint';
import {PayAppoint} from './flutterappoint';
import * as auth from "../store/actions/auth";

import './checkout.styles.scss';


export const CheckOut = (props) => {

    const node = useRef();
    // const node2 = useRef(0);
    // const node3 = useRef();

    // const [tot, setTot] = useState('$---');
    const {state, dispatch} = useContext(MyContext);
    const {resstate, resdispatch} = useContext(ResContext);
    const {cartItems} = resstate;
    // const [alert, setAlert] = useState(false);

    useEffect(() => {
    auth.authCheckState(dispatch, props);
    // node.current.addEventListener('click', (e)=>  {
    // for (const select of node.current.querySelectorAll('.custom-select')) {
    //     if (!select.contains(e.target)) {
    //         select.classList.remove('open');
    //     }
    // }
    // });

    // for (const option of node.current.querySelectorAll(".custom-option")) {
    // option.addEventListener('click', () =>  {
    //     if (!option.classList.contains('selected')) {
    //         option.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
    //         option.classList.add('selected');
    //         option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent;
    //     }
    // })   }

    // for (const dropdown of node.current.querySelectorAll(".custom-select-wrapper")) {
    //     dropdown.addEventListener('click', ()=> {
    //         dropdown.querySelector('.my-custom-select').classList.toggle('open');
    //     })
        
    // }

    // for (const option of node.current.querySelectorAll(".custom-choice")) {
    //     option.addEventListener('click', () =>{
    //         if (!option.classList.contains('active')) {
    //             if( option.parentNode.querySelector('.custom-choice.active')){
    //                 option.parentNode.querySelector('.custom-choice.active').classList.remove('active');}
    //                 option.classList.add('active');
    //             // option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent; 
    //         }
    //     })
    // }


    }, [state.token]);


const professionals = [ {name:"Counsellor 1",price:'$75/hr',amount:75},
                        {name:"Behavioral Analyst",price:'$100/hr',amount:100},
                        {name:"Technical Psychologist",price:'$75/hr',amount:75},
                        {name:"Clinical Psychologist",price:'$200/hr',amount:200},
                        {name:"Advocate",price:'$75/hr',amount:75},
                        {name:"Paediatrician",price:'$150/hr',amount:150},
                        {name:"Speech Therapist",price:'$200/hr',amount:200}
                        ]
// var total = tot

// const scrollFunction = ()=> {
// if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
// document.getElementById("scrollnav").style.top = "0";
// } else {
// document.getElementById("scrollnav").style.top = "-150px";
// }
// }

// window.onscroll = ()=>  {scrollFunction()};

// const initial=  {}
// const handleSubmit = e => {
// e.preventDefault();
// }

const handleReturn = e => {
e.preventDefault();

props.history.goBack();
}

    return(
        <div ref={node}>

        <div className="jumbotron forum-header mini_header bgimg" style={{backgroundImage: {mini_header_2}}}>
        <MenuLayout/>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/><br/>
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-12">
        <div className="row">
            <div className="col-12">	
            <h1>Meet a Professional</h1>
            </div>
        </div>

        </div>
        </div>
        </div>
        </div>
        <div className="jumbotron bg-white  checkout-page">
			<div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                    <div className='checkout-header'>
                        <h4 className="form-title">Pay for a Session</h4>  
                    </div>
                
                        <br/>
                        
                       {professionals.map(x=> 
                        <div key={professionals.indexOf(x)+1}  class="row checkout-header">
                            <div class="col-md-5">
                                <ul class="summary">
                                <li style={{fontSize: '19px', color: 'black', fontWeight: 500}}>{x.name} </li>
                                </ul>
                                
                            </div>

                            <div class="col-md-3 ">
                                <ul class="summary ">
                                <li class="btn-info"> {x.price} </li>
                                </ul>
                                
                            </div>

                            <div class="col-md-4">
                                <ul key={professionals.indexOf(x)+1}  className='summary'>
                                    <PayAppoint amount={x.amount} name={x.name}/>    
                                </ul>
                            </div>
                    </div>)
                                                
                        }
                       
                    </div>
                
                </div>
            </div>
		</div>
            <div className="col-12 step-control">
                <button onClick = {handleReturn}
                className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Previous
                </button>
            </div>
            <br/> <br/>
        {/* <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" integrity="sha512-3n19xznO0ubPpSwYCRRBgHh63DrV+bdZfHK52b1esvId4GsfwStQNPJFjeQos2h3JwCmZl0/LgLxSKMAI55hgw==" crossorigin="anonymous"></script> */}

        </div>
    )}