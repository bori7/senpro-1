import React from "react";
import { Route } from "react-router-dom";

import {Home} from './component/home';
import {About} from './component/about';
import {Consultants} from './component/consultants';
import {Question1} from './component/q1';
import {InitialForm} from './component/initialForm';
import Forum from './component/forum';
import {GenDev2} from './component/gd2';
import {GenDev3} from './component/gd3';
import {GenDev4} from './component/gd4';
import {GenDev5} from './component/gd5';
import {Academics} from './component/academics';
import {Speech} from './component/speech';
import {Behavior} from './component/behavior';
import {Mental} from './component/mental';
import {Above5} from './component/above5';
import {Age} from './component/age';
import {Personal} from './component/personal';
import {MyDropzone} from './component/fileUpload';
import {Login} from './component/login';
import {SignUp} from './component/signup';
import {CheckOut} from './component/checkout';
import {Pay} from './component/paystack';
import {ResultDashboard} from './component/resultdashboard';
import {Services} from './component/services';
import {Resources} from './component/resources';
import {Process} from './component/start-here';
import {Privacy} from './component/privacy';
import {ResetPassword} from './component/resetPassword';
import {ResetPasswordConfirm} from './component/resetPasswordConfirm';
import {AppointmentForm} from './component/appointment'


const BaseRouter = () => (
  <div>
    
    <Route exact path="/" component={Home} />
    <Route exact path="/consultants/" component={Consultants} />
    <Route exact path="/about/" component={About} />
    <Route exact path="/q1/" component={Question1} />
    <Route exact path="/initial/" component={InitialForm} />
    
    <Route exact path="/forum/" component={Forum} />
    <Route exact path="/gendev2/" component={GenDev2} />
    <Route exact path="/gendev3/" component={GenDev3} />
    <Route exact path="/gendev4/" component={GenDev4} />
    <Route exact path="/gendev5/" component={GenDev5} />
    <Route exact path="/academics/" component={Academics} />
    <Route exact path="/speech/" component={Speech} />
    <Route exact path="/behavior/" component={Behavior} />
    <Route exact path="/mental/" component={Mental} />
    <Route exact path="/above5/" component={Above5} />
    <Route exact path="/age/" component={Age} />

    <Route exact path="/login/" component={Login} />
    <Route exact path="/signup/" component={SignUp} />
    
    <Route exact path="/result/" component={Personal} />
    <Route exact path="/checkout/" component={CheckOut} />
    <Route exact path="/childresult/" component={ResultDashboard} />
    <Route exact path="/pay/" component={Pay} />
    <Route exact path="/files/" component={MyDropzone} />
    <Route exact path="/services/" component={Services} />
    <Route exact path="/resources/" component={Resources} />
    <Route exact path="/start-here/" component={Process} />
    <Route exact path="/privacy/" component={Privacy} />
    <Route exact path="/manage-appointment/" component={AppointmentForm} />

    <Route exact path="/resetpassword/" component={ResetPassword} />
    <Route path="/resetpasswordconfirm/:uid/:token" component={ResetPasswordConfirm} />

  </div>
);

export default BaseRouter;
