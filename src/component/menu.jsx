
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

  export const MenuLayout = (props) => {
    const alert = useAlert()
    
    const {state, dispatch} = useContext(MyContext)
    const {token, loading} = state
    const [load, setLoad] = useState(true);
    const {resstate, resdispatch} = useContext(ResContext);
    
    var errorMessage = null;
    // var loader = null
    useEffect(() => {
      
      const timer = setTimeout(() => {
        
        setLoad(false)
      }, 1500);

     
      if (state.error)
       { errorMessage = alert.show(state.error,{ type: 'error',});
       console.log(state.error)
        errorSuccess(dispatch)
        errorSuccess(resdispatch)
      };
    
      if (state.message) { 
        errorMessage = alert.show(state.message,{ type: 'info',})
        messageSuccess(dispatch)
        messageSuccess(resdispatch)
      };
  
      return () => clearTimeout(timer);
      }, [state.token, state.error, state.message]) 

      const handleSignout= e => {
        e.preventDefault();
        actions.logout(dispatch)
        // props.history.push('/login/');
      }
    

return (
    <div className="container-fluid">
    {load? <div class="se-pre-con"></div>:""}
    
  {(loading || resdispatch.loading)? <div class="se-pre-con"></div> : ''}
  
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
          <Link className="nav-link" to={`/checkout/`}>
            Bookings
          </Link>
          </li>
          <li className="nav-item ">
          <Link className="nav-link" to={`/childresult/`}>
           Access Test Results
          </Link>
          </li>
      
          <li className="nav-item ">
          <Link className="nav-link" to={`/forum/`}>
          Forum
          </Link>
          </li>


        
          
        </ul>
        {state.token?
        (<form className="form-inline my-2 my-lg-0 navright animate__animated animate__fadeInLeft">
        <Link to={`/logout/`}>
              <button onClick = {handleSignout} className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf" >Logout</button>
              </Link> 
        </form>) :  (<form className="form-inline my-2 my-lg-0 navright animate__animated animate__fadeInLeft">
        <Link to={`/login/`}>
              <button className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf" >Login</button>
              </Link>
        </form>)
        }
        
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
          <li className="nav-item animate__animated animate__fadeInLeft">
          <Link className="nav-link" to={`/checkout/`}>
            Bookings
          </Link>
          </li>
          <li className="nav-item animate__animated animate__fadeInLeft">
          <Link className="nav-link" to={`/childresult/`}>
           Access Test Results
          </Link>
          </li>
         
          <li className="nav-item animate__animated animate__fadeInLeft">
          <Link className="nav-link" to={`/forum/`}>
            Forum
          </Link>
          </li>
         
         
         
          
          
        </ul>
        {token ?
        (<form className="form-inline my-2 my-lg-0 navright animate__animated animate__fadeInLeft">
        <Link to={`/logout/`}>
              <button onClick = {handleSignout}  className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf" >Logout</button>
              </Link>
        </form>) :  (<form className="form-inline my-2 my-lg-0 navright animate__animated animate__fadeInLeft">
        <Link to={`/login/`}>
              <button className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf" >Login</button>
              </Link>
        </form>)
        }
        
      </div>
      
    </nav>
<div>

</div>
   
    
        </div>
    </div>
        {errorMessage}

</div>

 ) }
    
   