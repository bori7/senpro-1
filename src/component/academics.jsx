import React ,{useEffect, useState,useContext}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import { createGradedASNT } from "../store/actions/results";
import {MyContext} from '../store/context/myContext';
import {ResContext} from '../store/context/resultContext';
import * as auth from "../store/actions/auth";
import {createResult}from "../store/actions/assignments";
import { getChilds} from "../store/actions/assignments";
import { updateChild} from "../store/actions/assignments";


export const  Academics= (props) => {

   
    
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
           '1.	Does your child reverse letter order in words (e.g. saw/was) or reverse letters like b and d?',
           '2.	Does your child leave out letters when they spell? ',
           '3.	Does your child spell poorly and inconsistently (e.g., the same word is spelt differently in other places within the same piece of writing)?',
           '4.	Does your child have problems matching letters to their sounds (and poor grasp of the concept of phonics?) ',
        ]
        },
        {
       title:'SECTION 2',
       questions:[
           '5.	Does your child confuse similar-looking letters (like b, p, d, q) when reading? ',
           '6.	Does your child confuse similar-looking words (e.g., beard/bread)',
           '7.	Does your child have difficulties understanding what is read? ',
           '8.	Does your child read slowly for their age? ',
           '9.	Does your child substitute or leave out words while reading? ', 
           '10.	Does your child dislike and avoid reading or read reluctantly? ',
           '11.	Does your child find it difficult to remember new words when they learn? ',

       ]
       },
       {
       title:'SECTION 3',
       questions:[
           '12.	Does your child dislike and avoid writing down ideas and copying off the board?',
           '13.	Is your child’s writing messy and incomplete, with many errors? ',
           '14.	Does your child have uneven spacing between letters and words, and have trouble staying ‘on the line’ when writing? ',
           '15.	Does your child copy inaccurately (e.g., confuses similar-looking letters and numbers)? ',
       ]
       },
       {
        title:'SECTION 4',
        questions:[
            '16. Does your child confuse numbers like 27 and 72, 6 and 9, 16 and 91?  ',
            '17. Does your child have difficulty recognizing numbers and struggle with counting? ',
            '18. Does your child have trouble learning multiplication tables (facts), formulae, and mathematical rules? ',
            '19. Does your child struggle with adding, subtracting, multiplying, and/or dividing?',
            '20.	Does your child have difficulties with remembering the sequence and steps to a math problem? ',

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
            
            const chilre = resstate.child
            chilre['testres'] = true
         
            updateChild(chilre.id,chilre,state.token, resdispatch)
    
            createResult(state.token, asnt,resdispatch).then(
                res => {props.history.push('/childresult/')}
            )
            createGradedASNT(asnt,resdispatch);
      
            getChilds(state.userId.pk,state.token,resdispatch)
       
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
        
        
        </div>
)}