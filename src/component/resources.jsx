import React from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';

export const Resources= () => {


  return(
        <div>
     
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