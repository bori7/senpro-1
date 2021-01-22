import React ,{useEffect, useState,useContext, useCallback, useRef}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import { createGradedASNT } from "../store/actions/results";
import {MyContext} from '../store/context/myContext';
import {ResContext} from '../store/context/resultContext';
import * as auth from "../store/actions/auth";
import {createResult}from "../store/actions/assignments";
import { getChilds} from "../store/actions/assignments";
import { updateChild} from "../store/actions/assignments";
import emma from "../static/assets/emma.jpeg";
import tosin from "../static/assets/tosin.png";
import isa from "../static/assets/isa.jpeg";
import bolanle from "../static/assets/bolanle.png";


export const  Consultants= (props) => {

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
            
        <div className="container-fluid">
                <div className="row">
					<div className="col-md-12">
						<div className="row">
							<div className="col-12">	
								<h1>Our Consultants</h1>
							</div>
						</div>
						
					</div>
				</div>
        </div>
        </div>


<div className="jumbotron  bg-white">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center" style={{marginBottom: '20px'}}>
							<h2 className="header primary-header">Meet Our Consultants</h2>
						</div>
					</div>
					<div className="row">

						<div className="col-md-4">
							<a href="#"  data-toggle="modal" data-target="#tosin">
								<div className="profile-box profile-box-red">
									<img src={tosin}/>
									<h3>Mrs Tosin Babalola</h3>
								</div>
							</a>
						</div>
						<div className="col-md-4">
							<a href="#"  data-toggle="modal" data-target="#bolanle">
								<div className="profile-box profile-box-blue">
									<img src={bolanle} style={{borderRadius: '50%', width: '200px', height: '200px'}}/>
									<h3 style={{textAlign: 'center'}}>Mrs. Bolanle Adewole</h3>
								</div>
							</a>
						</div>
						<div className="col-md-4">
								<a href="#"  data-toggle="modal" data-target="#emma">
									<div className="profile-box profile-box-blue">
										<img src={emma} style={{borderRadius: '50%', width: '200px', height: '200px'}}/>
										<h3>Mr Emmanuel Olajitan</h3>
									</div>
								</a>
							</div>
						
						

						
					</div>
					<div className="row" style={{marginTop: "20px"}}>
							<div className="col-md-4"></div>
							<div className="col-md-4">
							<a href="#"  data-toggle="modal" data-target="#isa">
								<div className="profile-box profile-box-skyblue">
									<img src={isa} style={{borderRadius: '50%', width: '200px', height: '200px'}}/>
									<h3>Mrs Joy Isa</h3>
								</div>
							</a>
						</div>
						</div>
				</div>
				

				</div>	


				<div className="modal" tabindex="-1" role="dialog" id="bolanle">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" style={{fontWeight: "700"}}>
                        <img src="/static/assets/bolanle.png" width="30px;"/> Mrs. Bolanle Adewole</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<p>Mrs. Bolanle Adewole, an Advanced Certified Autism Specialist (A.C.A.S) USA and Behaviour Analyst (A.B.A) USA, is the founder and executive director of TLPCentre, the first full day school for children with Autism and other related developmental disorders on Lagos Island. She is a certified Primary and Elementary Montessori practitioner (St.Nicholas) UK; (NAMC) Canada and the Executive Director of The Learning Place Montessori school, Lekki, Lagos.</p>
						<p>
				She is passionate about Autism awareness and advocacy, and continually engages in the empowerment and fluent integration of the differently able children into mainstream schools and into the community.
				As a Behaviour Analyst, she is conscious of the environment and the impact it has on behaviour. She believes every behavior is triggered by an antecedent and does not occur in isolation. She is part of a team of specialists that provides services including assessments, consultations and interventions to children with different needs.</p>
				<p>
				With over 26 six years teaching experience in the UK, USA and Nigeria, she has influenced the education of over 1,000 children and continuously attends various enriching  national and international educational courses and conferences.
				A renowned speaker and teacher, Bolanle, belongs to several Professional bodies including American Montessori Society. She is the Vice President of Autism Parents Association International (APAi) and was recently appointed the chairperson of Association of Private Educators in Nigeria (APEN)’s Training Team.


						</p>
					</div>
					
					</div>
				</div>
			</div>


				<div className="modal" tabindex="-1" role="dialog" id="emma">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" style={{fontWeight: '700'}}>
                        <img src="/static/assets/emma.png" width="30px;"/> Mr Emmanuel Olajitan</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<p>
							Emmanuel Olajitan is a Psychologist. He has an M.Sc. in Psychology from Walden University, US. He is also a graduate of the prestigious Obafemi Awolowo University. He strives to assist individuals from all walks of life, in resolving issues around abuse, self-esteem, feeling of stagnation, overcoming past failures and regrets, finding inner peace, purposeful living and influence.
								</p><p>
				Having been married for well over two decades and attending several training and workshops on family life and marriage success, he has been equipped to help repair and build healthy marriages and families, which is one of his core passions. He can be described as a family-centric person and has been influential in the rebuilding and strengthening numerous marriages and families across the globe. </p><p>
				He is also a serving Pastor who is versed in Pastoral Care and counselling for over two decades. Emmanuel Olajitan is married and blessed with two girls. 


						</p>
					</div>
					
					</div>
				</div>
			</div>

				<div className="modal" tabindex="-1" role="dialog" id="isa">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" style={{fontWeight: '700'}}>
                        <img src="/static/assets/isa.png" width="30px;"/> Mrs. Joy Isa</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<p>Mrs Joy Isa is an energetic woman who is passionate about education and counselling. She has a first degree in French and Linguistics (BA) from the University of Jos and started her career in education in 1996, right after her National Youth Service. She earned an MSc in Multidisciplinary Studies from Buffalo State University of New York and holds a Certificate in International School Leadership, from the Principals Training Centre, in the UK. She is a certified Youth Counsellor (Institute of Counselling in the UK) and a certified Child Protection and Safeguarding Officer. She is currently completing a doctoral degree in Curriculum, Instruction and Assessment (EdD) from Walden University, Minnesota. She has worked in British and American International schools across Nigeria over the past 25 years, working in various capacities as teacher and school leader.</p>
						<p>
							She is a sought-after youth counsellor and speaker who passionately supports children and young people through varied challenges ranging from inclusion needs in mainstream school, to educational and vocational issues, emotional issues, relational issues, family issues, sexual issues, and dealing with abuse. She has partnered with several NGOs working in impoverished areas across Nigeria to provide support (counselling and training) for young people, teachers and school management.</p>
							<p>
			She is a sought-after facilitator of professional development for educators across Nigeria using both face-to-face and online platforms. She facilitates professional development courses, seminars and workshops for COBIS (Council of British International Schools), AISEN (Association of International School Educators of Nigeria), APEN (Association of Private Educators in Nigeria), and CCE (Corona College of Education). As a firm believer in on-going professional development, she has participated in courses run by the prestigious Harvard Graduate School of Education.  
			She is a published author and has a blog where she shares inspired messages centred on building the lives of young people and adults alike. She is married with young adult children. 

						</p>
					</div>
					
					</div>
				</div>
			</div>


				<div className="modal" tabindex="-1" role="dialog" id="tosin">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" style={{fontWeight: "700"}}>
                        <img src="/static/assets/tosin.png" width="30px;"/> Mrs. Tosin Babalola</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<p>Mrs. ’Tosin Babalola is a trained Special needs professional with a strong passion for assisting and empowering parents by partnering with them and other professionals to work directly with hundreds of children that may be considered to have special needs and learning disorders with the aim of ensuring that each child succeeds and reaches their full potential. </p>
					<p>
						Having initially studied Industrial Relations and Personnel Management as a first degree from the prestigious University of Lagos, she has since found her passion and purpose in the world of special needs. In order to gain the skills required Mrs. ‘Tosin Babalola embarked on gaining a second degree in Special Educational Needs (Inclusive & Psychological Perspectives) at the University of Roehampton, London, UK. She has since completing her Masters, continued to gain many badges along the way. Some include being a Certified Autism Specialist (IBCCES), a Positive Behavioral Specialist, an early childhood Developmental Assessor as well as being a ‘Specific Learning Disability’ specialist. ‘Ms Tee’ she is fondly called by her students is known for working with the seemingly most complex SEN cases and providing clarity, direction and hope where all seemed lost. She is a sought-after Special needs assessor and facilitator for Educators across the globe, helping teachers and school owners understand how to differentiate learning as well as create a truly inclusive classNameroom where all learners can thrive. She continues to improve herself by attending several overseas training and courses including “A Developmental Approach to Maximizing Language and Literary Skills'' from the Harvard Graduate School of Education where she built her competence in helping children develop robust language skills by essentially engaging in deliberate conversations. She has also gained Diploma in Dyslexia and Child Psychology from The Blackford Centre, Marylebone, London UK.
			She is a registered member of the British Psychological Society U.K and is currently completing her Doctorate in Educational Psychology.

					</p>
					<p>
						Mrs. Tosin Babalola is armed with adequate knowledge not only to detect possible red flags in a child’s holistic development but also to provide the intervention strategies needed to bridge whatever gaps have occurred due to the red flags. She is an advocate of the inclusion of every child in a mainstream school as well as early intervention believing that the earlier children receive the support they need, the more successful the outcomes are. In her own words, “There is no work that is more fulfilling than seeing a child blossom despite the challenges they may face”.
			Mrs. Tosin Babalola is married with two handsome boys and devotes her service to God through the Children’s Ministry in her church. She enjoys praying and spending quality time with her family.

					</p>
					</div>
					
					</div>
				</div>
	</div>


\
        
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" integrity="sha512-3n19xznO0ubPpSwYCRRBgHh63DrV+bdZfHK52b1esvId4GsfwStQNPJFjeQos2h3JwCmZl0/LgLxSKMAI55hgw==" crossorigin="anonymous"></script>
		
        </div>
)}