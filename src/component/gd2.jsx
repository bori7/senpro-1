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

export const GenDev2= (props) => {

    
    const [ activePage, setCurrentPage ] = useState( 1 );
    const {state, dispatch} = useContext(MyContext)
    const {resstate, resdispatch} = useContext(ResContext)
    const [initia, setInitia] = useState({});

    
  
    useEffect(() => {
   
        auth.authCheckState(dispatch, props);
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
           '1.	Can your child use four-word sentences? ',
           '2.	Can your child point to familiar things or pictures when they are named? ',
           '3.	Can your child name familiar objects, names of parents and close family members? ',
           '4.	Can your child follow simple step instructions? ',
           '5.	Does your child repeat words overheard in a conversation? '
        ]
        },
        {
       title:'SECTION 2',
       questions:[
           '6.	Can your child walk up and down a flight of stairs unaided, while holding on to a rail? ',
           '7.	Can your child throw a ball? ',
           '8.	Can your child leaf through a thick book, page by page?  ',
           '9.	Can your child open and close a door? ',
           '10. Can your child kick a ball without losing his/her balance?  ',
           '11. Can your child build objects using four blocks? ',
           '12. Can your child scribble at will using chunky pencils or crayons? ',
           '13. Can your child thread at least 4 to 6 big beads, using a strong, thick shoelace? ',
           '14. Can your child eat with a fork? ',
       ]
       },
       {
       title:'SECTION 3',
       questions:[
           '15. Can your child sort objects using colors, shapes, and sizes? ',
           '16. Can your child play simple imaginative plays? ',
           '17. Can your child find objects that you hid together after 5 minutes? ',
           '18. Can your child complete a 3-to-4-piece puzzle? ',
           '19. Can your child memorize simple rhymes and learn a simple song?  ',
           '20.	Can your child follow simple two-step instructions such as ‘pick your books and put them on the table’? ',
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
        

        if (initial["option1"] === 'no' || initial["option2"] === 'no' ||
        initial["option3"] === 'no'|| initial["option4"]=== 'no'
        || initial["option5"]=== 'no'){
        tit.push('Your child may have challenges with lexical retrieval, vocabulary, and/or word association.')
        exp.push(' This is often associated with a deficiency in vocabulary bank and may be symptomatic of broader deficiencies. Consult one of our highly skilled speech pathologists for further guidance. ')
        tip.push('Read with your child regularly and talk about words and their meanings. Play word games based on word classification, word association, and ‘words that do not belong’ games. It might be useful to also meet an audiologist to rule out any hearing impairment.')
        }

        if (initial["option6"] === 'no' && initial["option7"] === 'no' &&
        initial["option8"] === 'no'){
        tit.push('Your child may have challenges with balance and/or coordination. ')
        exp.push('This may be symptomatic of gravitational insecurity. Consult one of our highly skilled occupational therapists to schedule an appointment.')
        tip.push('Have your child practice walking on a beam with you, initially providing support, and gradually fading the support.')
        }

        if (initial["option8"] === 'no' && initial["option9"] === 'no' &&
        initial["option12"] === 'no'|| initial["option14"]=== 'no'){
        tit.push('Your child may have challenges with bilateral coordination and/or finger dexterity.')
        exp.push(' Consult one of our highly skilled occupational therapists to schedule an appointment. ')
        tip.push('Have your child thread through two large beads and gradually increase the number of beads (use large beads to prevent choking hazards and to reduce the level of difficulty).')
        }

        if (initial["option11"] === 'no' && initial["option13"] === 'no'){
            tit.push('Your child may have challenges with hand-eye coordination. ')
            exp.push('This may be symptomatic of ocular-motor deficiencies. Consult one of our highly skilled physiotherapists to schedule an appointment. Click here to book an appointment.')
            tip.push('Have your child thread through two large beads and gradually increase the number of beads (use large beads to prevent choking hazards and to reduce the level of difficulty).')
        }

        if (initial["option15"] === 'no'){
        tit.push('Your child may have difficulty with visual discrimination.')
        exp.push(' Consult one of our highly skilled occupational therapists to schedule an appointment. ')
        tip.push('Play an array of games including large puzzles, ‘Go Fishing’, sorting, and sequencing games.')
        }    
        if (initial["option16"] === 'no'){
        tit.push('Your child may have challenges with interacting with the world socially.')
        exp.push(' Consult one of our highly skilled educational psychologists and behavioral analysts to schedule an appointment.')
        tip.push('Observe your child as he/she plays, then join your child by imitating your child using your own toy. Finally, show your child a new pretend play action and then, give him/her a chance to copy the pretend play.')
        }                  
        if (initial["option17"] === 'no' && initial["option19"] === 'no'){
        tit.push('Your child may have challenges with memory. ')
        exp.push('This may impact cognition thus affecting learning and overall confidence. Consult one of our highly skilled educational psychologists to schedule an appointment. ')
        tip.push('Play screen-free memory games like: ‘Simon says’, storyboard creation and sequence, pengoloo, and Tongue twisters.  Practice the ‘We do, I do, You do’ technique, wherein you do it first, then ask your child to help and finally, ask your child to do it on their own.  Ask your child to repeat words back to you, gradually move to phrases and then short sentences.')
        }  
        if (initial["option18"] === 'no' ){
        tit.push('Your child may have difficulty focusing on given tasks for a specified time due to a short attention span. ')
        exp.push(' This may impact cognition thus affecting learning and overall confidence. Consult one of our highly skilled educational psychologists to schedule an appointment.')
        tip.push('Reduce screen time and choose simple interest-based puzzles. Gradually increase the complexity of the puzzle. High-end Montessori influenced practical life activities will also be beneficial.')
        }      

        if (initial["option20"] === 'no' ){
        tit.push('Your child may have challenges with auditory processing, memory and/or recall.')
        exp.push('  These symptoms may impact cognition thus affecting learning and overall confidence. Consult one of our highly skilled educational psychologists to schedule an appointment.')
        tip.push('Start with breaking down simple instructions then gradually increase the level of complexity of the instructions. It might be useful to also meet an audiologist to rule out any hearing impairment.')
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

        createResult(state.token, asnt,resdispatch).then(
            res => {props.history.push('/childresult/')}
        )
        createGradedASNT(asnt,resdispatch);
        
    
        getChilds(state.userId.pk,state.token,resdispatch)
       
        }
        
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
                    <h4 className="form-title">SEN Professionals Questionnaire – Age 2</h4>
                </div>
                <h5 className="form-title"style={{fontSize: '19px', color: 'black'}}>
                Please complete all three sections of the following questionnaire. 
                It is important to complete this questionnaire based on your child’s current abilities 
                (abilities demonstrated consistently and independently). 
                Your responses will guide any interventions and recommendations. 
                Answer all questions by selecting ‘yes’ or ‘no’. 
                </h5>

                <div className="col-md-10" style={{marginTop: '30px'}}>
                    <form onSubmit={handleSubmit}>
                     
                        {todos[activePage-1]}
 
                        <br/><br/>
                           
                            <br/><br/>
                        <div className="col-12 step-control">
                               
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