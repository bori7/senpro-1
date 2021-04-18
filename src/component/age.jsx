import React, { useEffect, useContext, useState } from "react";
import { MenuLayout } from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import { Link } from "react-router-dom";
import * as auth from "../store/actions/auth";
import { MyContext } from '../store/context/myContext';
import { ResContext } from '../store/context/resultContext';
import { Modal, Button } from 'react-bootstrap';



export const Age = (props) => {

    const { state, dispatch } = useContext(MyContext);
    const { resstate, resdispatch } = useContext(ResContext)
    const [show, setShow] = useState(false);


    useEffect(() => {
        auth.authCheckState(dispatch, props);
        if (resstate.child.id === undefined || resstate.child.id === null) {
            props.history.push('/initial/');
        }
    }, []);


    const handleSubmit = e => {
        e.preventDefault();

    }
    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handleReturn = e => {
        e.preventDefault();

        props.history.goBack();
    }

    return (
        <div >

            <Modal show={show} onHide={handleClose}>
                
                <Modal.Body> Unfortunately at this time, SEN Pro does not cater to the needs of children below two. Please check <a href="https://www.cdc.gov/ncbddd/actearly/milestones/index.html">here</a>  to monitor your child's developmental progress: 
Thank you.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                  
                </Modal.Footer>
            </Modal>

            <div className="jumbotron forum-header mini_header bgimg" style={{ backgroundImage: { mini_header_2 } }}>
                <MenuLayout />

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
                            <h4 className="form-title">Please click the age of your Child:</h4>
                        </div>

                        <div className="col-md-10" style={{ marginTop: '30px' }}>
                            <form onSubmit={handleSubmit}>

                                <div className="row questions">

                                    <div className="col-md-3">
                                       
                                            <button onClick={handleShow} className="question-input form-control custom-choice">Below Two</button>
                                        
                                    </div>
                                </div>

                                <div className="row questions">

                                    <div className="col-md-3">
                                        <Link to={`/gendev2/`}>
                                            <button className="question-input form-control custom-choice">Two</button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="row questions">

                                    <div className="col-md-3">
                                        <Link to={`/gendev3/`}>
                                            <button className="question-input form-control custom-choice">Three</button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="row questions">

                                    <div className="col-md-3">
                                        <Link to={`/gendev4/`}>
                                            <button className="question-input form-control custom-choice">Four</button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="row questions">

                                    <div className="col-md-3">
                                        <Link to={`/gendev5/`}>
                                            <button className="question-input form-control custom-choice">Five</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="row questions">

                                    <div className="col-md-3">
                                        <Link to={`/above5/`}>
                                            <button className="question-input form-control custom-choice">Above Five</button>
                                        </Link>
                                    </div>
                                </div>



                                <br />
                                <br />
                                <br />
                                <div className="col-12 step-control">
                                    <button onClick={handleReturn} className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Previous
                                </button>

                                </div>
                            </form>
                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}