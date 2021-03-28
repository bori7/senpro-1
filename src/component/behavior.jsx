import React ,{useEffect, useState, useContext}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import { createGradedASNT } from "../store/actions/results";
import {MyContext} from '../store/context/myContext';
import {ResContext} from '../store/context/resultContext';
import * as auth from "../store/actions/auth";
import {createResult}from "../store/actions/assignments";
import { getChilds} from "../store/actions/assignments";
import { updateChild} from "../store/actions/assignments";


export const  Behavior= (props) => {


  
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
           '1.	Does your child participate in social activities? ',
           '2.	Does your child have friends (who are peers)? ',
           '3.	Does your child withdraw from or avoid communicating with peer and/ or adult contact?',
           '4.	Does your child almost always choose solitary activities? ',
           '5.	Are there constant conflicts and tensions in almost all of your child’s social relationships? ',
        ]
        },
        {
       title:'SECTION 2',
       questions:[
           '6.	Does your child appear not to have control of his/her behavior? ',
           '7.	Is your child overly aggressive? ',
           '8.	Does your child have severe mood swings (for example: depression to happiness to rage/anger) for no apparent reason? ',
           '9.	Does your child have a sense of reality that is distorted without regard to self-interest? ',
           '10.	Does the student display unexplained ‘rage reactions’ or explosive, unpredictable behavior?  ', 
           '11.	Is your child impulsively defiant? ',
           '12.	Does your child engage in extreme self-destructive behavior? ',

       ]
       },
       {
       title:'SECTION 3',
       questions:[
           '13.	Does your child have regular temper tantrums? ',
           '14.	Does your child often have a blank expression on their face little response to what is happening around them?',
           '15.	Does your child over-respond to situations or stimulations?',
       ]
       },
       {
        title:'SECTION 4',
        questions:[
            '16.	Does your child laugh or smile for no apparent reason?  ',
            '17.	Does your child cry or seem sad for no apparent reason? ',
            '18.	Does your child’s moods change very quickly, sometimes for no apparent reason?',
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

        if ((initial["option1"] === 'no' || initial["option2"] === 'no') &&(
        initial["option3"] === 'yes'|| initial["option4"]=== 'yes'
        || initial["option5"]=== 'yes')){
        tit.push('Your child may have challenges with making and keeping relationships with peers or adults. ')
        exp.push('Consult with our highly skilled educational psychologists. ')
        tip.push('Teach social skills by modeling appropriate interactions and responses. You may also use social stories.')
        }

        if([initial["option6"],initial["option7"],initial["option8"],initial["option9"],initial["option10"]
        ,initial["option11"],initial["option12"]].filter(x=>x==='yes').length>=3){
        tit.push('Your child may be exhibiting extreme behaviors. ')
        exp.push('Consult with our highly skilled behavioral analysts or therapists. ')
        tip.push('Avoid giving ultimatums. Rather give options based on pre-discussed ideas of rewards and consequences.')
        }

        if([initial["option13"],initial["option14"],initial["option17"],initial["option15"],initial["option16"]].filter(x=>x==='yes').length>=3){
        tit.push('Your child may have difficulty responding appropriately to situations. ')
        exp.push('Consult with our highly skilled psychologists and behavioral analysts. ')
        tip.push('Contact our highly skilled educational psychologists and behavioral analysts as soon as possible.')
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
                    <h4 className="form-title">SEN Professionals Questionnaire – EMOTIONS AND BEHAVIOR</h4>
                </div>
                <h5 className="form-title"style={{fontSize: '19px', color: 'black'}}>
                Please complete all three sections of the following questionnaire. 
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