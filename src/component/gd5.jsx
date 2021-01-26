import React ,{useEffect, useState, useContext,}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import { createGradedASNT } from "../store/actions/results";
import {MyContext} from '../store/context/myContext';
import {ResContext} from '../store/context/resultContext';
import {createResult}from "../store/actions/assignments";
import { getChilds} from "../store/actions/assignments";
import { updateChild} from "../store/actions/assignments";
import * as auth from "../store/actions/auth";

export const  GenDev5= (props) => {

    
   
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
           '1.	Is your child able to follow three-step instructions? ',
           '2.	Does your child use 4-to-5-word sentences in communicating?  ',
           '3.	Is your child able to predict the next step when a sequence of events is presented? ',
           '4.	Does your child know the meaning of through, away, towards, and from? ',
           '5.	Is your child able to understand and discuss the plot of a story being read to him/her?  ',
           '6.	Does your child repeat words or phrases in response to questions or statements?  ',
           
        ]
        },
        {
       title:'SECTION 2',
       questions:[
           '7.	Does your child catch a small ball with both hands?  ',
           '8.	Is your child able to move in tune with the beat or rhythm of music? ',
           '9.	Can your child walk on tiptoes for 15 feet?  ',
           '10.	Can your child skip using alternating feet?  ',
           '11.	Is your child able to walk across a balance beam without losing his /her balance? ',  
       ]
       },
       {
       title:'SECTION 3',
       questions:[
           '12.	Is your child able to manage buttons and zippers? ',
           '13.	Is your child a messy eater?  ',
           '14.	Is your child able to copy shapes like a cross, square, triangle, and circle?  ',
           '15.	Can your child color neatly within the lines of a given picture? ',
       ]
       },
       {
        title:'SECTION 4',
        questions:[
            '16. Can your child draw a person with at least eight parts in the diagram? ',
            '17. Is your child able to differentiate between real and unreal (imagined) items, objects, or situations? (For example, can your child tell the difference between a real animal and a stuffed animal?)  ',
            '18. Can a child complete a 20-to-50-piece puzzle?  ',
            '19. Is your child able to memorize and follow three complex instructions when they are given simultaneously? ',
            '20. Can your child recall five random numbers dictated to him/her? ',

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

            if (initial["option1"] === 'no' && initial["option2"] === 'no' &&
            initial["option5"] === 'no'){
            tit.push('Your child may have challenges with auditory processing, deficiency in vocabulary bank, slow language processing, and/or encoding.')
            exp.push('These may be symptomatic of broader deficiencies resulting in communication disorders. Consult one of our highly skilled speech pathologists for further guidance. ')
            tip.push(' Start your child with one-step instructions and gradually increase them. Reading aloud with your child every day will be beneficial. ')
            }

            if (initial["option3"] === 'no' && initial["option4"] === 'no' ){
            tit.push('Your child may be displaying symptoms of visual discrimination and an inability to sequence basic logical sequences of events in everyday living.')
            exp.push('These may be symptomatic of broader deficiencies in communication and executive functioning. Consult one of our highly skilled speech pathologists for further guidance.')
            tip.push('Playing spot the difference games as well as talking through regular sequencing activities like ‘making breakfast’ with your child will be beneficial.')
            }

            if (initial["option6"] === 'no'){
            tit.push('Your child may be displaying symptoms of echolalia which may be symptomatic of broader deficiencies in expressive language.')
            exp.push(' Consult one of our highly skilled speech pathologists for further guidance.')
            tip.push('Book an appointment with a speech pathologist as soon as you can')
            }
            if (initial["option7"] === 'no'){
            tit.push('Your child may have challenges with hand-eye coordination.')
            exp.push('This may be symptomatic of ocular-motor deficiencies. Consult one of our highly skilled physiotherapists to schedule an appointment.')
            tip.push('Have your child thread through large beads (use large beads to prevent choking hazards).')
            }

            if (initial["option8"] === 'no'){
            tit.push('Your child may have challenges with auditory discrimination. ')
            exp.push('This may be symptomatic of deficiencies in motor planning. Consult one of our highly skilled occupational therapists to schedule an appointment. ')
            tip.push('Start with simple sounds and let your child match the sounds to words. Teach your child to tap their fingers on their body to follow a beat or rhythm; this provides tactile reinforcement.')
            }

            if (initial["option9"] === 'no' || initial["option10"] === 'no'|| initial["option11"] === 'no'){
            tit.push('Your child may have challenges with balance and coordination. ')
            exp.push('This may be symptomatic of gravitational insecurity. Consult one of our highly skilled occupational therapists to schedule an appointment.')
            tip.push('Have your child practice walking on a beam with you, initially providing support, and gradually fading the support.')
            }

            if (initial["option12"] === 'no'){
            tit.push('Your child may have challenges with visual discrimination, pincer grip, bilateral coordination, or finger dexterity. ')
            exp.push(' Consult one of our highly skilled occupational therapists to schedule an appointment. ')
            tip.push('Look for garments that have larger buttons, zippers and garment closures, and practice using the closures in front of the child before the child is allowed to do the same. Try ‘backward chaining’: this is when you model the steps in the process and your child does the last step, then the last 2 steps, and so forth, until they have mastered all the steps.')
            }    
            if (initial["option16"] === 'no'){
            tit.push('Your child may have challenges with interacting with the world socially.')
            exp.push(' Consult one of our highly skilled educational psychologists and behavioral analysts to schedule an appointment.')
            tip.push('Observe your child as he/she plays, then join your child by imitating your child using your own toy. Finally, show your child a new pretend play action and then, give him/her a chance to copy the pretend play.')
            }          
            if (initial["option13"] === 'no'){
            tit.push('Your child may have challenges with visual discrimination, pincer grip, bilateral coordination, or finger dexterity. ')
            exp.push(' Consult one of our highly skilled occupational therapists to schedule an appointment.')
            tip.push('Consult an occupational therapist at your earliest convenience.')
            }    
            if (initial["option14"] === 'no'){
            tit.push('Your child may have challenges with visual discrimination, pincer grip, bilateral coordination, or finger dexterity.')
            exp.push('Consult one of our highly skilled occupational therapists to schedule an appointment.')
            tip.push('Start with joining closely spaced dotted lines on a straight line and in different shapes; then gradually migrate to widely spaced dotted lines.')
            }          

            if (initial["option15"] === 'no' ){
            tit.push('Your child may have challenges with visual discrimination, pincer grip, bilateral coordination, or finger dexterity. ')
            exp.push('Consult one of our highly skilled occupational therapists to schedule an appointment.')
            tip.push('Have your child knead playdough into different shapes including faces, sticking on googly eyes. Get pencil grips to help train the pincer muscle.  Use tweezers to transfer solids like pebbles from one container to the other.')
            }  

            if (initial["option16"] === 'no' ){
            tit.push('Your child may have difficulty with nonverbal intelligence as well as showing symptoms of emotional or behavioral disorders. ')
            exp.push('This may impact cognition thus affecting learning and overall confidence. Consult one of our highly skilled educational psychologists to schedule an appointment. ')
            tip.push('Book an appointment with an educational psychologist as soon as you can.')
            }      

            if (initial["option17"] === 'no' ){
            tit.push('Your child may have difficulty with perception. ')
            exp.push('This may impact cognition thus affecting learning and overall confidence. Consult one of our highly skilled educational psychologists to schedule an appointment.')
            tip.push('Book an appointment with an educational psychologist as soon as you can.')
            }      
            if (initial["option18"] === 'no' ){
            tit.push('Your child may have difficulty focusing on given tasks for a specified time due to a short attention span. ')
            exp.push('This may impact cognition thus affecting learning and overall confidence. Consult one of our highly skilled educational psychologists to schedule an appointment.')
            tip.push('Choose simple interest-based puzzles and gradually increase the complexity of the puzzles. High-end Montessori influenced practical activities will also be beneficial.')
            }     

            if (initial["option19"] === 'no' || initial["option20"] === 'no'){
            tit.push('Your child may have challenges with memory and recall. ')
            exp.push(' These symptoms may impact cognition thus affecting learning and overall confidence. Consult one of our highly skilled educational psychologists to schedule an appointment.')
            tip.push('Start with repeating two number patterns and simple instructions; then gradually increasing to more numbers as well as multi-step instructions.')
            } 
                            
                const asnt = {
                    title: tit,
                    explain: exp,
                    tip: tip,
                    child: resstate.child.id
                }

                const chilre = resstate.child
                chilre['testres'] = true
                // console.log(chilre)
                updateChild(chilre.id,chilre,state.token, resdispatch)
        
                createResult(state.token, asnt,resdispatch)
                createGradedASNT(asnt,resdispatch);
                // console.log(asnt)
                getChilds(state.userId.pk,state.token,resdispatch)
                            
        // setInitia(initia)
        props.history.push('/childresult/');}
  }

  const handleReturn = e => {
    e.preventDefault();
 
    props.history.goBack();
  }

  return(
        <div >
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
                    <h4 className="form-title">SEN Professionals Questionnaire – Age 5</h4>
                </div>
                <h5 className="form-title"style={{fontSize: '19px', color: 'black'}}>
                Please complete all four sections of the following questionnaire. 
                It is important to complete this questionnaire based on your child’s 
                current abilities (abilities demonstrated consistently and independently).
                Your responses will guide any interventions and recommendations.
                 Answer all questions by selecting ‘yes’ or ‘no’. 
                </h5>
                

                    <div className="col-md-10" style={{marginTop: '30px'}}>
                    <form onSubmit={handleSubmit}>
                   
                    {todos[activePage-1]}

                        <br/><br/>
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