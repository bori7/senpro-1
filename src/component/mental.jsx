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

export const  Mental= (props) => {


    
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
           '1.	Does your child worry when he/she thinks he/she has done poorly at something? ',
           '2.	Does your child feel scared when he/she has to take a test? ',
           '3.	Does your child feel worried when he/she thinks someone is angry with him/her? ',
           '4.	Does your child worry that he/she will do badly at his/her school work?',
           '5 .	Does your child have trouble going to school or crowded places because he/she feels nervous or afraid? (Separation Anxiety)',
        ]
        },
        {
       title:'SECTION 2',
       questions:[
           '6.	Does your child worry excessively about things? ',
           '7.	Does your child worry that something bad will happen to someone in the family?  ',
           '8.	Does your child worry that something bad will happen to him/her? ',
           '9.	Does your child think about death? ',
       ]
       },
       {
       title:'SECTION 3',
       questions:[
           '10.	When your child has a problem, does he/she complain that he/she has a funny feeling in the stomach?  ',
           "11.	Does your child suddenly feel as if he/she can't breathe or start to tremble or shake when there is no reason for this?",
           '12.	Does your child all of a sudden feel really scared for no apparent reason? ',
           "13.	Does your child complain that his/her heart suddenly starts to beat too quickly for no apparent reason? ",
           
       ]
       },
       {
        title:'SECTION 4',
        questions:[
            '14.	Does your child feel sad or empty or worthless?',
            '15.	Does your child complain that nothing is much fun anymore? ',
            '16.	Does your child have trouble sleeping? ',
            "17.	Does your child have problems with his/her appetite? ",

        ]
        },
        {
        title:'SECTION 5',
        questions:[
            '18.	Does your child keep checking that he/she has done things right (like the switch is off, or the door is locked)?  ',
            '19.	Does your child have to do some things over and over again (like washing my hands, cleaning or putting things in a certain order)?  ',
            '20.	Does your child have to do some things in just the right way or think special thoughts to stop bad things from happening? '
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
                       
            if([initial["option1"],initial["option2"],initial["option3"],initial["option4"],initial["option5"]].filter(x=>x==='yes').length>=3){
                tit.push('Your child may have excessive fear of being judged or anxiety towards social interactions. ')
                exp.push('Consult with our highly skilled educational psychologists and licensed clinical psychologists. ')
                tip.push('As much as possible, focus on and celebrate positive progress in all areas. Also, make an appointment with our licensed specialists as soon as possible. ')
             }

             if([initial["option10"],initial["option11"],initial["option12"],initial["option13"]].filter(x=>x==='yes').length>=2){
                tit.push('Your child may have issues with extreme fear and anxiety.  ')
                exp.push('Consult with our highly skilled educational psychologists and licensed clinical psychologists. ')
                 tip.push('Pay attention to your child’s emotions and modify expectations for your child. Also, make an appointment with our licensed specialists as soon as possible. ')
                 }

                 if([initial["option6"],initial["option7"],initial["option8"],initial["option9"]].filter(x=>x==='yes').length>=2){
                    tit.push('Your child may have severe anxiety.  ')
                     exp.push('Consult with our highly skilled educational psychologists and licensed clinical psychologists. ')
                     tip.push('Make an appointment with our licensed specialists as soon as possible. ')
                     }

        if (initial["option14"] === 'yes' || initial["option15"] === 'yes' ||
        initial["option16"] === 'yes'|| initial["option17"]=== 'yes'){
        tit.push('Consult with our highly skilled educational psychologists and clinical licensed psychologists. ')
        exp.push(' ')
        tip.push('Make an appointment with our highly skilled educational psychologists and licensed clinical psychologists as soon as possible.')
    }

    if (initial["option18"] === 'yes' || initial["option19"] === 'yes' ||
    initial["option20"] === 'yes'){
    tit.push('Consult with our highly skilled educational psychologists and licensed clinical psychologists. ')
    exp.push('')
    tip.push('Make an appointment with our highly skilled educational psychologists and licensed clinical psychologists as soon as possible. ')
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

createResult(state.token, asnt,resdispatch).then(
    res => {props.history.push('/childresult/')}
)
createGradedASNT(asnt,resdispatch);
// console.log(asnt)
getChilds(state.userId.pk,state.token,resdispatch)
        // console.log(initial)
        // setInitia(initia)
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
            <br/>
            <br/>
            <br/><br/>
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
                    <h4 className="form-title">SEN Professionals Questionnaire – Mental Health </h4>
                </div>
                <h5 className="form-title"style={{fontSize: '19px', color: 'black'}}>
                Please complete all five sections of the following questionnaire. 
                It is important to complete this questionnaire based on your child’s 
                current abilities (abilities demonstrated consistently and independently). 
                Your responses will guide any interventions and recommendations. 
                Answer all questions by selecting ‘yes’ or ‘no’. 
                </h5>
                

                    <div className="col-md-10" style={{marginTop: '30px'}}>
                    <form onSubmit={handleSubmit}>
                        {todos[activePage-1]}

                        <br/> <br/>
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