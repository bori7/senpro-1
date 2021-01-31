import React from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import tosin from "../static/assets/tosin.png";
import laide from "../static/assets/laide.png";
import akin from "../static/assets/akin.png";

export const About = (props) => {

    
   
  return(
	<div >

		<div className="jumbotron forum-header mini_header bgimg" style={{backgroundImage: {mini_header_2}}}>
		<MenuLayout/>

			<div class="container-fluid">
				<div class="row">
					<div class="col-md-12">
						<div class="row">
							<div class="col-12">	
							<h1>About Us</h1>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>

		<div class="jumbotron  bg-white">
		<div class="container">
			<div class="row">
				<div class="col-12">
						<p>
						SENPRO Initiative is the vision of two SEN Professionals who have over 20 combined years of experience not just as professionals but as mothers who have had children who at some point, needed special needs intervention. 
						</p>
						<p>
						Research has proven that early intervention makes a difference in predicting a child’s success and ability to live a fully functional life irrespectively of their gifts or challenges. However, this success is sometimes linked to the quality of the professional. Statistics have, however, shown that these professionals are in a deficit across the globe. These deficits are doubled in Africa, where SEN is still negatively influenced by religious and cultural biases. These, coupled with the low-income index has created a community where unskilled personnel can exploit helpless parents who are uninformed and in a desperate search for hope and clear directions. 
						</p>
						<p>
						This is a deficit the SENPRO Initiative intends to close this deficit by bringing specialized and qualified SEN professionals together on a single platform where parents can access these professionals easily at a reasonable cost.  
						</p>
				</div>
			</div>
		<div class="row d-flex justify-content-between align-items-center">
			<div class="col-md-6">
				<div>
					<h2 class="bold">Our Mission</h2>
						<p>
						To provide globally accessible professional SEN expertise and guidance for early intervention and care for the Special Educational Needs Community
						</p>
				</div>
			<div>
			<h2 class="bold">Our Vision</h2>
						<p>
						Professionals aims to provide hope and help to members of the SEN community by offering guidance and quality care. SEN Professionals will provide help to the SEN community by affordable and easily accessible expertise via consultations, training, and support. Showcasing the strengths and talents of individuals living with exceptional abilities; making them functional and self-sufficient
						</p>
			</div>
		</div>
		<div class="col-md-6">
		<div class="row  ">
		<div class="col-12 text-center" style={{marginBottom: '20px'}}>
	
		</div>
		</div>
		<div class="accordion" id="accordionExample">
		<div class="card core">
		<div class="card-header" id="headingOne">
		<h2 class="mb-0">
				<button class="btn btn-link core-body " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
				Expertise
				</button>
		</h2>
		</div>

		<div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
		<div class="card-body ">
		Our consultants are some of the best in their individual areas of specialty in the various fields of special education. They go through a rigorous vetting process to ensure that they are qualified and knowledgeable experts in their field with many years of experience. Our consultants are engaged after going through a training and onboarding process that ensures that they are aligned with our values. 
		</div>
		</div>
		</div>

		<div class="card core">
		<div class="card-header" id="headingOne">
		<h2 class="mb-0">
		<button class="btn btn-link core-body" type="button" data-toggle="collapse" data-target="#collapsetwo" aria-expanded="true" aria-controls="collapseOne">
		Empathy
		</button>
		</h2>
		</div>

		<div id="collapsetwo" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
		<div class="card-body ">
		SEN Professionals is the vision of two special education professionals who have years of experience not just as professionals but as mothers who have had children who at some point, needed special needs intervention. We understand the fear, anxiety, and worry parents (and carers) of people with special needs feel. We also know the joys that come from the “little” successes these children make with early intervention, support and care. These personal experiences have influenced us in having a more empathetic and holistic approach where we aim to see the child not just the challenge.							</div>
		</div>
		</div>



		<div class="card core">
		<div class="card-header" id="headingOne">
		<h2 class="mb-0">
		<button class="btn btn-link core-body" type="button" data-toggle="collapse" data-target="#exper" aria-expanded="true" aria-controls="collapseOne">
		Experience
		</button>
		</h2>
		</div>

		<div id="exper" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
		<div class="card-body ">
		There are over twenty-two (22) years of working with various aspects of child development including (but not limited to) speech/language disorders, autism, specific learning disabilities, emotional (and behavioral) disorders between the two special needs professionals at the core of The SEN Professionals (or visioneers). We have experience working in the classroom as intervention teachers from the early years of our careers, and also as consultants for individuals, families, established organizations and government groups. We have achieved great success with over 98% success rate in helping individuals and families find the best intervention pathway.							</div>
		</div>

		</div>

			<div class="card core">
					<div class="card-header" id="headingOne">
					<h2 class="mb-0">
					<button class="btn btn-link core-body" type="button" data-toggle="collapse" data-target="#excellence" aria-expanded="true" aria-controls="collapseOne">
					Excellence
					</button>
					</h2>
					</div>

			<div id="excellence" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
			<div class="card-body ">
			Excellence is one of our watchwords. We believe in doing everything with excellence in view. Therefore, we expect excellence from all our staff and consultants. We also hold ourselves to high moral standards and character.						</div>

			</div>
			</div>

			<div class="card core">
			<div class="card-header" id="headingOne">
			<h2 class="mb-0">
			<button class="btn btn-link core-body" type="button" data-toggle="collapse" data-target="#except" aria-expanded="true" aria-controls="collapseOne">
			Exceptional Customer Care
			</button>
			</h2>
			</div>

			<div id="except" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
			<div class="card-body ">
			We pride ourselves on delivering excellent results with the best care. We want all our clients to always have positive experiences regardless of who they interact with. Our clients matter to us, and we want this to result in a tangibly positively extraordinary experience at all times. 						
			</div>
			</div>
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

	</div>
)}