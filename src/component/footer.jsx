import React, {useEffect} from "react";
import banner_logo from "../static/assets/banner_logo.png";
import  '../../src/static/style.css';


export const Footer= () => {
    
  

    return(
  
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
                <a href="/privacy/" style={{color: "#fff"}}>Privacy Policy</a>
            </div>
        </div>
        <div className="row">
            <div class="col-12">
                <ul class="socials">
                    <li><a href="https://web.facebook.com/senproinitiative"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/senproinitiative"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com/senproinitiative/"><i className="fa fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    )
}