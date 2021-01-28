

import React ,{useEffect,  useContext,}from "react";
import {MenuLayout} from './menu';
import header_1 from "../static/assets/header_1.jpg";
import header_2 from '../static/assets/header_2.jpg';
import header_3 from '../static/assets/header_3.jpg';
import header_4 from '../static/assets/header_4.jpg';
import header_5 from '../static/assets/header_5.jpg';
import main_logo from "../static/assets/main-logo.png";
import dots_line_1 from "../static/assets/dots-line-1.png";
import dots_line_2 from "../static/assets/dots-line-2.png";
import mother_child from "../static/assets/mother-child.jpg";
import dots_line_3 from "../static/assets/dots-line-3.png";
import expertise from "../static/assets/expertise.png";
import excellence from "../static/assets/expertise.png";
import experience from "../static/assets/experience.png";
import exceptional from "../static/assets/exceptional.png";
import empathy from "../static/assets/empathy.png";
import child from "../static/assets/child.jpg";
import tosin from "../static/assets/tosin.png";
import laide from "../static/assets/laide.png";
import akin from "../static/assets/akin.png";
import {Link } from "react-router-dom";

import {MyContext} from '../store/context/myContext';
import * as auth from "../store/actions/auth";



      
export const Home = (props) => {


    const {state, dispatch} = useContext(MyContext)
   

    useEffect(() => {
        auth.authCheckState(dispatch, props);
 
    }, [state.token]);






return(
    <div >
        

<div className="jumbotron home-slide">
    <div className="home-slide-item"  style={{backgroundImage: `url(${header_1})`}}></div>
    <div className="home-slide-item" style={{backgroundImage: `url(${header_2})`}}></div>
    <div className="home-slide-item" style={{backgroundImage: `url(${header_3})`}}></div>
    <div className="home-slide-item" style={{backgroundImage: `url(${header_4})`}}></div>
    <div className="home-slide-item" style={{backgroundImage: `url(${header_5})`}}></div>

    
    <MenuLayout/>
    <div className="container-fluid banner-body">
        <div className="row">
            <div className="col-md-5">
                <h1 className="animate__animated animate__fadeInLeft">Every child deserves to learn.</h1>
                <p className="animate__animated animate__fadeInLeft">Early intervention makes a difference in predicting a child’s success irrespective of their challenges. Let's help </p>
                <br/>
                <Link to={`/start-here/`}>
                <a  className="btn btn-primary btn-lg skyblue curvebtn animate__animated animate__fadeInLeft my-2 my-sm-0 colorf" >Let us help.</a>
                </Link>
                </div>
        </div>
    
    </div>
</div>

<div className="jumbotron bg-white jp0">
    <div className="container-fluid">
        <div className="row">  
            <div className="col-md-6 revealOnScroll " style={{position: 'relative'}} data-animation="fadeInLeft">
                <img style={{width: "200px"}}  className="banner_logo middle-logo" src={main_logo} alt = {"main_logo"}/>
                <h2 className="primary-header header">Who We Are</h2>
                <ul className="body-list">
                    <li>The SEN Professionals Initiative is a not-for-profit non-governmental organization, whose aim is to provide hope and help to members of the SEN community by bringing together  and making accessible highly trained and experienced professionals in the field of special education</li>

                    <li>
                        It is the vision of three parents, two of whom are SEN Professionals, with years of experience not just as professionals but as parents who have children who at some point, needed special needs intervention. 

                    </li>

                </ul>
                <img className="dot-line second" src={dots_line_2} alt = {"dots_line_2"}/>
            </div>
            <div className="col-md-6 revealOnScroll" data-animation="fadeInRight">
                <img className="dot-line first" src={dots_line_1} alt = {"dots_line_1"}/>
                <img  className="img-responsive " src={mother_child} alt = {"mother_child"}/>
            </div>
        </div>

    </div>

</div>
<div className="jumbotron bg-white">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 revealOnScroll"  data-animation="fadeInLeft">
                <img  className="img-responsive" src={child} alt = {"child"}/>

            </div>
            <div className="col-md-6 revealOnScroll"  data-animation="fadeInRight">
                <h2 className="primary-header header">Our Driving<br/> Force</h2>
                <ul className="body-list">
                    <li>Research has proven that early intervention makes a difference in predicting a child with SEN’s success and ability to live a fully functional life. </li>

                    <li>
                        Statistics have shown that all over the world, SEN Professionals who are able to provide this early intervention, are in a deficit. 


                    </li>
                    <li>
                        These deficits are doubled in Africa, where SEN is still heavily influenced by religious and cultural biases negatively. This has created a community where unskilled personnel are able to exploit helpless parents who uninformed and in desperate search for hope. 

                    </li>
                    <li>
                        This is a gap the SEN Professionals intends to bridge by bringing specialized SEN Professionals together on a single platform; and where parents can access these professionals easily at a reasonable cost and without fear of bias or prejudice.

                    </li>
                    

                </ul>
            </div>

        </div>
    </div>
</div>
<div className="jumbotron blueimage bgimg">
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 text-center">
                <img className="dot-line third" src={dots_line_3} alt = {"dots_line_3"}/>
                <h2 className="header secondary-header">What Matters to Us</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
            
            <div className="matter-items">
                <div className="matter-item revalOnScroll"  data-animation="slideInUp" data-timout="900">
                    <img src={expertise} alt = {"expertise"}/>
                    <p>Expertise</p>
                </div>
                <div className="matter-item reveaOnScroll"  data-animation="slideInUp" data-tieout="900">
                    <img src={empathy} alt = {"empathy"}/>
                    <p>Empathy</p>
                </div>
                <div className="matter-item revelOnScroll"  data-animation="slideInUp" data-timeout="900">
                    <img src={experience} alt = {"experience"}/>
                    <p>Experience</p>
                </div>
                <div className="matter-item revalOnScroll"  data-animation="slideInUp" data-tmeout="900">
                    <img src={excellence} alt = {"excellence"}/>
                    <p>Excellence</p>
                </div>
                <div className="matter-item revalOnScroll"  data-animation="slideInUp" data-tmeout="900">
                    <img src={exceptional} alt = {"exceptional"}/>
                    <p>Exceptional Customer Care</p>
                </div>

            </div>
        </div>
    </div>
</div>
</div>
<div className="jumbotron  bg-white">
<div className="container">
    <div className="row">
        <div className="col-12 text-center" style={{marginBottom: "20px"}}>
            <h2 className="header primary-header">Meet Our Team</h2>
        </div>
    </div>
    <div className="row">

        <div className="col-md-4">
            <a href="#"  data-toggle="modal" data-target="#tosin">
                <div className="profile-box profile-box-red">
                    <img src={tosin} alt = {"tosin"}/>
                    <h3>Tosin Babalola</h3>
                </div>
            </a>
        </div>
        <div className="col-md-4">
            <a href="#"  data-toggle="modal" data-target="#laidemodal">
                <div className="profile-box profile-box-skyblue">
                    <img src={laide} alt = {"laide"}/>
                    <h3>Laide Oyekanmi</h3>
                </div>
            </a>
        </div>
        <div className="col-md-4">
            <a href="#"  data-toggle="modal" data-target="#akin">
                <div className="profile-box profile-box-blue">
                    <img src={akin} alt = {"akin"}/>
                    <h3>Godman Akinlabi</h3>
                </div>
            </a>
        </div>
        
    </div>
</div>


</div>






<div className="modal" tabIndex="-1" role="dialog" id="laidemodal">
<div className="modal-dialog" role="document">
<div className="modal-content">
  <div className="modal-header">
    <h5 className="modal-title" style={{fontWeight: "700"}}><img src={laide} alt = {"laide"}width="30px;"/> Laide Oyekanmi</h5>
    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div className="modal-body">
    <p>Laide Oyekanmi is an Inclusion Specialist with many years of helping children manage learning challenges. After years of teaching students in the general education stream, she decided to teach children with special education needs. Getting a Master of Arts degree in Teacher Education (Special Education concentration for children with high incidence disabilities) was a step in further pursuing her passion. </p>
    <h3 className="primary-header ">Degrees</h3>
    <ul  className="">
        <li>BSc Biological Sciences (University of West Georgia, USA)</li>
        <li>Master of Arts in Education (University of Bath, UK)</li>
        <li>M.A.T. Special Education Concentration for Children with High Incidences (University of West Georgia, USA)</li>
        <li>Ed. D: Leadership in Special Populations (University of Houston, USA)</li>
    </ul>
  </div>
 
</div>
</div>
</div>


<div className="modal" tabIndex="-1" role="dialog" id="tosin">
<div className="modal-dialog" role="document">
<div className="modal-content">
  <div className="modal-header">
    <h5 className="modal-title" style={{fontWeight: "700"}}><img src={tosin} alt = {"tosin"} width="30px"/> Mrs. Tosin Babalola</h5>
    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div className="modal-body">
    <p>Tosin Babalola is a trained professional with a strong passion for empowering parents by partnering with them and other professionals to work directly with hundreds of children that may be considered to have special needs as well as learning disorders with the aim of ensuring that each child succeeds and reaches their full potential.   </p>
    <h3 className="primary-header ">Degrees</h3>
    <ul  className="">
        <li>BSc: Human Resource Management(University of Lagos)</li>
        <li>MSc: Special Educational Needs (Inclusive & Psychological </li>
        <li>Perspectives)(University of Roehampton, UK)</li>
        <li>Certified Autism Specialist (IBCCES UNIVERSITY)</li>
        <li>Ph.D. in Educational Psychology(University of Leicester)</li>
        <li>ASSOCIATIONS REGISTERED IN: British Psychological Society UK, International Board of Credentialing Standards</li>
    </ul>
  </div>
 
</div>
</div>
</div>

<div className="modal" tabIndex="-1" role="dialog" id="akin">
<div className="modal-dialog" role="document">
<div className="modal-content">
  <div className="modal-header">
    <h5 className="modal-title" style={{fontWeight: "700"}}><img src={akin} alt = {"akin"} width="30px;"/>Godman Akinlabi</h5>
    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div className="modal-body">
    <p>Godman Akinlabi is the Lead Pastor of The <a href="https://elevationng.org/" target="_blank" style={{fontWeight: 'bold' , color: '##222c89'}}>Elevation Church</a>,
     Lagos which started in 2010 with a God-given mandate to make greatness common. 
    He is also a seasoned and highly sought-after speaker, trainer, author and consultant who has taught and inspired
     people in conferences and churches around
the world.</p>
<p>He is the visionary behind several initiatives, outreaches and conferences such as the Pistis Foundation,
 a non-profit 
organisation established to be a model provider of empowerment opportunities for the economically challenged with its'

 focus areas on education, health and shelter; a Prison Ministry which has been focused on contributing to the rehabilitation and welfare of inmates through medical and surgical interventions, facility and amenities renovation, provision of basic supplies and establishing a scholarship fund for inmate education. Some of these initiatives have also 
 received awards and recognitions from government parastatals in education, prisons and other sectors. He is also the convener of the Vantage Forum, an annual business & economic outlook event; and Business Roundtable which are both initiatives that help to empower persons in business, the workforce and in government. Under his leadership, there have
  been other social initiatives such as Elevate 200 (E200), a weekly outreach now in its 8th year, that is focused on feeding, training and empowering the less privileged, as well as several large scale Soup Kitchens and free medical outreaches for the less privileged that have held all over Lagos state. The “Ubomi” project, in collaboration with 
  reputable health care specialists, provides free medical and surgical services to over 3500 persons annually.
  </p>
  <p>
The Pistis Foundation has several projects underway which include, constructing a single-sex school to provide basic and secondary education to 240 boys, awarding academic scholarships to 65 children, piloting a welfare system which will start with taking in 16 street kids into a shelter while providing all services of a functional home to them. 
Godman was part of the 2018 Class of Strategic Perspectives in Non-profit Management program of the Harvard University (SPNM18). He is happily married to Bolarinwa and they have two beautiful daughters and live in Lagos, Nigeria.
</p>
    <h3 className="primary-header ">Degrees</h3>
    <ul  className="">
        <li>BSc: Mining Engineering (FUTA)</li>
        <li>Master of Arts: International Law and Diplomacy(Unilag)</li>
        <li>MBA: Manchester Business School</li>
        <li>AFFILIATIONS: Harvard Business School</li>
        
    </ul>
  </div>
 
</div>
</div>
</div>
    
        </div>
    
    )

}
