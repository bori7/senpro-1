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

export const Resources= (props) => {

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
								<h1>Resources</h1>
                                <p style={{color: '#fff'}}>Here are some resources to help in different areas of child development</p>
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
                <div class="accordion" id="accordionExample">
                <div class="card core">
                        <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link core-body " type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="true" aria-controls="collapseOne">
                            SPEECH & LANGUAGE
                            </button>
                        </h2>
                        </div>

                        <div id="collapse6" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body ">
                            <ul>
                                <li><a href="https://mommyspeechtherapy.com/?page_id=55">https://mommyspeechtherapy.com/?page_id=55</a></li>
                                <li><a href="https://www.readingrockets.org/audience/parents">https://www.readingrockets.org/audience/parents</a></li>
                                <li><a href="http://www.ldonline.org/">http://www.ldonline.org/</a></li>
                                <li><a href="https://www.asha.org/public/speech/development/suggestions/">https://www.asha.org/public/speech/development/suggestions/</a></li>
                                <li><a href="https://senresourcesblog.com/">https://senresourcesblog.com/</a></li>
           
                            </ul> 
                        </div>
                        
                        </div>
                    </div>
                    <div class="card core">
                        <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link core-body " type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="true" aria-controls="collapseOne">
                            AUTISM
                            </button>
                        </h2>
                        </div>

                        <div id="collapse5" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body ">
                            <ul>
                                <li><a href="https://www.pictoselector.eu/">https://www.pictoselector.eu/ (for creating visual schedules)</a></li>
                                <li><a href="http://theautismhelper.com/wp-content/uploads/2012/08/clothes-labels.pdf">http://theautismhelper.com/wp-content/uploads/2012/08/clothes-labels.pdf (helps with organisation)</a></li>
                                <li><a href="http://pdictionary.com/">http://pdictionary.com/</a></li>
 
                            </ul> 
                        </div>
                        
                        </div>
                    </div>
                    <div class="card core">
                        <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link core-body " type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="true" aria-controls="collapseOne">
                            COGNITION
                            </button>
                        </h2>
                        </div>

                        <div id="collapse4" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body ">
                            <ul>
                                <li><a href="https://www.educaplay.com/types-of-activities/memory-games.html">https://www.educaplay.com/types-of-activities/memory-games.html (Memory games)</a></li>
                                <li><a href="https://mrprintables.com/printable-flash-cards.html">https://mrprintables.com/printable-flash-cards.html (printable flash cards)</a></li>
                                <li><a href="https://www.funbrain.com/">https://www.funbrain.com/</a></li>
                                <li><a href="https://ilslearningcorner.com/2017-01-brain-gym-simple-brain-gym-exercises-to-awaken-the-brain-for-learning-readiness/">https://ilslearningcorner.com/2017-01-brain-gym-simple-brain-gym-exercises-to-awaken-the-brain-for-learning-readiness/</a></li>
 
                            </ul> 
                        </div>
                        
                        </div>
                    </div>
                    <div class="card core">
                        <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link core-body " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            SOCIAL INTERACTION(Pragmatic Communication)
                            </button>
                        </h2>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body ">
                            <ul>
                                <li><a href="https://www.autismspeaks.org/templates-personalized-teaching-stories">https://www.autismspeaks.org/templates-personalized-teaching-stories (social stories)</a></li>
                                <li><a href="https://www.abaresources.com/wp-content/uploads/Eye-Contact.pdf">https://www.abaresources.com/wp-content/uploads/Eye-Contact.pdf (social stories)</a></li>
                                <li><a href="https://www.abaresources.com/wp-content/uploads/How-to-Talk-to-My-Friends.pdf">https://www.abaresources.com/wp-content/uploads/How-to-Talk-to-My-Friends.pdf (social stories) </a></li>
                                <li><a href="https://www.abaresources.com/wp-content/uploads/Playing-with-Friends.pdf">https://www.abaresources.com/wp-content/uploads/Playing-with-Friends.pdf (social stories) </a></li>
                                <li><a href="https://happylearners.info/social-stories/">https://happylearners.info/social-stories/ (social stories)</a></li>
                                <li><a href="https://www.abaresources.com/wp-content/uploads/Personal-Space.pdf">https://www.abaresources.com/wp-content/uploads/Personal-Space.pdf (social stories)</a></li>


                            
                            </ul> 
                        </div>
                        
                        </div>
                    </div>

                    <div class="card core">
                        <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link core-body " type="button" data-toggle="collapse" data-target="#gross" aria-expanded="true" aria-controls="collapseOne">
                            GROSS & FINE MOTOR
                            </button>
                        </h2>
                        </div>

                        <div id="gross" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body ">
                            <ul>
                                <li><a href="https://www.growinghandsonkids.com/gross-motor-minute-to-win-it-games-for-kids.html">https://www.growinghandsonkids.com/gross-motor-minute-to-win-it-games-for-kids.html (motor skills)</a></li>
                                <li><a href="https://www.growinghandsonkids.com/fine-motor-minute-to-win-it-games-for-kids.html">https://www.growinghandsonkids.com/fine-motor-minute-to-win-it-games-for-kids.html (motor skills)</a></li>
                                <li><a href="https://www.ot-mom-learning-activities.com/">https://www.ot-mom-learning-activities.com/</a></li>
                                

                            
                            </ul> 
                        </div>
                        
                        </div>
                    </div>

                    <div class="card core">
                        <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link core-body " type="button" data-toggle="collapse" data-target="#mental" aria-expanded="true" aria-controls="collapseOne">
                            MENTAL HEALTH
                            </button>
                        </h2>
                        </div>

                        <div id="mental" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body ">
                            <ul>
                                <li><a href="https://www.growinghandsonkids.com/fine-motor-minute-to-win-it-games-for-kids.html">https://www.growinghandsonkids.com/fine-motor-minute-to-win-it-games-for-kids.html (anxiety)</a></li>
                                

                            
                            </ul> 
                        </div>
                        
                        </div>
                    </div>

                </div>
            </div>
			
			
			
		</div>
		

	</div>

</div>
        </div>
)}