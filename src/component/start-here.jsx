import React from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import child from "../static/assets/child.jpg";
import {Link } from "react-router-dom";


export const Process = () => {

  return(
        <div >
     
        <div className="jumbotron forum-header mini_header bgimg" style={{backgroundImage: {mini_header_2}}}>
            <MenuLayout/>
            
            <div class="container-fluid">
				<div class="row">
					<div class="col-md-12">
						<div class="row">
							<div class="col-12">	
								<h1>Our Process</h1>
                               
							</div>
						</div>
						
					</div>
				</div>
			</div>
        </div>

        <div class="jumbotron  bg-white">
		<div class="container">

        <div class="row">
				<div class="col-md-12 revealOnScroll " style={{position: 'relative'}} data-animation="fadeInLeft">
						
						
						<ul class="body-list">
							<p>
								We have developed a robust and interactive webpage that provides easy accessibility to meet the needs of our clients. 
This allows technology to be used as a tool for breaking the barriers to accessible special educational needs care. Our process is as simple as 1,2,3!

							</p>

						</ul>
						
					</div>
				<div class="col-6">
					
				</div>
			</div>
            <div class="row d-flex justify-content-between align-items-center">
					<div class="col-lg-6 d-sm-none d-xs-none d-md-block ">
						
						
                    <img  className="img-responsive" src={child} alt = {"child"}/>
					</div>
					
					<div class="col-lg-6">
						<div class="steps">
							<div class="step__item active" style={{opacity: '1'}}><span class="step__item-number"></span>
				                <div class="step__item-content"><span>Step 1:</span>
				                  <p>
									Fill a questionnaire that gives us a first glance into what we might be able to help you with.
									</p>
				                </div>
				              </div>

				              <div class="step__item active" style={{opacity: '1'}}><span class="step__item-number"></span>
				                <div class="step__item-content"><span>Step 2:</span>
				                  <p>
									Make payment based on the services you require from us. 
									</p>
				                </div>
				              </div>

				               <div class="step__item active" style={{opacity: '1'}}><span class="step__item-number"></span>
				                <div class="step__item-content"><span>Step 3:</span>
				                  <p>
									Fill out a set of detailed questions that will help us understand your child: their strengths and areas of needs. Based on your responses, specific and tailor-made recommendations and tips will be sent to guide you into helping your child.
									</p>
				                </div>

				              </div>
				              
				               <div class="step__item active" style={{opacity: '1'}}><span class="step__item-number"></span>
				                <div class="step__item-content"><span>Step 4 (Optional):</span>
				                  <p>
									If you wish to speak to a specific consultant, you can book appointments based on a time that is suitable for both you and the consultant. 									</p>
				                </div>
				                
				              </div>

				              <div class="step__item active" style={{opacity: "1"}}><span class="step__item-number"></span>
				                <div class="step__item-content"><span>Step 5 (Optional):</span>
				                  <p>
									Payment is made to confirm your appointment and the details of the appointment is sent to you.

									</p>
				                </div>
				                
				              </div>

				              <div class="step__item " style={{opacity: "1"}}><span class="step__item-number"></span>
				                <div class="step__item-content"><span>Step 6 (Optional):</span>
				                  <p>
									Have the appointment with our seasoned consultants and get a detailed professional report after the appointment.



									</p>
				                </div>
				                
				              </div>
				              
				              
							</div>

							<div class="row">

								<div class="col-lg-6">
                                <Link className="btn btn-primary btn-lg skyblue curvebtn animate__animated animate__fadeInLeft my-2 my-sm-0 colorf" style={{width: '100%'}} to={`/initial/`}>
                                   Take Assessment
                                </Link>
									
								</div>
							
								<div class="col-lg-6">
                                <Link className="btn btn-primary btn-lg deepblue curvebtn animate__animated animate__fadeInLeft my-2 my-sm-0 colorf" style={{width: '100%'}} to={`/checkout/`}>
                                   Book An Appointment
                                </Link>
									
									
								</div>
							</div>
					</div>			
				</div>
	</div>
	</div>
        </div>
)}