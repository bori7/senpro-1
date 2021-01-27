import React ,{useEffect, useState, useContext}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import { createGradedASNT } from "../store/actions/results";
import {MyContext} from '../store/context/myContext';
import {ResContext} from '../store/context/resultContext';
import {createResult}from "../store/actions/assignments";
import { getChilds} from "../store/actions/assignments";
import { updateChild} from "../store/actions/assignments";
import * as auth from "../store/actions/auth";

export const  Speech= (props) => {

    const [ activePage, setCurrentPage ] = useState( 1 );

    const {resstate, resdispatch} = useContext(ResContext)
    const {state, dispatch} = useContext(MyContext)
    const [initia, setInitia] = useState({});

  
    useEffect(() => {
        auth.authCheckState(dispatch, props)
        if (state.token === undefined || state.token === null) {
                props.history.push('/login/');
                }
                if (resstate.child.id === undefined || resstate.child.id === null) {
                props.history.push('/initial/');
                }
 
    }, [state.token]);

    const question_list = [ {
        title:'SECTION 1 - ARTICULATION',
        questions:[
           '1.	Does your child mispronounce or leave off sounds in words?	',
           '2.	Can strangers understand your child 90% of the time? ',
           
        ]
        },
        {
       title:'SECTION 2 - RECEPTIVE SPEECH AND VOICE',
       questions:[
           '3.	Does your child comprehend age/ grade appropriate vocabulary? ',
           '4.	Does your child have difficulty following spoken directions? ',
           '5.	Does your child find processing verbal information difficult and require frequent repetition of instructions? ',
           '6.	Does your child understand better in one-on-one situations, than in a group? ',
           "7.	Is your child’s voice unusually loud or soft? ",
           '8.	Does your child have an unusual quality to his/her voice (for example, hoarseness, nasal, breathy)? ',
       ]
       },
       {
       title:'SECTION 3 - SPEECH RATE/FLUENCY AND PRAGMATIC LANGUAGE',
       questions:[
           '9.	Does your child stutter frequently when speaking? ',
           "10.	Does your child use ‘um’, ‘uh’, ‘you know’, ‘a’, excessively when speaking? ",
           '11.	Does your child use age-appropriate conversational skills (for example, staying on topic, initiating conversation)? ',
           "12.	Does your child’s language skills or speech skills have a significantly adverse effect on his/her academics? ",
       ]
       },
       {
        title:'SECTION 4 - EXPRESSIVE LANGUAGE',
        questions:[
            '13.	Does your child use made-up words which are almost inappropriate, (for example, ‘window worker man’)? ',
            '14.	Does your child have problems sequencing events and ideas appropriately?',
            '15.	Does your child find it difficult to retell a simple story? ',
           
        ]
        },
]

const todos = [ ]
var i = 1
question_list.forEach( x => {

    const todo =
        <div>
                <div className="col-md-10" >
                    <br/>
                    <br/>
                    <h4 className="form-title"style={{fontSize: '25px'}}>{x.title} </h4>
                </div>
                {x.questions.map(y =>

                    <div key={x.questions.indexOf(y)+i} className="row questions">
                    <div className="col-md-9 question-box">
                        <p  className="question">{y}</p>
                        </div>
                        <div className="col-md-3">
                        <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                        <label className="custom-choice btn btn-secondary ">
                        <input type="radio" name= {`option${x.questions.indexOf(y)+i}`} id={`option${x.questions.indexOf(y)+i}`} value = 'yes' autoComplete="off" required  /> Yes
                        </label>  
    
                        <label className="custom-choice btn btn-secondary">
                        <input type="radio" name={`option${x.questions.indexOf(y)+i}`} id={`option${x.questions.indexOf(y)+i}`} value = 'no' autoComplete="off" required /> No
                        </label>
                        </div>
                        </div>
                    </div>
                )}  
                        
        </div>
    
    todos.push(todo)
    i += x.questions.length
    
})




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
    
    if(activePage!==todos.length){
   
    setCurrentPage( activePage+1 )

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;  

    }else{
 
        if (initial["option1"] === 'yes' && initial["option2"] === 'no'){
        tit.push('This may indicate a broader Speech Sound Disorder.')
        exp.push('Kindly consult one of our highly skilled audiologists and speech pathologists for further guidance.')
        tip.push('Encourage your child to speak slowly. Take note of the specific sounds, words that might have been mispronounced or missing. Focus on helping your child pronounce those sounds or words repeatedly, in a fun way.  Do not rush your child but let your child know you’re listening, and that he/she has all the time in the world to talk to you.')
        }

        if (initial["option3"] === 'no'){
        tit.push('This may be an indication of a vocabulary gap. ')
        exp.push('Kindly consult one of our highly skilled speech pathologists for further guidance.')
        tip.push('Read regularly with your child and make conversation a priority whilst ensuring that you do not use ‘dumbed down words’ when speaking. Play word games and teach your child how to use the thesaurus.')
        }

        if (initial["option4"] === 'yes' ||initial["option5"] === 'yes'|| initial["option6"] === 'yes'||
        initial["option7"] === 'yes'|| initial["option8"] === 'yes'){
        tit.push('This may indicate auditory or information processing challenges as well as a broader speech and language challenge. ')
        exp.push(' Kindly consult our highly skilled audiologists and speech pathologists for further guidance. ')
        tip.push('Avoid verbiage; give concise and direct instructions to your child. Wherever possible, use visuals to communicate. Frequently ask your child to repeat instructions given before he/she carries them out. ')
        }

        if (initial["option9"] === 'yes' ||initial["option10"] === 'yes'|| initial["option11"] === 'yes'||
        initial["option12"] === 'yes'){
        tit.push('This may indicate broader speech, language, and interaction challenges. ')
        exp.push('Kindly consult one of our highly skilled speech pathologists for further guidance. ')
        tip.push('Model good communication behaviors to your child through role-playing.  Write scripts and word cards to support speech.')
        }

        if (initial["option13"] === 'yes' ||initial["option14"] === 'yes'|| initial["option15"] === 'yes'){
        tit.push('This may indicate a broader speech, language, and sequencing challenge. ')
        exp.push('Kindly consult one of our highly skilled speech pathologists for further guidance. ')
        tip.push('Start by explaining the concept of first and last using enjoyable familiar activities. Gradually increase the level of difficulty by including the steps in between, ensuring you use visuals.')
        }
     
    const asnt = {
        title: tit,
        explain: exp,
        tip: tip,
        child: resstate.child.id
    }
    
    const chilre = resstate.child
    chilre['testres'] = true
   
    updateChild(chilre.id,chilre,state.token, resdispatch)

    createResult(state.token, asnt,resdispatch)
    createGradedASNT(asnt,resdispatch);
   
    getChilds(state.userId.pk,state.token,resdispatch)
    props.history.push('/childresult/');}
  }

  const handleReturn = e => {
    e.preventDefault();
 
    props.history.goBack();
  }

  return(
        <div >
     
        <div className="jumbotron forum-header mini_header bgimg" style={{backgroundImage: {mini_header_2}}}>
            <MenuLayout/>
            <br/>
            <br/>
            <br/><br/>
            <br/>
            <br/>
            <br/><br/>
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
                    <h4 className="form-title">SEN Professionals Questionnaire – SPEECH AND LANGUAGE</h4>
                </div>
                <h5 className="form-title"style={{fontSize: '19px', color: 'black'}}>
                Please complete all four sections of the following questionnaire.
                 It is important to complete this questionnaire based on your 
                 child’s current abilities (abilities demonstrated consistently and independently). 
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
        
        
        </div>
)}






















