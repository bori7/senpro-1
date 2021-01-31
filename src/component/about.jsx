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

	
)}