import React, { useEffect, useState, useContext, useRef} from "react";
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




export const AppointmentForm = (props) => {





    const { state, dispatch } = useContext(MyContext)
    const { resstate, resdispatch } = useContext(ResContext)
    const [application, setApplication] = useState({})
    const [doctors, setDoctors] = useState([])
    const history = useHistory();
    const [selectedDoctor, setDoctor] = useState(null);
    const [availability, setAvailability] = useState([]);
    const [error, setError] = useState('')
    const inputRef = useRef(null)

    useEffect(() => {
        auth.authCheckState(dispatch, props);
        fetchApp();

    }, [state.token]);


    const selectDoctor = (ev) => {
        let id = ev.target.getAttribute('doctor_id')
        setDoctor(id)
        setAvailability([])
        fetch(`${process.env.REACT_APP_CONSULTANT_URL}/api/availability?doctor=${id}`).then(res => res.json())
            .then(res => setAvailability(res.map(item => {
                return {title: 'Free', start: item.start_datetime, end: item.end_datetime}
            
            })))
    }

    const updateAppointment = () => {
        let appointment_date = inputRef.current.value;
       
        console.log(selectedDoctor, appointment_date)

        if (!appointment_date || !selectedDoctor){
            setError('You need to select a doctor and choose a preferred appointment date')
            return true
        }
        fetch(`${HOST_URL}/clients/appointments/${props.match.params.id}/`, {  method: "PATCH",  headers: {    "Content-type": "application/json"  },  body: JSON.stringify({    consultant: selectedDoctor, user_prefered_time: appointment_date  })})
        .then(
            res => res.json()
        ).then(
            res => history.push('/thank-you')
        )


    }

    const fetchApp = () => {
        if (props.match.params) {
            fetch(`${HOST_URL}/clients/appointments/${props.match.params.id}/`).then(res => res.json())
                .then(
                    res => {
                        const user = JSON.parse(localStorage.getItem("user"));
                        
                        if (user){

                        if (res.user === user.userId.pk) {
                            setApplication(res)
                        } else {
                            history.push('/')
                        }
                        return res.professional
                    }
                    else{
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
                                    <h4 className="form-title">Choose Doctor</h4>
                                </div>
                            </div>
                            <div class="row mt-3">

                                {doctors.map(item => (

                                    <div class="col-4 d position-relative">

                                        <a href="#" data-toggle="modal" data-target="#emma">

                                            <div className="profile-box doctor p-2" style={{ width: '100%', height: 'auto' }}>
                                                <div className={`overlay ${selectedDoctor == item.id ? 'selected' : ''}`}  doctor_id={item.id} onClick={selectDoctor}></div>
                                                <img src={`${process.env.REACT_APP_CONSULTANT_URL}${item.pic}`} style={{ borderRadius: '50%', width: '100%', height: 'auto' }} />
                                                <h3 style={{ color: '#000', 'fontSize': '15px' }}>{item.first_name} {item.last_name}</h3>

                                            </div>
                                        </a>
                                    </div>

                                ))}





                            </div>

                            <div class="row">
                                <div className="col-md-12 mt-4">
                                    <h4 className="form-title">Set Appointment Time</h4>
                                    <p class="mb-1">Plase set appointment based on the availability of the doctor. </p>
                                    <p>The appointment can still be reviewd, you will notified of any changes</p>
                                </div>
                                <div class="col-md-12 mt-2 form-group">
                                    <input ref={inputRef} input className="question-input form-control" type="datetime-local" id="option4" name="option4" required />

                                </div>

                                <div class="col-md-12 mt-2 form-group">

                                    <button onClick={updateAppointment} class="btn btn-primary deepblue curvebtn form-control">Submit</button>

                                </div>
                                <p style={{color: 'red'}}>{error}</p>


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
                                    plugins={[dayGridPlugin,  timeGridPlugin, interactionPlugin]}
                                    initialView="dayGridMonth"
                                    events={availability}
                                    editable={true}
                                    allDay={false}
                                    timeZone="UTC"
                                />

                            }

                        </div>

                     
                    </div>

                </div>
            </div>

        </div>
    )
}