// const todos = [
//     <div>
//         <div className="col-md-10" >
//         <br/>
//         <br/>
//         <h4 className="form-title"style={{fontSize: '25px'}}>
//         SECTION 1 - ARTICULATION</h4>
//         </div>

//         <div key={1} className="row questions">
//         <div className="col-md-9 question-box">
//         <p className="question">1.	Does your child mispronounce or leave off sounds in words?	</p>
//         </div>
//         <div className="col-md-3">
//         <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//         <label className="custom-choice btn btn-secondary ">
//         <input type="radio" name="option1" id="option1" value = 'yes' autoComplete="off" required /> Yes
//         </label>

//         <label className="custom-choice btn btn-secondary">
//         <input type="radio" name="option1" id="option1" value = 'no' autoComplete="off" required /> No
//         </label>
//         </div>
//         </div>
//         </div>
//         <div key={2} className="row questions">
//         <div className="col-md-9 question-box">
//         <p className="question">2.	Can strangers understand your child 90% of the time?</p>
//         </div>
//         <div className="col-md-3">
//         <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//         <label className="custom-choice btn btn-secondary ">
//         <input type="radio" name="option2" id="option2" value = 'yes' autoComplete="off" required  /> Yes
//         </label>

//         <label className="custom-choice btn btn-secondary">
//         <input type="radio" name="option2" id="option2" value = 'no' autoComplete="off" required /> No
//         </label>
//         </div>
//         </div>
//         </div>

