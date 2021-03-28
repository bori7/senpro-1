import React, { useEffect, useState, useContext, useRef} from "react";
import { MenuLayout } from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import { MyContext } from '../store/context/myContext';
import * as auth from "../store/actions/auth";
import { ResContext } from '../store/context/resultContext';
import {Link } from "react-router-dom";






export const ThankYou = (props) => {





    const { state, dispatch } = useContext(MyContext)
    const { resstate, resdispatch } = useContext(ResContext)
   

    useEffect(() => {
        auth.authCheckState(dispatch, props);
     

    }, [state.token]);


  






    return (
        <div >
            <div className="jumbotron forum-header mini_header bgimg" style={{ backgroundImage: { mini_header_2 } }}>
                <MenuLayout props={props} />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-12">
                                    <h1>Thank You</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="jumbotron bg-white">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-center">
                        <h4 className="form-title ">Thank You!</h4>
                        <p>Check your email for updates from us</p>
                        <Link className="btn btn-primary deepblue curvebtn " to={`/forum/`}>Please check out our Forum</Link>
                        </div>



                    </div>
                   

                </div>
            </div>

        </div>
    )
}

