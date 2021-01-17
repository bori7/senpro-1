import React ,{useEffect, useState,useContext, useCallback, useRef}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import { createGradedASNT } from "../store/actions/results";
import {MyContext} from '../store/context/myContext';
import {ResContext} from '../store/context/resultContext';
import advocacy from "../static/assets/advocacy.png";
import assessments from "../static/assets/assessments.png";
import community from "../static/assets/community.png";
import consulting from "../static/assets/consulting.png";
import counselling from "../static/assets/counselling.png";
import early_intervention from "../static/assets/early_intervention.png";

export const About = (props) => {

    const node = useRef();
    const todosPerPage = 1;
    const [ activePage, setCurrentPage ] = useState( 1 );
    const {state, dispatch} = useContext(MyContext)
    const {resstate, resdispatch} = useContext(ResContext)
    
    const [initia, setInitia] = useState({});

  
    useEffect(() => {
            // auth.authCheckState(dispatch, props)

            node.current.addEventListener('click', (e)=>  {
            for (const select of node.current.querySelectorAll('.custom-select')) {
            if (!select.contains(e.target)) {
            select.classList.remove('open');
            }
            }
            });

            for (const option of node.current.querySelectorAll(".custom-option")) {
            option.addEventListener('click', () =>  {
            if (!option.classList.contains('selected')) {
            option.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            option.classList.add('selected');
            option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent;
            }
            })   }

            for (const dropdown of node.current.querySelectorAll(".custom-select-wrapper")) {
            dropdown.addEventListener('click', ()=> {
            dropdown.querySelector('.my-custom-select').classList.toggle('open');
            })

            }

            for (const option of node.current.querySelectorAll(".custom-choice")) {
            option.addEventListener('click', () =>{
            if (!option.classList.contains('active')) {
                if( option.parentNode.querySelector('.custom-choice.active')){
                    option.parentNode.querySelector('.custom-choice.active').classList.remove('active');}
                    option.classList.add('active');
                // option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent; 
            }
            })
            }
    
    }, [state.token]);

const scrollFunction = ()=> {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("scrollnav").style.top = "0";
    } else {
    document.getElementById("scrollnav").style.top = "-150px";
    }
}

window.onscroll = ()=>  {scrollFunction()};



  return(
        <div ref={node}>
       {/* <div ref={node2} className="se-pre-con"></div> */}
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
			<div class="row">
				<div class="col-md-6">
					<h2 class="bold">Our Mission</h2>
					<p>
					To provide globally accessible professional SEN expertise and guidance for early intervention and care for the Special Educational Needs Community
						</p>
				</div>
				<div class="col-md-6">
					<h2 class="bold">Our Vision</h2>
					<p>
					SEN Professionals aims to provide hope and help to members of the SEN community by offering guidance and quality care. SEN Professionals will provide help to the SEN community by affordable and easily accessible expertise via consultations, training, and support. Showcasing the strengths and talents of individuals living with exceptional abilities; making them functional and self-sufficient
						</p>
				</div>
			</div>
			<div class="row">
				<div class="col-12 text-center" style={{marginBottom: '20px'}}>
					<h2 class="header primary-header" style={{color: '#000'}}>Our Core Values</h2>
				</div>
			</div>
			

		

			

			
			
			
			


			<div class="row">
				<div class="col-12">
					<div class="accordion" id="accordionExample">
						<div class="card core">
							<div class="card-header" id="headingOne">
							<h2 class="mb-0">
								<button class="btn btn-link core-body " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								Expertise
								</button>
							</h2>
							</div>

							<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
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



        
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" integrity="sha512-3n19xznO0ubPpSwYCRRBgHh63DrV+bdZfHK52b1esvId4GsfwStQNPJFjeQos2h3JwCmZl0/LgLxSKMAI55hgw==" crossorigin="anonymous"></script>
		
        </div>
)}