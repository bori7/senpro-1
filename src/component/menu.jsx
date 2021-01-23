
import React, { useContext,useEffect,useState } from "react";	
import {MyContext} from '../store/context/myContext';
import main_logo from '../static/assets/main-logo.png';
import banner_logo from "../static/assets/banner_logo.png";
import * as actions from "../store/actions/auth";
import {errorSuccess, messageSuccess} from "../store/actions/results";
// import  '../../src/static/style.css';
import {Link } from "react-router-dom";
import { useAlert } from 'react-alert';
import {ResContext} from '../store/context/resultContext';
import {ForumContext} from '../store/context/forumContext';
import * as action from "../store/actions/results";

  export const MenuLayout = (props) => {
    const alert = useAlert()
    
    const {state, dispatch} = useContext(MyContext)
    const {token, loading} = state
    const [load, setLoad] = useState(true);
    const {resstate, resdispatch} = useContext(ResContext);
    const {forumstate, forumdispatch} = useContext(ForumContext);
    
    // var errorMessage = null;
    // var loader = null
    useEffect(() => {
      
      const timer = setTimeout(() => {
        
        setLoad(false)
      }, 1500);

     
      if (state.error)
       { alert.show(state.error,{ type: 'error',});
       console.log(state.error)
        errorSuccess(dispatch)
    
      };
      if (resstate.error)
       { alert.show(resstate.error,{ type: 'error',});
       console.log(resstate.error)
       
        errorSuccess(resdispatch)
     
      };
      if ( forumstate.error)
       { alert.show(forumstate.error,{ type: 'error',});
       console.log(forumstate.error)
        
        errorSuccess(forumdispatch)
      };

      if (state.message) { 
         alert.show(state.message,{ type: 'info',})
        messageSuccess(dispatch)
      
      };

      if ( resstate.message ) { 
        alert.show(resstate.message,{ type: 'info',})
        
        messageSuccess(resdispatch)
     
      };
      if (forumstate.message) { 
       alert.show(forumstate.message,{ type: 'info',})
       
        messageSuccess(forumdispatch)
      };
  
      return () => clearTimeout(timer);
      }, [state.token, state.error, state.message,
         resstate.error, resstate.message,
         forumstate.error, forumstate.message,]) 

      const handleSignout= e => {
        e.preventDefault();
        actions.logout(dispatch)
        // props.history.push('/login/');
      }
    
      const handleClick = (e) => {
        e.preventDefault();
        action.getComments(state.token, forumdispatch)
        action.getForum(state.token, forumdispatch)
        // console.log(forumstate.comments)
    
    }
    const scrollFunction = ()=> {
      if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
      document.getElementById("scrollnav").style.top = "0";
      } else {
      document.getElementById("scrollnav").style.top = "-150px";
      }
  }
  
  window.onscroll = ()=>  {scrollFunction()};
return (
    <div className="container-fluid">
    {load? <div class="se-pre-con"></div>:""}
    
  {(loading || resdispatch.loading|| forumdispatch.loading)? <div class="se-pre-con"></div> : ''}
  
    <div className="row">
        <div className="col-12">


    <nav className="navbar navbar-expand-lg navbar-light fixed-top scroller-nav" id="scrollnav">
      <a className="navbar-brand " href="/"><img style={{width: "150px"}}  className="banner_logo" src={main_logo} alt = {"main_logo"}/></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav mr-auto">
          
        <li className="nav-item ">
          <Link className="nav-link" to={`/about/`}>
          About Us
          </Link>
          </li>
          <li className="nav-item animate__animated animate__fadeInLeft">
          <Link className="nav-link" to={`/services/`}>
            Services
          </Link>
          </li>
        <li className="nav-item ">
        <Link className="nav-link" to={`/consultants/`}>
            SenPro Consultants
          </Link>
          </li>
        <li className="nav-item ">
        <Link className="nav-link" to={`/initial/`}>
            Start Here
          </Link>
          </li>

         
          <li className="nav-item ">
          <Link className="nav-link" to={`/childresult/`}>
           Access Test Results
          </Link>
          </li>
      
          <li className="nav-item " onClick={handleClick}>
          <Link className="nav-link" to={`/forum/`}>
          Forum
          </Link>
          </li>

          <li className="nav-item ">
          <Link className="nav-link" to={`/resources/`}>
         Resources
          </Link>
          </li>
      
        </ul>
        {state.token?
        (<ol className="nav-item ">
        <Link to={`/logout/`}>
              <button onClick = {handleSignout} className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf" >Logout</button>
              </Link> 
        </ol>) :  (<ol className="nav-item ">
        <Link to={`/login/`}>
              <button className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf" >Login</button>
              </Link>
        </ol>)
        }
        <br/>
        
      </div>
    </nav>



    <nav className="banner-nav navbar navbar-expand-lg navbar-light ">
      <a className="navbar-brand animate__animated animate__fadeInLeft" href="/"><img className="banner_logo" src={banner_logo} alt = {"banner_logo_1"}/></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto">
          
        
        <li className="nav-item animate__animated animate__fadeInLeft">
          <Link className="nav-link" to={`/about/`}>
            About Us
          </Link>
          </li>
          <li className="nav-item animate__animated animate__fadeInLeft">
          <Link className="nav-link" to={`/services/`}>
            Services
          </Link>
          </li>
          <li className="nav-item animate__animated animate__fadeInLeft">
        <Link className="nav-link" to={`/consultants/`}>
            SenPro Consultants
          </Link>
          </li>
          <li className="nav-item animate__animated animate__fadeInLeft">
          <Link className="nav-link" to={`/initial/`}>
            Start Here
          </Link>
          </li>
          {/**
          <li className="nav-item animate__animated animate__fadeInLeft">
          <Link className="nav-link" to={`/checkout/`}>
            Bookings
          </Link>
          </li>
           */}
          <li className="nav-item animate__animated animate__fadeInLeft">
          <Link className="nav-link" to={`/childresult/`}>
          Test Results
          </Link>
          </li>
         
          <li className="nav-item animate__animated animate__fadeInLeft">
          <Link className="nav-link" to={`/forum/`}>
            Forum
          </Link>
          </li>

          <li className="nav-item animate__animated animate__fadeInLeft"  onClick={handleClick}>
          <Link className="nav-link" to={`/resources/`}>
          Resources
          </Link>
          </li>
      
        </ul>
        {token ?
        (<li className="form-inline my-2 my-lg-0 navright animate__animated animate__fadeInLeft">
        <Link to={`/logout/`}>
              <button onClick = {handleSignout}  className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf" >Logout</button>
              </Link>
        </li>) :  (<li className="form-inline my-2 my-lg-0 navright animate__animated animate__fadeInLeft">
        <Link to={`/login/`}>
              <button className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf" >Login</button>
              </Link>
        </li>)
        }
        <br/>
      </div>
      
    </nav>
<div>

</div>
   
    
        </div>
    </div>
        {/* {errorMessage} */}

</div>

 ) }
    
   