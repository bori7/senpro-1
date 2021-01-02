import React ,{useEffect, useState,useContext, useCallback, useRef}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import { createGradedASNT } from "../store/actions/results";
import {MyContext} from '../store/context/myContext';
import {ResContext} from '../store/context/resultContext';
import * as auth from "../store/actions/auth";
import {createResult}from "../store/actions/assignments";
import { getChilds} from "../store/actions/assignments";

export const  Academics= (props) => {

    const node = useRef();
    const todosPerPage = 1;
    const [ activePage, setCurrentPage ] = useState( 1 );
    const {state, dispatch} = useContext(MyContext)
    const {resstate, resdispatch} = useContext(ResContext)
    
    const [initia, setInitia] = useState({});

  
    useEffect(() => {
            auth.authCheckState(dispatch, props)

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

const todos = [
    <div>
        <div className="col-md-10" >
        <br/>
        <br/>
        <h4 className="form-title"style={{fontSize: '25px'}}>
        SECTION 1</h4>
        </div>

        <div key={1} className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">1.	Does your child reverse letter order in words
        (e.g. saw/was) or reverse letters like b and d?	</p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option1" id="option1" value = 'yes' autoComplete="off" required  /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option1" id="option1" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>
        <div key={2} className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">2.	Does your child leave out letters when they spell? </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option2" id="option2" value = 'yes' autoComplete="off" required  /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option2" id="option2" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>
        <div key={3} className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">3.	Does your child spell poorly and inconsistently 
        (e.g., the same word is spelt differently in other places within the same piece of writing)? </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option3" id="option3" value = 'yes' autoComplete="off" required   /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option3" id="option3" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>
        <div key={4} className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">4.	Does your child have problems matching letters to their sounds 
        (and poor grasp of the concept of phonics?) </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option4" id="option4" value = 'yes' autoComplete="off" required  /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option4" id="option4" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>

    </div>,
    <div>
               
        <div className="col-md-10" >
        <br/>
        <br/>
        <h4 className="form-title"style={{fontSize: '25px'}}>
        SECTION 2</h4>
        </div>

        <div key={5} className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">5.	Does your child confuse similar-looking letters (like b, p, d, q) when reading?  </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option5" id="option5" value = 'yes' autoComplete="off" required  /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option5" id="option5" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>

        <div key={6} className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">6.	Does your child confuse similar-looking words (e.g., beard/bread) </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option6" id="option6" value = 'yes' autoComplete="off" required  /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option6" id="option6" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>

        <div key={7} className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">7.	Does your child have difficulties understanding what is read?  </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option7" id="option7" value = 'yes' autoComplete="off" required  /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option7" id="option7" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>
        <div key={8} className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">8.	Does your child read slowly for their age?  </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option8" id="option8" value = 'yes' autoComplete="off" required  /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option8" id="option8" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>
        <div key={9} className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">9.	Does your child substitute or leave out words while reading?  </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option9" id="option9" value = 'yes' autoComplete="off" required  /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option9" id="option9" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>

        <div key={10} className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">10.	Does your child dislike and avoid reading or read reluctantly?  </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option10" id="option10" value = 'yes' autoComplete="off" required  /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option10" id="option10" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>

        <div key={11} className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">11.	Does your child find it difficult 
        to remember new words when they learn?   </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option11" id="option11" value = 'yes' autoComplete="off" required  /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option11" id="option11" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>


    </div>,
    <div>
        <div className="col-md-10" >
        <br/>
        <br/>
        <h4 className="form-title"style={{fontSize: '25px'}}>
        SECTION 3</h4>
        </div>

        <div key={12} className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">12.	Does your child dislike and
        avoid writing down ideas and copying off the board? </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option12" id="option12" value = 'yes' autoComplete="off" required  /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option12" id="option12" value = 'no' autoComplete="off"required /> No
        </label>
        </div>
        </div>
        </div>
        <div key={13} className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">13.	Is your child’s writing messy and 
        incomplete, with many errors? </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option13" id="option13" value = 'yes' autoComplete="off"  required /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option13" id="option13" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>
        <div key={14} className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">14.	Does your child have uneven spacing between letters and words, 
        and have trouble staying ‘on the line’ when writing? </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option14" id="option14" value = 'yes' autoComplete="off"  required /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option14" id="option14" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>

        <div key={15} className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">15.	Does your child copy inaccurately
        (e.g., confuses similar-looking letters and numbers)? </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option15" id="option15" value = 'yes' autoComplete="off" required  /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option15" id="option15" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>

    </div>,
    <div>
                                
            <div className="col-md-10" >
            <br/>
            <br/>
            <h4 className="form-title"style={{fontSize: '25px'}}>
            SECTION 4 </h4>
            </div>

            <div key={16} className="row questions">
            <div className="col-md-9 question-box">
            <p className="question">16.	Does your child confuse
            numbers like 27 and 72, 6 and 9, 16 and 91?   </p>
            </div>
            <div className="col-md-3">
            <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
            <label className="custom-choice btn btn-secondary ">
            <input type="radio" name="option16" id="option16" value = 'yes' autoComplete="off" required  /> Yes
            </label>

            <label className="custom-choice btn btn-secondary">
            <input type="radio" name="option16" id="option16" value = 'no' autoComplete="off" required /> No
            </label>
            </div>
            </div>
            </div>


            <div key={17} className="row questions">
            <div className="col-md-9 question-box">
            <p className="question">17.	Does your child have difficulty 
            recognizing numbers and struggle with counting? </p>
            </div>
            <div className="col-md-3">
            <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
            <label className="custom-choice btn btn-secondary ">
            <input type="radio" name="option17" id="option17" value = 'yes' autoComplete="off" required   /> Yes
            </label>

            <label className="custom-choice btn btn-secondary">
            <input type="radio" name="option17" id="option17" value = 'no' autoComplete="off" required /> No
            </label>
            </div>
            </div>
            </div>


            <div key={18} className="row questions">
            <div className="col-md-9 question-box">
            <p className="question">18.	Does your child have trouble learning multiplication 
            tables (facts), formulae, and mathematical rules?   </p>
            </div>
            <div className="col-md-3">
            <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
            <label className="custom-choice btn btn-secondary ">
            <input type="radio" name="option18" id="option18" value = 'yes' autoComplete="off" required  /> Yes
            </label>

            <label className="custom-choice btn btn-secondary">
            <input type="radio" name="option18" id="option18" value = 'no' autoComplete="off" required /> No
            </label>
            </div>
            </div>
            </div>


            <div key={19} className="row questions">
            <div className="col-md-9 question-box">
            <p className="question">19.	Does your child struggle with adding,
            subtracting, multiplying, and/or dividing?  </p>
            </div>
            <div className="col-md-3">
            <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
            <label className="custom-choice btn btn-secondary ">
            <input type="radio" name="option19" id="option19" value = 'yes' autoComplete="off" required  /> Yes
            </label>

            <label className="custom-choice btn btn-secondary">
            <input type="radio" name="option19" id="option19" value = 'no' autoComplete="off" required /> No
            </label>
            </div>
            </div>
            </div>
 
            <div key={20} className="row questions">
            <div className="col-md-9 question-box">
            <p className="question">20.	Does your child have difficulties with remembering the 
            sequence and steps to a math problem? </p>
            </div>
            <div className="col-md-3">
            <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
            <label className="custom-choice btn btn-secondary ">
            <input type="radio" name="option20" id="option20" value = 'yes' autoComplete="off" required  /> Yes
            </label>

            <label className="custom-choice btn btn-secondary">
            <input type="radio" name="option20" id="option20" value = 'no' autoComplete="off" required /> No
            </label>
            </div>
            </div>
            </div>
    </div>,
     
    ]

    var initial=  {}
    const exp = []
    const tip = []
    const tit = []

    const handleSubmit = e => {
    e.preventDefault();
 initial = initia
        var c
        for (c of e.target.elements){
        if(c.checked){initial[c.name]=c.value}
        }
        setInitia(initial)
        console.log(initia)
        console.log(initial)
        if(activePage!==todos.length){
        console.log( `active page was ${activePage }` );
        setCurrentPage( activePage+1 )
        console.log( `active page is ${activePage+1 }` );

        }else{

                if([initial["option1"],initial["option2"],initial["option3"],initial["option4"]].filter(x=>x==='yes').length>=2){
                tit.push('Your child may have challenges with spelling as a result of deficits in phonological awareness, auditory processing, or visual perception. ')
                exp.push('These may also affect reading. Consult with our highly skilled educational psychologists. Click here to book an appointment.')
                tip.push('Avoid trying to teach spelling the conventional way. Use other senses when spelling like tracing in the sand or molding letters.') 
                }
                if (initial["option5"] === 'yes' || initial["option6"] === 'yes'){
                tit.push('Your child may have challenges with visual perception and difficulty processing the order of letters (language processing).')
                exp.push('Consult with our highly skilled educational psychologists. ')
                tip.push('Do not stop reading. Read to and with your child every day. Read interest-based audiobooks and even graphic novels. Print words on colored paper and read with a regular ruler or with colored reading rulers.')
                }

                if (initial["option7"] === 'yes' || initial["option8"] === 'yes' ||
                initial["option9"] === 'yes'|| initial["option10"] === 'yes'){
                tit.push('Your child may have challenges with processing the order of letters and words. ')
                exp.push('There might be deficits in language processing skills and comprehension (fluid reasoning, crystallized intelligence, and memory). Consult with our highly skilled educational psychologists. ')
                tip.push('Read interest-based books and even graphic novels at the child’s reading level. Print words on colored paper and read with a regular ruler or with colored reading rulers. Engage in interpretive reading. (You can find an explanation on how to do this here.)')
                }

                if (initial["option11"] === 'yes' ){
                tit.push('Your child may have challenges with phonological memory. ')
                exp.push(' There might be deficits in language processing skills and memory. Consult with our highly skilled educational psychologists.')
                tip.push('Use colored flashcards to help learn high-frequency words. You may also play memory word games and use mnemonics to learn words. ')
                }

                if (initial["option12"] === 'yes' || initial["option13"] === 'yes'||initial["option14"] === 'yes'
                ||initial["option15"] === 'yes'){
                tit.push('Your child may have challenges with fine motor and visual-spatial skills. ')
                exp.push('Consult with our highly skilled Occupational therapists and educational psychologists. ')
                tip.push('Have your child practice transferring marbles (and increasingly smaller items) from one container to another, using simple tools like tweezers, chopsticks or small tongs, to improve finger dexterity. You may also gradually increase the distance between the containers for transfer.  Help with organization using organizers and toolboxes. It might also be useful to get pencil grips for your child. ')
                }

                if([initial["option16"],initial["option17"],initial["option18"],initial["option19"],initial["option20"]].filter(x=>x==='yes').length>=2){
                tit.push('Your child may have difficulties with mathematical skills and a poor appreciation of number sense.')
                exp.push('They may also have deficits in memory, retrieval and/or crystallized intelligence. Consult our highly skilled Educational Psychologists. ')
                tip.push('Use board games like monopoly and other games like dominoes to teach math concepts. Also, use manipulatives in teaching at home. Use mnemonics to help children remember the steps for solving multistep problems. Use dotted lines to model numbers and then have the child trace the numbers.')
                }

            const asnt = {
                title: tit,
                explain: exp,
                tip: tip,
                child: resstate.child.id
            }
            createResult(state.token, asnt,resdispatch)
            createGradedASNT(asnt,resdispatch);
            console.log(asnt)
            getChilds(state.userId.pk,state.token,resdispatch)
        // setInitia(initia)
        props.history.push('/childresult/');}
  }

  const handleReturn = e => {
    e.preventDefault();
 
    props.history.goBack();
  }

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
                            <h1>Let Us Help</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>

        <div className="jumbotron bg-white">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <h4 className="form-title">SEN Professionals  – Academic Questionnaire</h4>
                </div>
                <h5 className="form-title"style={{fontSize: '19px', color: 'black'}}>
                Please complete all four sections of the following questionnaire. 
                It is important to complete this questionnaire based on your child’s current
                 abilities (abilities demonstrated consistently and independently). 
                 Your responses will guide any interventions and recommendations. 
                 Answer all questions by selecting ‘yes’ or ‘no’. 
                </h5>
                

                    <div className="col-md-10" style={{marginTop: '30px'}}>
                    <form onSubmit={handleSubmit}>
  
                     {todos[activePage-1]}
                    
                            <br/>  <br/>
                        <div className="col-12 step-control">
                            <button onClick = {handleReturn} className="btn btn-secondary deepblue curvebtn my-2 my-sm-0 colorf">Change Age
                            </button>
                            {activePage==todos.length?<button type="submit" value="Submit" className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Submit
                            </button>:<button type="submit" value="Submit" className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Next
                            </button>}
                            
                    </div>
                    </form>
                    </div>
            
                
            </div>

        </div>
        </div>
        
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" integrity="sha512-3n19xznO0ubPpSwYCRRBgHh63DrV+bdZfHK52b1esvId4GsfwStQNPJFjeQos2h3JwCmZl0/LgLxSKMAI55hgw==" crossorigin="anonymous"></script>
		
        </div>
)}