import React ,{useEffect, useContext, }from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';

import {MyContext} from '../store/context/myContext';

import advocacy from "../static/assets/advocacy.png";
import assessments from "../static/assets/assessments.png";
import community from "../static/assets/community.png";
import consulting from "../static/assets/consulting.png";
import counselling from "../static/assets/counselling.png";
import early_intervention from "../static/assets/early_intervention.png";

export const Services = () => {

   
  
  return(
        <div>
       
        <div className="jumbotron forum-header mini_header bgimg" style={{backgroundImage: {mini_header_2}}}>
            <MenuLayout/>
            
            <div class="container-fluid">
				<div class="row">
					<div class="col-md-12">
						<div class="row">
							<div class="col-12">	
								<h1>Services</h1>
							</div>
						</div>
						
					</div>
				</div>
			</div>
        </div>

        <div class="jumbotron  bg-white">
		<div class="container">
			
			<div class="row">
				<div class="col-12 text-center" style={{marginBottom: '20px'}}>
					<h2 class="header primary-header">Our Services</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4 ser-col">
					<img class="img-responsive" src={advocacy}/>
					<h2>Advocacy</h2>
				</div>
				<div class="col-md-4 ser-col">
					<img class="img-responsive" src={assessments}/>
					<h2>Assessments</h2>
				</div>
				<div class="col-md-4 ser-col">
					<img class="img-responsive" src={community}/>
					<h2>Community</h2>
				</div>
				
				

				
			</div>
			<div class="row">
				<div class="col-md-4 ser-col">
					<img class="img-responsive" src={consulting}/>
					<h2>Consulting</h2>
				</div>
				<div class="col-md-4 ser-col">
					<img class="img-responsive" src={counselling}/>
					<h2>Counselling</h2>
				</div>
				<div class="col-md-4 ser-col">
					<img class="img-responsive" src={early_intervention}/>
					<h2>Early Intervention</h2>
				</div>
				
				

				
			</div>
			
		</div>
		

	</div>

        </div>
)}