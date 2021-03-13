import React, { useEffect, useState, useContext, } from "react";
import { MenuLayout } from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import { MyContext } from '../store/context/myContext';
import * as actions from "../store/actions/assignments";
import * as auth from "../store/actions/auth";
import { ResContext } from '../store/context/resultContext';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';




export const AppointmentForm = (props) => {




    const [initia, setInitia] = useState({});
    const [error, setError] = useState(false);
    const { state, dispatch } = useContext(MyContext)
    const { resstate, resdispatch } = useContext(ResContext)

    useEffect(() => {
        auth.authCheckState(dispatch, props);


    }, [state.token]);






    const initial = {}
    const handleSubmit = e => {
        e.preventDefault();

        initial["option1"] = e.target.option1.value
        initial["option2"] = e.target.option2.value
        initial["option3"] = e.target.option3.value
        initial["option4"] = e.target.option4.value

        initial["option6"] = e.target.option6.value
        const child = {
            name: initial["option1"],
            email: initial["option2"],
            phone: initial["option3"],
            D_O_B: initial["option4"],
            parent: state.userId.pk
        }



        if (initial["option6"] === 'no') {
            actions.createChild(state.token, child, dispatch, resdispatch)
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            props.history.push('/q1/');
        } else if (initial["option6"] === 'yes') {
            child["upfile"] = true
            actions.createChild(state.token, child, dispatch, resdispatch)
            props.history.push('/files/');
        }

        setInitia(initial)
    }

    const handleReturn = e => {
        e.preventDefault();

        props.history.goBack();
    }


    return (
        <div >
            <div className="jumbotron forum-header mini_header bgimg" style={{ backgroundImage: { mini_header_2 } }}>
                <MenuLayout props={props} />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-12">
                                    <h1>Manage Appointment</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="jumbotron bg-white">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10">
                            <h4 className="form-title">Appointment Settings</h4>
                        </div>



                    </div>
                    <div className="row">
                        <div className="col-md-7" style={{ marginTop: '30px' }}>
                            <FullCalendar
                                headerToolbar= {{
                                    left: 'prev,next today',
                                    center: 'title',
                                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                                }}
                                editable={true}
                                plugins={[dayGridPlugin, bootstrapPlugin, timeGridPlugin, interactionPlugin]}
                                initialView="dayGridMonth"
                            />
                        </div>

                        <div className="col-md-5">
                            <div class="row">
                            <div className="col-md-12 mt-4">
                                    <h4 className="form-title">Choose Doctor</h4>
                                </div>
                            </div>
                            <div class="row mt-3">

                                
                                <div class="col-4 ">
                                    <a href="#" data-toggle="modal" data-target="#emma">
                                        <div className="profile-box " style={{ width: '100%', height: 'auto' }}>
                                            <img src="/static/media/emma.be540e73.jpeg" style={{ borderRadius: '50%', width: '100%', height: 'auto' }} />
                                            <h3 style={{color: '#000', 'fontSize': '15px'}}>John Doe</h3>
                                            <button class="btn btn-primary skyblue curvebtn">Choose</button>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="#" data-toggle="modal" data-target="#emma">
                                        <div className="profile-box " style={{ width: '100%', height: 'auto' }}>
                                            <img src="/static/media/tosin.20b230cd.png" style={{ borderRadius: '50%', width: '100%', height: 'auto' }} />
                                            <h3 style={{color: '#000', 'fontSize': '15px'}}>John Doe</h3>
                                            <button class="btn btn-primary skyblue curvebtn">Choose</button>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="#" data-toggle="modal" data-target="#emma">
                                        <div className="profile-box " style={{ width: '100%', height: 'auto' }}>
                                            <img src="/static/media/bolanle.a4f363b7.png" style={{ borderRadius: '50%', width: '100%', height: 'auto' }} />
                                            <h3 style={{color: '#000', 'fontSize': '15px'}}>John Doe</h3>
                                            <div class="select-action">
                                            <button class="btn btn-primary skyblue curvebtn">Choose</button>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                            </div>

                            <div class="row">
                            <div className="col-md-12 mt-4">
                                    <h4 className="form-title">Set Appointment Time</h4>
                                    <p class="mb-1">Plase set appointment based on the availability of the doctor. </p>
                                    <p>The appointment can still be reviewd, you will notified of any changes</p>
                                </div>
                                <div class="col-md-12 mt-2 form-group">
                                <input input className="question-input form-control" type="datetime-local" id = "option4"name = "option4" required  />

                                </div>

                                <div class="col-md-12 mt-2 form-group">

                                <button class="btn btn-primary deepblue curvebtn form-control">Submit</button>

                                </div>


                            </div>


                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