//     </div>,
//     <div>
//         <div className="col-md-10" >
//         <br/>
//         <br/>
//         <h4 className="form-title"style={{fontSize: '25px'}}>
//         SECTION 2 - RECEPTIVE SPEECH AND VOICE</h4>
//         </div>

//         <div key={3} className="row questions">
//         <div className="col-md-9 question-box">
//         <p className="question">3.	Does your child comprehend age/ grade appropriate vocabulary?</p>
//         </div>
//         <div className="col-md-3">
//         <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//         <label className="custom-choice btn btn-secondary ">
//         <input type="radio" name="option3" id="option3" value = 'yes' autoComplete="off" required  /> Yes
//         </label>

//         <label className="custom-choice btn btn-secondary">
//         <input type="radio" name="option3" id="option3" value = 'no' autoComplete="off" required /> No
//         </label>
//         </div>
//         </div>
//         </div>
//         <div key={4} className="row questions">
//         <div className="col-md-9 question-box">
//         <p className="question">4.	Does your child have difficulty following spoken directions?</p>
//         </div>
//         <div className="col-md-3">
//         <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//         <label className="custom-choice btn btn-secondary ">
//         <input type="radio" name="option4" id="option4" value = 'yes' autoComplete="off"  required /> Yes
//         </label>

//         <label className="custom-choice btn btn-secondary">
//         <input type="radio" name="option4" id="option4" value = 'no' autoComplete="off" required  /> No
//         </label>
//         </div>
//         </div>
//         </div>


//         <div key={5} className="row questions">
//         <div className="col-md-9 question-box">
//         <p className="question">5.	Does your child find processing verbal information difficult 
//         and require frequent repetition of instructions?</p>
//         </div>
//         <div className="col-md-3">
//         <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//         <label className="custom-choice btn btn-secondary ">
//         <input type="radio" name="option5" id="option5" value = 'yes' autoComplete="off"  required /> Yes
//         </label>

//         <label className="custom-choice btn btn-secondary">
//         <input type="radio" name="option5" id="option5" value = 'no' autoComplete="off" required /> No
//         </label>
//         </div>
//         </div>
//         </div>

//         <div key={6} className="row questions">
//         <div className="col-md-9 question-box">
//         <p className="question">6.	Does your child understand 
//         better in one-on-one situations, than in a group? </p>
//         </div>
//         <div className="col-md-3">
//         <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//         <label className="custom-choice btn btn-secondary ">
//         <input type="radio" name="option6" id="option6" value = 'yes' autoComplete="off"  required /> Yes
//         </label>

//         <label className="custom-choice btn btn-secondary">
//         <input type="radio" name="option6" id="option6" value = 'no' autoComplete="off" required /> No
//         </label>
//         </div>
//         </div>
//         </div>

//         <div key={7} className="row questions">
//         <div className="col-md-9 question-box">
//         <p className="question">7.	Is your child’s voice unusually loud or soft? </p>
//         </div>
//         <div className="col-md-3">
//         <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//         <label className="custom-choice btn btn-secondary ">
//         <input type="radio" name="option7" id="option7" value = 'yes' autoComplete="off" required  /> Yes
//         </label>

//         <label className="custom-choice btn btn-secondary">
//         <input type="radio" name="option7" id="option7" value = 'no' autoComplete="off" required /> No
//         </label>
//         </div>
//         </div>
//         </div>
//         <div key={8} className="row questions">
//         <div className="col-md-9 question-box">
//         <p className="question">8.	Does your child have an unusual quality to his/her voice
//         (for example, hoarseness, nasal, breathy)?  </p>
//         </div>
//         <div className="col-md-3">
//         <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//         <label className="custom-choice btn btn-secondary ">
//         <input type="radio" name="option8" id="option8" value = 'yes' autoComplete="off"  required /> Yes
//         </label>

//         <label className="custom-choice btn btn-secondary">
//         <input type="radio" name="option8" id="option8" value = 'no' autoComplete="off" required /> No
//         </label>
//         </div>
//         </div>
//         </div>

//     </div>,
//     <div>                            
//         <div className="col-md-10" >
//         <br/>
//         <br/>
//         <h4 className="form-title"style={{fontSize: '25px'}}>
//         SECTION 3 - SPEECH RATE/FLUENCY AND PRAGMATIC LANGUAGE</h4>
//         </div>
//         <div key={9} className="row questions">
//         <div className="col-md-9 question-box">
//         <p className="question">9.	Does your child stutter frequently when speaking? </p>
//         </div>
//         <div className="col-md-3">
//         <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//         <label className="custom-choice btn btn-secondary ">
//         <input type="radio" name="option9" id="option9" value = 'yes' autoComplete="off" required  /> Yes
//         </label>

