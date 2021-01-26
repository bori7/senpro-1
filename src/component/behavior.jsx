import React ,{useEffect, useState, useContext,useCallback, useRef}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import { createGradedASNT } from "../store/actions/results";
import {MyContext} from '../store/context/myContext';
import {ResContext} from '../store/context/resultContext';
import * as auth from "../store/actions/auth";
import {createResult}from "../store/actions/assignments";
import { getChilds} from "../store/actions/assignments";
import { updateChild} from "../store/actions/assignments";
// import * as auth from "../store/actions/auth";

export const  Behavior= (props) => {

    const node = useRef();
    const todosPerPage = 1;
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

            // node.current.addEventListener('click', (e)=>  {
            // for (const select of node.current.querySelectorAll('.custom-select')) {
            // if (!select.contains(e.target)) {
            // select.classList.remove('open');
            // }
            // }
            // });

            // for (const option of node.current.querySelectorAll(".custom-option")) {
            // option.addEventListener('click', () =>  {
            // if (!option.classList.contains('selected')) {
            // option.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            // option.classList.add('selected');
            // option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent;
            // }
            // })   }

            // for (const dropdown of node.current.querySelectorAll(".custom-select-wrapper")) {
            // dropdown.addEventListener('click', ()=> {
            // dropdown.querySelector('.my-custom-select').classList.toggle('open');
            // })

            // }

            // for (const option of node.current.querySelectorAll(".custom-choice")) {
            // option.addEventListener('click', () =>{
            // if (!option.classList.contains('active')) {
            // if( option.parentNode.querySelector('.custom-choice.active')){
            //     option.parentNode.querySelector('.custom-choice.active').classList.remove('active');}
            //     option.classList.add('active');
            // // option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent; 
            // }
            // })
            // }
    }, [state.token]);

// const scrollFunction = ()=> {
//     if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
//     document.getElementById("scrollnav").style.top = "0";
//     } else {
//     document.getElementById("scrollnav").style.top = "-150px";
//     }
// }

// window.onscroll = ()=>  {scrollFunction()};

