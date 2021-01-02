import React from "react";
import banner_logo from "../static/assets/banner_logo.png";
import  '../../src/static/style.css';
export const Footer= () => (
  
<div className="jumbotron blueimage bgimg footer">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h3>Talk to Us</h3>
                <p>info@senpro.org</p>
                <p style={{marginBottom: '30px'}}>contact@sendpro.org</p>
                <p>+234 (0) 810 123 4567</p>
                <p style={{marginBttom: '30px'}}>+234 (0) 810 123 8910</p>
                <h3>Visit Us</h3>
                <p>Lagos: No 1 Street, Opposite Crescent, Lagos, Nigeria</p>
                <p>Lagos: No 2 Street, Beside Place, FCT Abuja, Nigeria</p>


            </div>
            <div className="col-md-6" style={{textAlign: 'right'}}>
                <img style={{width: '200px'}} className="banner_logo" src={banner_logo} alt = {"banner_logo"}/>
                <p>@ 2020  SendPro. All rights reserved.</p>
            </div>
        </div>
    </div>
    </div>
)