//         <label className="custom-choice btn btn-secondary">
//         <input type="radio" name="option9" id="option9" value = 'no' autoComplete="off" required /> No
//         </label>
//         </div>
//         </div>
//         </div>

//         <div key={10} className="row questions">
//         <div className="col-md-9 question-box">
//         <p className="question">10.	Does your child use ‘um’, 
//         ‘uh’, ‘you know’, ‘a’, excessively when speaking? </p>
//         </div>
//         <div className="col-md-3">
//         <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//         <label className="custom-choice btn btn-secondary ">
//         <input type="radio" name="option10" id="option10" value = 'yes' autoComplete="off"  required /> Yes
//         </label>

//         <label className="custom-choice btn btn-secondary">
//         <input type="radio" name="option10" id="option10" value = 'no' autoComplete="off" required /> No
//         </label>
//         </div>
//         </div>
//         </div>

//         <div key={11} className="row questions">
//         <div className="col-md-9 question-box">
//         <p className="question">11.	Does your child use age-appropriate conversational skills
//         (for example, staying on topic, initiating conversation)?  </p>
//         </div>
//         <div className="col-md-3">
//         <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//         <label className="custom-choice btn btn-secondary ">
//         <input type="radio" name="option11" id="option11" value = 'yes' autoComplete="off" required  /> Yes
//         </label>

//         <label className="custom-choice btn btn-secondary">
//         <input type="radio" name="option11" id="option11" value = 'no' autoComplete="off" required /> No
//         </label>
//         </div>
//         </div>
//         </div>

//         <div key={12} className="row questions">
//         <div className="col-md-9 question-box">
//         <p className="question">12.	Does your child’s language skills 
//         or speech skills have a significantly adverse effect on 
//         his/her academics? </p>
//         </div>
//         <div className="col-md-3">
//         <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//         <label className="custom-choice btn btn-secondary ">
//         <input type="radio" name="option12" id="option12" value = 'yes' autoComplete="off" required  /> Yes
//         </label>

//         <label className="custom-choice btn btn-secondary">
//         <input type="radio" name="option12" id="option12" value = 'no' autoComplete="off"  required /> No
//         </label>
//         </div>
//         </div>
//         </div>

//     </div>,
//     <div>
//         <div className="col-md-10" >
//         <br/>
//         <br/>
//         <h4 className="form-title"style={{fontSize: '25px'}}>
//         SECTION 4 - EXPRESSIVE LANGUAGE</h4>
//         </div>

//         <div key={13} className="row questions">
//         <div className="col-md-9 question-box">
//         <p className="question">13.	Does your child use made-up words which are almost
//         inappropriate, (for example, ‘window worker man’)?</p>
//         </div>
//         <div className="col-md-3">
//         <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//         <label className="custom-choice btn btn-secondary ">
//         <input type="radio" name="option13" id="option13" value = 'yes' autoComplete="off"  required /> Yes
//         </label>

//         <label className="custom-choice btn btn-secondary">
//         <input type="radio" name="option13" id="option13" value = 'no' autoComplete="off" required  /> No
//         </label>
//         </div>
//         </div>
//         </div>
//         <div key={14} className="row questions">
//         <div className="col-md-9 question-box">
//         <p className="question">14.	Does your child have problems 
//         sequencing events and ideas appropriately?</p>
//         </div>
//         <div className="col-md-3">
//         <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//         <label className="custom-choice btn btn-secondary ">
//         <input type="radio" name="option14" id="option14" value = 'yes' autoComplete="off"  required /> Yes
//         </label>

//         <label className="custom-choice btn btn-secondary">
//         <input type="radio" name="option14" id="option14" value = 'no' autoComplete="off" required /> No
//         </label>
//         </div>
//         </div>
//         </div>

//         <div key={15} className="row questions">
//         <div className="col-md-9 question-box">
//         <p className="question">15.	Does your child find it difficult
//         to retell a simple story? </p>
//         </div>
//         <div className="col-md-3">
//         <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//         <label className="custom-choice btn btn-secondary ">
//         <input type="radio" name="option15" id="option15" value = 'yes' autoComplete="off"  required /> Yes
//         </label>

//         <label className="custom-choice btn btn-secondary">
//         <input type="radio" name="option15" id="option15" value = 'no' autoComplete="off" required  /> No
//         </label>
//         </div>
//         </div>
//         </div>
//     </div>,
// ]
