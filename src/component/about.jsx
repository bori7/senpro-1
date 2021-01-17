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



        
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" integrity="sha512-3n19xznO0ubPpSwYCRRBgHh63DrV+bdZfHK52b1esvId4GsfwStQNPJFjeQos2h3JwCmZl0/LgLxSKMAI55hgw==" crossorigin="anonymous"></script>
		
        </div>
)}