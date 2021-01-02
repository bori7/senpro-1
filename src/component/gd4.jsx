import React ,{useEffect, useState,useContext, useCallback, useRef}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import { createGradedASNT } from "../store/actions/results";
import {MyContext} from '../store/context/myContext';
import {ResContext} from '../store/context/resultContext';
import {createResult}from "../store/actions/assignments";
import { getChilds} from "../store/actions/assignments";


export const  GenDev4= (props) => {

    const todosPerPage = 1;
    const [ activePage, setCurrentPage ] = useState( 1 );

    const node = useRef();
    const {state, dispatch} = useContext(MyContext)
    const {resstate, resdispatch} = useContext(ResContext)
    const [initia, setInitia] = useState({});
    
  
    useEffect(() => {
        // if (state.token === undefined || state.token === null) {
        //     props.history.push('/login/');
        //  }
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
        <p className="question">1.	Does the child correctly answer questions that begin with ‘who, when, what, why, how’? </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option1" id="option1" value = 'yes' autoComplete="off" required   /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option1" id="option1" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>
        <div key={2}  className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">2.	Is your child able to repeat the following words after you articulately? 
        Pencil, Tape, Dog, Hat, Nose, King, Rag, Yellow, Five, Sand, 
        kite, Mummy, Water, Bat.  </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option2" id="option2" value = 'yes' autoComplete="off" required   /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option2" id="option2" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>
        <div key={3}  className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">3.	Can a stranger understand your child’s speech 
        75-90% of the time? </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option3" id="option3" value = 'yes' autoComplete="off"  required /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option3" id="option3" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>
        <div key={4}  className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">4.	When shown an object, is your child able to say two things to describe that object?   </p>
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

        <div key={5}  className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">5.	Does your child drool and have difficulty speaking?   </p>
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

        <div key={6}  className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">6.	When shown a picture without words, 
        is your child able to state the actions in the picture? </p>
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

    </div>,
    <div>
        <div className="col-md-10" >
            <br/>
            <br/>
                <h4 className="form-title"style={{fontSize: '25px'}}>
                SECTION 2 </h4>
        </div>

        <div key={7} className="row questions">
            <div className="col-md-9 question-box">
                <p className="question">7.	Is your child able to dress up and undress independently? </p>
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
        <div key={8}  className="row questions">
            <div className="col-md-9 question-box">
                <p className="question">8.	Is your child able to string small-sized beads?   </p>
            </div>
            <div className="col-md-3">
                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                    <label className="custom-choice btn btn-secondary ">
                    <input type="radio" name="option8" id="option8" value = 'yes' autoComplete="off"  required /> Yes
                    </label>
                    
                    <label className="custom-choice btn btn-secondary">
                    <input type="radio" name="option8" id="option8" value = 'no' autoComplete="off" required /> No
                    </label>
                </div>
            </div>
        </div>
        <div key={9}  className="row questions">
            <div className="col-md-9 question-box">
                <p className="question">9.	Is your child able to kick, throw and catch a ball?  </p>
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

        <div key={10}  className="row questions">
            <div className="col-md-9 question-box">
                <p className="question">10.	Is your child able to stand on one foot for five seconds?  </p>
            </div>
            <div className="col-md-3">
                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                    <label className="custom-choice btn btn-secondary ">
                    <input type="radio" name="option10" id="option10" value = 'yes' autoComplete="off"  required /> Yes
                    </label>
                    
                    <label className="custom-choice btn btn-secondary">
                    <input type="radio" name="option10" id="option10" value = 'no' autoComplete="off" required /> No
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
        SECTION 3 </h4>
        </div>
        <div key={11} className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">11.	Is your child able to sort objects by shape and color?   </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option11" id="option11" value = 'yes' autoComplete="off"required /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option11" id="option11" value = 'no' autoComplete="off" required  /> No
        </label>
        </div>
        </div>
        </div>
        <div key={12}  className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">12.	Is your child able to complete a 20-to-30-piece puzzle? </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option12" id="option12" value = 'yes' autoComplete="off" required  /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option12" id="option12" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>
        <div key={13}  className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">13.	Is your child able to match common objects to pictures of such objects?  </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option13" id="option13" value = 'yes' autoComplete="off" required   /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option13" id="option13" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>
        <div key={14} className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">14.	Does your child remember parts of a story told?    </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option14" id="option14" value = 'yes' autoComplete="off" required   /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option14" id="option14" value = 'no' autoComplete="off" required /> No
        </label>
        </div>
        </div>
        </div>

        <div key={15}  className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">15.	Is your child able to compare objects of the same and of different sizes?   </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option15" id="option15" value = 'yes' autoComplete="off"  required /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option15" id="option15" value = 'no' autoComplete="off" required  /> No
        </label>
        </div>
        </div>
        </div>


        <div key={16}  className="row questions">
        <div className="col-md-9 question-box">
        <p className="question">16.	Is the child able to listen attentively to a story 
        being read to him/her for six minutes?  </p>
        </div>
        <div className="col-md-3">
        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
        <label className="custom-choice btn btn-secondary ">
        <input type="radio" name="option16" id="option16" value = 'yes' autoComplete="off"  required /> Yes
        </label>

        <label className="custom-choice btn btn-secondary">
        <input type="radio" name="option16" id="option16" value = 'no' autoComplete="off" required /> No
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

            if (initial["option1"] === 'no' ){
            tit.push('Your child may have challenges with deficiency in vocabulary bank, slow language processing, and encoding.')
                exp.push(' These may be symptomatic of broader deficiencies resulting in communication disorders. Consult one of our highly skilled speech pathologists for further guidance. ')
                tip.push('RStart your child with one-step instructions and gradually increase them. Reading aloud with your child every day will be beneficial. ')
                }

            if (initial["option2"] === 'no' && initial["option3"] === 'no'){
            tit.push('Your child may have difficulty with articulation. ')
            exp.push('Make a list of challenging target sounds and go over these one at a time with your child. Look in the mirror with your child while enunciating and making these sounds.')
            }

            if (initial["option4"] === 'no' && initial["option6"] === 'no'){
            tit.push('Your child may have challenges with lexical retrieval and word association.')
            exp.push(' This is often associated with a deficiency in vocabulary bank and may be symptomatic of broader deficiencies. Consult one of our highly skilled speech pathologists for further guidance.')
                tip.push('Read with your child regularly and talk about words and their meanings. Play word games based on word classification, word association, and ‘words that do not belong’ games.')
                }

            if (initial["option5"] === 'yes' ){
            tit.push('Consult one of our highly skilled speech pathologists and occupational therapists at your earliest convenience. ')
            exp.push('Consult one of our highly skilled speech pathologists and occupational therapists at your earliest convenience. ')
            tip.push('Consult one of our highly skilled speech pathologists and occupational therapists at your earliest convenience. ')
            }

            if (initial["option7"] === 'no'){
            tit.push('Your child may have challenges with bilateral coordination. ')
            exp.push('This may be symptomatic of motor deficiencies. Consult one of our highly skilled occupational therapists to schedule an appointment. ')
                tip.push('Model the task to your child by sitting behind him/her with your hand over the his/her hand. Practice putting things through slots, like a piggy bank. Also, practice lacing cards and stringing beads.')
            }    
            if (initial["option8"] === 'no' && initial["option9"]){
            tit.push('Your child may have challenges with hand-eye coordination. ')
            exp.push(' Model the task to your child by sitting behind him/her with your hand over the his/her hand. Practice putting things through slots, like a piggy bank. Also, practice lacing cards and stringing beads.This may be symptomatic of ocular-motor deficiencies. Consult one of our highly skilled physiotherapists to schedule an appointment.')
            tip.push('Have your child thread through large beads (use large beads to prevent choking hazards).')
            }                  
            if (initial["option10"] === 'no' ){
            tit.push('Your child may have challenges with balance and coordination.  ')
            exp.push('This may be symptomatic of gravitational insecurity. Consult one of our highly skilled occupational therapists to schedule an appointment. ')
            tip.push('Have your child practice walking on a beam with you, initially providing support, and gradually fading the support.')}  

            if (initial["option11"] === 'no'&& initial["option13"] === 'no'&& initial["option15"] === 'no' ){
            tit.push(' Your child may have challenges with visual discrimination')
            exp.push(' Consult one of our highly skilled occupational therapists to schedule an appointment. ')
                tip.push('Play an array of games including large puzzles, sorting, and sequencing games.')
            }      

            if (initial["option12"] === 'no' && initial["option16"] === 'no'  ){
            tit.push('Your child may have difficulty focusing on given tasks for a specified time due to a short attention span. ')
                exp.push(' This may impact cognition thus affecting learning and overall confidence. Consult one of our highly skilled educational psychologists to schedule an appointment. ')
                tip.push('Reduce screen time and choose simple interest-based puzzles. Gradually increase the complexity of the puzzles. High-end Montessori influenced practical activities will also be beneficial. ')
            }   

            if (initial["option14"] === 'no' ){
                tit.push('Your child may have challenges with memory. ')
                exp.push('This may impact cognition thus affecting learning and overall confidence. Consult one of our highly skilled educational psychologists to schedule an appointment. ')
                tip.push('Play memory games. Start with sentences and ask your child to repeat them; gradually move to poems and very short stories. ')
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
                    <h4 className="form-title">SEN Professionals Questionnaire – Age 4</h4>
                </div>
                <h5 className="form-title"style={{fontSize: '19px', color: 'black'}}>
                Please complete all three sections of the following questionnaire. 
                It is important to complete this questionnaire based on your child’s current 
                abilities (abilities demonstrated consistently and independently). 
                Your responses will guide any interventions and recommendations. 
                Answer all questions by selecting ‘yes’ or ‘no’. 
                </h5>
                
            <div className="col-md-10" style={{marginTop: '30px'}}>
                <form onSubmit={handleSubmit}>
                         {todos[activePage-1]}
                       
                        <br/> <br/>
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