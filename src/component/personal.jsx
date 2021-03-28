import React, { useEffect, useContext, } from "react";
import { MenuLayout } from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import { MyContext } from '../store/context/myContext';
import { ResContext } from '../store/context/resultContext';
import main_logo from '../static/assets/main-logo.png';
import { createASNT } from "../store/actions/assignments";
import { useLocation } from "react-router-dom";

export const Personal = (props) => {

    const { resstate, resdispatch } = useContext(ResContext);

    const { state, dispatch } = useContext(MyContext)
    const { explain, tips, title, child_id } = resstate;
    const location = useLocation()



    useEffect(() => {


    }, [state.token, child_id]);

    useEffect(() => {
        console.log(location.state)
        if (!location.state?.from) {
            props.history.push('/childresult/')
        }
    }, [])


    var cart = []

    const handleSubmit = e => {
        e.preventDefault();
        createASNT(cart, resdispatch)
        props.history.push("/checkout/");
    }

    const handleReturn = e => {
        e.preventDefault();

        props.history.push("/");
    }


    return (
        <div >


            <div className="jumbotron forum-header mini_header bgimg" style={{ backgroundImage: { mini_header_2 } }}>
                <MenuLayout />



                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-12">
                                    <h1>RESULTS</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="jumbotron bg-white">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-9 text-center">
                            <img src={main_logo} class="mb-3" alt={"main_logo"} style={{ width: '200px' }} />

                            {title.map((x, i) =>

                                <div key={title.indexOf(x)} class="answer-container mb-3">
                                    <div class="answer-header pb-1">
                                        <h4 class="answer-title primary-header bold">{x}</h4>
                                    </div>
                                    <div class="answer-body pt-1 pb-3">
                                        <p>{explain[i]}</p>
                                        <h4 class="answer-title primary-header bold">Tips</h4>
                                        <p>{tips[i]}</p>
                                    </div>
                                </div>
                            )}


                            <a class="btn btn-primary btn-lg deepblue curvebtn my-5  colorf my-2" href="/checkout/" style={{ width: '100%' }}>Book An Appointment</a>


                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}