const todos = [
        <div>
                
            <div className="col-md-10" >
            <br/>
            <br/>
            <h4 className="form-title"style={{fontSize: '25px'}}>
            SECTION 1 </h4>
            </div>

            <div key={1} className="row questions">
            <div className="col-md-9 question-box">
            <p className="question">1.	Does your child participate in social activities?	</p>
            </div>
            <div className="col-md-3">
            <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
            <label className="custom-choice btn btn-secondary ">
            <input type="radio" name="option1" id="option1" value = 'yes' autoComplete="off" required  /> Yes
            </label>

            <label className="custom-choice btn btn-secondary">
            <input type="radio" name="option1" id="option1" value = 'no' autoComplete="off" required  /> No
            </label>
            </div>
            </div>
            </div>
            <div key={2} className="row questions">
            <div className="col-md-9 question-box">
            <p className="question">2.	Does your child have friends (who are peers)?</p>
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
            <p className="question">3.	Does your child withdraw from
            or avoid communicating with peer and/ or adult contact?</p>
            </div>
            <div className="col-md-3">
            <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
            <label className="custom-choice btn btn-secondary ">
            <input type="radio" name="option3" id="option3" value = 'yes' autoComplete="off" required  /> Yes
            </label>

            <label className="custom-choice btn btn-secondary">
            <input type="radio" name="option3" id="option3" value = 'no' autoComplete="off" required /> No
            </label>
            </div>
            </div>
            </div>
            <div key={4} className="row questions">
            <div className="col-md-9 question-box">
            <p className="question">4.	Does your child almost always choose solitary activities? </p>
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

            <div key={5} className="row questions">
            <div className="col-md-9 question-box">
            <p className="question">5.	Are there constant conflicts and 
            tensions in almost all of your child’s social relationships?   </p>
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

  
        </div>,
        <div>
            <div className="col-md-10" >
            <br/>
            <br/>
            <h4 className="form-title"style={{fontSize: '25px'}}>
            SECTION 2  </h4>
            </div>
            <div key={6} className="row questions">
            <div className="col-md-9 question-box">
            <p className="question">6.	Does your child appear not to have control of his/her behavior?    </p>
            </div>
            <div className="col-md-3">
            <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
            <label className="custom-choice btn btn-secondary ">
            <input type="radio" name="option6" id="option6" value = 'yes' autoComplete="off"  required /> Yes
            </label>

            <label className="custom-choice btn btn-secondary">
            <input type="radio" name="option6" id="option6" value = 'no' autoComplete="off" required /> No
            </label>
            </div>
            </div>
            </div>



            <div key={7} className="row questions">
            <div className="col-md-9 question-box">
            <p className="question">7.	Is your child overly aggressive?  </p>
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
            <p className="question">8.	Does your child have severe mood swings (for example: 
            depression to happiness to rage/anger) for no apparent reason?  </p>
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
            <p className="question">9.	Does your child have a sense of 
            reality that is distorted without regard to self-interest?  </p>
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
            <p className="question">10.	Does the student display unexplained 
            ‘rage reactions’ or explosive, unpredictable behavior?  </p>
            </div>
            <div className="col-md-3">
            <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
            <label className="custom-choice btn btn-secondary ">
            <input type="radio" name="option10" id="option10" value = 'yes' autoComplete="off" required   /> Yes
            </label>

            <label className="custom-choice btn btn-secondary">
            <input type="radio" name="option10" id="option10" value = 'no' autoComplete="off" required /> No
            </label>
            </div>
            </div>
            </div>

            <div key={11} className="row questions">
            <div className="col-md-9 question-box">
            <p className="question">11.	Is your child impulsively defiant?  </p>
            </div>
            <div className="col-md-3">
            <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
            <label className="custom-choice btn btn-secondary ">
            <input type="radio" name="option11" id="option11" value = 'yes' autoComplete="off" required   /> Yes
            </label>

            <label className="custom-choice btn btn-secondary">
            <input type="radio" name="option11" id="option11" value = 'no' autoComplete="off" required /> No
            </label>
            </div>
            </div>
            </div>




            <div key={12} className="row questions">
            <div className="col-md-9 question-box">
            <p className="question">12.	Does your child engage in extreme self-destructive behavior?  </p>
            </div>
            <div className="col-md-3">
            <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
            <label className="custom-choice btn btn-secondary ">
            <input type="radio" name="option12" id="option12" value = 'yes' autoComplete="off" required  /> Yes
            </label>

            <label className="custom-choice btn btn-secondary">
            <input type="radio" name="option12" id="option12" value = 'no' autoComplete="off" required  /> No
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
            SECTION 3  </h4>
            </div>
            <div key={13} className="row questions">
            <div className="col-md-9 question-box">
            <p className="question">13.	Does your child have regular temper tantrums?  </p>
            </div>
            <div className="col-md-3">
            <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
            <label className="custom-choice btn btn-secondary ">
            <input type="radio" name="option13" id="option13" value = 'yes' autoComplete="off" required  /> Yes
            </label>

            <label className="custom-choice btn btn-secondary">
            <input type="radio" name="option13" id="option13" value = 'no' autoComplete="off" required /> No
            </label>
            </div>
            </div>
            </div>
            <div key={14} className="row questions">
            <div className="col-md-9 question-box">
            <p className="question">14.	Does your child often have a blank expression on their face
            – little response to what is happening around them? </p>
            </div>
            <div className="col-md-3">
            <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
            <label className="custom-choice btn btn-secondary ">
            <input type="radio" name="option14" id="option14" value = 'yes' autoComplete="off" required  /> Yes
            </label>

            <label className="custom-choice btn btn-secondary">
            <input type="radio" name="option14" id="option14" value = 'no' autoComplete="off" required /> No
            </label>
            </div>
            </div>
            </div>

            <div key={15} className="row questions">
            <div className="col-md-9 question-box">
            <p className="question">15.	Does your child over-respond to 
            situations or stimulations? </p>
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
            SECTION 4 - COGNITION</h4>
            </div>

            <div key={16} className="row questions">
            <div className="col-md-9 question-box">
            <p className="question">16.	Does your child laugh or smile
            for no apparent reason? </p>
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
            <p className="question">17.	Does your child cry or seem sad for no apparent reason? </p>
            </div>
            <div className="col-md-3">
            <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
            <label className="custom-choice btn btn-secondary ">
            <input type="radio" name="option17" id="option17" value = 'yes' autoComplete="off"  required /> Yes
            </label>

            <label className="custom-choice btn btn-secondary">
            <input type="radio" name="option17" id="option17" value = 'no' autoComplete="off" required /> No
            </label>
            </div>
            </div>
            </div>



            <div key={18} className="row questions">
            <div className="col-md-9 question-box">
            <p className="question">18.	Does your child’s moods change very quickly, sometimes for no apparent reason? </p>
            </div>
            <div className="col-md-3">
            <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
            <label className="custom-choice btn btn-secondary ">
            <input type="radio" name="option18" id="option18" value = 'yes' autoComplete="off"  required /> Yes
            </label>

            <label className="custom-choice btn btn-secondary">
            <input type="radio" name="option18" id="option18" value = 'no' autoComplete="off" required /> No
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
        // console.log(initia)
        // console.log(initial)
        if(activePage!==todos.length){
        // console.log( `active page was ${activePage }` );
        setCurrentPage( activePage+1 )
        // console.log( `active page is ${activePage+1 }` );

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
        
        {/* <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" integrity="sha512-3n19xznO0ubPpSwYCRRBgHh63DrV+bdZfHK52b1esvId4GsfwStQNPJFjeQos2h3JwCmZl0/LgLxSKMAI55hgw==" crossorigin="anonymous"></script>
		 */}
        </div>
)}