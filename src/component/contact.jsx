import React, { useEffect, useState, useContext, } from "react";
import { MenuLayout } from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import { Link } from "react-router-dom";
import  {HOST_URL} from '../store/clientResult';

export const Contact = (props) => {


    const [error, setError] = useState(false);





    const initial = {}

    const handleSubmit = e => {
        e.preventDefault();

        initial["option1"] = e.target.option1.value
        initial["option2"] = e.target.option2.value

        let name = e.target.name.value;
        let email = e.target.email.value;
        let phone = e.target.phone.value;
        let message = e.target.message.value;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": name,
            "email": email,
            "phone" : phone,
            "message" : message
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${HOST_URL}/send_contact_email`, requestOptions)
            .then(response => response.json())
            .then(result => alert('Thanks!, We have received your message, we reach back to you.'))
            .catch(error => console.log('error', error));

    }

    const handleReturn = e => {
        e.preventDefault();

        props.history.push('/signup/');
    }


    return (
        <div >
            <div className="jumbotron forum-header mini_header bgimg" style={{ backgroundImage: { mini_header_2 } }}>
                <MenuLayout />
                <br />


                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1>Contact</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className=" container jumbotron bg-white  text-center">
                <div className="container">
                    <div className="row " style={{ justifyContent: 'center' }}>

                        <div className="col-md-8" style={{ marginTop: '10px' }}>

                            <form onSubmit={handleSubmit}>

                                <div className="row questions" style={{ justifyContent: 'center' }}>

                                    <div className="col-md-9">
                                        <p className="questions text-danger col-md-9">{error}</p>
                                        <input input className="question-input form-control" placeholder="Name" type="text" id="option1" name="name" required />

                                    </div>
                                </div>


                                <div className="row questions" style={{ justifyContent: 'center' }}>

                                    <div className="col-md-9">

                                        <input input className="question-input form-control" placeholder="Email" type="email" id="option2" name="email" required />

                                    </div>
                                </div>

                                <div className="row questions" style={{ justifyContent: 'center' }}>

                                    <div className="col-md-9">
                                        <input input className="question-input form-control" placeholder="Phone" type="text" id="option3" name="phone" required />
                                    </div>
                                </div>

                                <div className="row questions" style={{ justifyContent: 'center' }}>

                                    <div className="col-md-9">

                                        <textarea name="message" className="question-input form-control" placeholder="Message" required/>

                                    </div>
                                </div>



                                <div className="row" style={{ justifyContent: 'center' }}>

                                    <div className="col-9 step-control" style={{ justifyContent: 'flex-end' }}>

                                        <button type="submit" value="Submit" style={{ width: '100%' }} className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Login
                                        </button>

                                    </div>
                                </div>







                            </form>

                        </div>


                    </div>

                </div>
            </div>


        </div>
    )
}

