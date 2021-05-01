import React, { useEffect, useState, useContext, useRef } from "react";
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
import { HOST_URL } from '../store/clientResult';
import { useHistory } from "react-router-dom";
import loading from "../static/assets/loading.gif";
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import { useStyletron } from 'baseui';
import momentPlugin from '@fullcalendar/moment'


export const AppointmentForm = (props) => {





    const { state, dispatch } = useContext(MyContext)
    const { resstate, resdispatch } = useContext(ResContext)
    const [application, setApplication] = useState({})
    const [doctors, setDoctors] = useState([])
    const history = useHistory();
    const [selectedDoctor, setDoctor] = useState(null);
    const [availability, setAvailability] = useState([]);
    const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone)
    const [error, setError] = useState('')
    const inputRef = useRef(null)
    const [css] = useStyletron();

    useEffect(() => {
        auth.authCheckState(dispatch, props);
        fetchApp();

    }, [state.token]);



    const selectDoctor = (ev) => {
        let id = ev.target.getAttribute('doctor_id')
        setDoctor(id)
        setAvailability([])
        fetch(`${process.env.REACT_APP_CONSULTANT_URL}/api/availability?doctor=${id}`).then(res => res.json())
            .then(res => {
                setAvailability(res.map(item => {
                    return { title: 'Choose Slot', start: item.start_datetime, id: item.pk, timezone: item.timezone }

                }))
                if (res.length == 0) {
                    alert('The doctor you have chosen is not currently avaialable');
                }
            }

            )
    }



    const submitAppointment = (clickInfo) => {


       
        var r = window.confirm(`Are you sure the chosen date and time is suitable for you`);
        if (r == true) {
            let consultant_timezone = availability.filter(item => item.id == +clickInfo.event.id)[0].timezone
            console.log(clickInfo.event.start.toUTCString())
            
             fetch(`${HOST_URL}/clients/appointments/${props.match.params.id}/`, {
                method: "PATCH", headers: { "Content-type": "application/json" }, body: JSON.stringify({
                    consultant: selectedDoctor,
                    user_prefered_time: clickInfo.event.start,
                    availability: clickInfo.event.id,
                    user_timezone: timezone,
                    consultant_name: `${doctors.filter(item => item.id == selectedDoctor)[0]?.first_name} ${doctors.filter(item => item.id == selectedDoctor)[0]?.last_name}`,
                    consultant_email: doctors.filter(item => item.id == selectedDoctor)[0]?.email,
                    consultant_timezone: availability.filter(item => item.id == clickInfo.event.id)[0]?.timezone
                })
            })
                .then(
                    res => {
                        res.json()
                        fetch(`${HOST_URL}/send_appointment_email?id=${props.match.params.id}`)
                    }
                ).then(
                    res => history.push('/thank-you')
                )
        } else {
            return false
        }



    }

    const fetchApp = () => {
        if (props.match.params) {
            fetch(`${HOST_URL}/clients/appointments/${props.match.params.id}/`).then(res => res.json())
                .then(
                    res => {
                        const user = JSON.parse(localStorage.getItem("user"));

                        if (user) {

                            if (res.user === user.userId.pk) {
                                setApplication(res)
                            } else {
                                history.push('/')
                            }
                            return res.professional
                        }
                        else {
                            history.push('/login/')
                        }
                    }

                )
                .then(
                    res => {
                        fetch(`${process.env.REACT_APP_CONSULTANT_URL}/api/doctors?service=${res}`).then(res => res.json())
                            .then(res => setDoctors(res))
                    }
                )
        }
    }

    const handleChange = (newValue) => setTimezone(newValue)


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
                        <div className="col-md-5">
                            <div class="row">
                                <div className="col-md-12 mt-4">
                                    <h4 className="form-title">Choose Consultant</h4>
                                </div>
                            </div>
                            <div class="row mt-3">

                                {doctors.map(item => (

                                    <div class="col-4 d position-relative">

                                        <a href="#" data-toggle="modal" data-target="#emma">

                                            <div className="profile-box doctor p-2" style={{ width: '100%', height: 'auto' }}>
                                                <div className={`overlay ${selectedDoctor == item.id ? 'selected' : ''}`} doctor_id={item.id} onClick={selectDoctor}></div>
                                                <div style={{width: '100%', height: '200px', overflowY: 'hidden'}}><img src={`${process.env.REACT_APP_CONSULTANT_URL}${item.pic}`} style={{ borderRadius: '50%', width: '100%', height: 'auto' }} /></div>
                                                <h3 style={{ color: '#000', 'fontSize': '15px' }}>{item.first_name} {item.last_name}</h3>

                                            </div>
                                        </a>
                                    </div>

                                ))}





                            </div>

                            <div class="row">
                                <div className="col-md-12 mt-4">
                                    <h4 className="form-title">Set Appointment Time(Africa/Lagos)</h4>
                                    <p class="mb-1">Please choose a time slot that is suitable for you to hold the session </p>
                                    <p>The appointment can still be reviewed, you will notified of any changes</p>
                                </div>

                                <div class="col-md-12 mt-2 form-group" >

                                   

                                </div>
                                <p style={{ color: 'red' }}>{error}</p>


                            </div>


                        </div>
                        <div className="col-md-7" style={{ marginTop: '30px' }}>
                            {availability.length > 0 &&

                                <FullCalendar
                                    headerToolbar={{
                                        left: 'prev,next today',
                                        center: 'title',
                                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                                    }}
                                    editable={true}
                                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin,momentPlugin ]}
                                    initialView="dayGridMonth"
                                    events={availability}
                                    editable={true}
                                    allDay={false}
                                    timeZone='utc'
                                    eventClick={submitAppointment}
                                />

                            }

                            {availability.length == 0 &&
                                <div class="text-center">
                                    <img src={loading} />
                                </div>

                            }

                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}

