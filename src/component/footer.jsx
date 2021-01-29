import React from "react";
import banner_logo from "../static/assets/banner_logo.png";
import  '../../src/static/style.css';
export const Footer= () => (
  
<div className="jumbotron blueimage bgimg footer">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h3>Talk to Us</h3>
                <p >contact@senproinitiative.org</p>
                <p style={{marginBttom: '30px'}}>+234 909 000 2364</p>
                <h3>Visit Us</h3>
                <p>Address : H163, Road 48, Victoria Garden City, Lekki-Epe Expressway, Lagos.</p>

            </div>
            <div className="col-md-6" style={{textAlign: 'right'}}>
                <img style={{width: '200px'}} className="banner_logo" src={banner_logo} alt = {"banner_logo"}/>
                <p>@ 2021  SenPro. All rights reserved.</p>
            </div>
        </div>
    </div>
    </div>
)