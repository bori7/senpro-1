import React ,{useEffect, useState,useContext,}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import { createGradedASNT } from "../store/actions/results";
import {MyContext} from '../store/context/myContext';
import {ResContext} from '../store/context/resultContext';
import {createResult}from "../store/actions/assignments";
import { getChilds} from "../store/actions/assignments";
import { updateChild} from "../store/actions/assignments";
import * as auth from "../store/actions/auth";

export const  GenDev4= (props) => {

    const [ activePage, setCurrentPage ] = useState( 1 );

    
    const {state, dispatch} = useContext(MyContext)
    const {resstate, resdispatch} = useContext(ResContext)
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
        title:'SECTION 1',
        questions:[
           '1.	Does the child correctly answer questions that begin with ‘who, when, what, why, how’? ',
           '2.	Is your child able to repeat the following words after you articulately? (Pencil, Tape, Dog, Hat, Nose, King, Rag, Yellow, Five, Sand, kite, Mummy, Water, Bat.) ',
           '3.	Can a stranger understand your child’s speech 75-90% of the time?',
           '4.	When shown an object, is your child able to say two things to describe that object? ',
           '5.	Does your child drool and have difficulty speaking? ',
           '6.	When shown a picture without words, is your child able to state the actions in the picture? ',
           
        ]
        },
        {
       title:'SECTION 2',
       questions:[
           '7.	Is your child able to dress up and undress independently? ',
           '8.	Is your child able to string small-sized beads? ',
           '9.	Is your child able to kick, throw and catch a ball? ',
           '10.	Is your child able to stand on one foot for five seconds? ',
           
       ]
       },
       {
       title:'SECTION 3',
       questions:[
           '11.	Is your child able to sort objects by shape and color? ',
           '12.	Is your child able to complete a 20-to-30-piece puzzle? ',
           '13.	Is your child able to match common objects to pictures of such objects?  ',
           '14.	Does your child remember parts of a story told?  ',
           '15.	Is your child able to compare objects of the same and of different sizes? ',
           '16.	Is the child able to listen attentively to a story being read to him/her for six minutes? ',
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
            exp.push(' ')
            tip.push('')
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
            const chilre = resstate.child
            chilre['testres'] = true
            
            updateChild(chilre.id,chilre,state.token, resdispatch)
    
            
            createGradedASNT(asnt,resdispatch);
         
            getChilds(state.userId.pk,state.token,resdispatch)
            createResult(state.token, asnt,resdispatch).then(
                res => {props.history.push('/childresult/')}
            )
            
            
            
            
            
            ;}


            
  }

  const handleReturn = e => {
    e.preventDefault();
 
    props.history.goBack();
  }

  return(
        <div >
      
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
        
      
        </div>
)}