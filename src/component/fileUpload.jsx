import {useDropzone} from 'react-dropzone'
import {MyContext} from '../store/context/myContext';
import * as auth from "../store/actions/auth"; 
import React ,{useEffect, useState, useContext,useCallback, useMemo}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import request from "superagent";
import {ResContext} from '../store/context/resultContext';
import axios from "axios";
import {Link } from "react-router-dom";

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const activeStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };

export const MyDropzone = (props) => {

    const [errorState, setError] = useState('')
    const onDrop = useCallback(acceptedFiles => {
        function onDrop(acceptedFiles) {
            
            const req = request.post('/upload')
            acceptedFiles.forEach(file => {
              req.attach(file.name, file)
            })
            req.end()
          }
      }, [])

    const {resstate, resdispatch} = useContext(ResContext);  
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        acceptedFiles
      } = useDropzone({onDrop});

    const {state, dispatch} = useContext(MyContext)
  
  
  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  const handleSubmit = ()=>{
   
    if (acceptedFiles.length > 0){
      let formData = new FormData();
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${state.token}`,
          "Content-Type": "multipart/form-data",
        };
        acceptedFiles.forEach(file => {
          formData.append(file.name, file);
          })
      formData.append('childId', resstate.child.id)
      axios
          .post('/uploadFiles', formData)

          .then(res => {
            
            props.history.push('/checkout/');
            
          })
        
      }
      else{
        setError('Please upload at least one medical file')
      }
      
  }
  

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {(file.size/1024).toFixed(1)} kbytes
    </li>
  ));


  useEffect(() => {
    auth.authCheckState(dispatch, props);
    if (resstate.child_id === undefined ||resstate.child_id === null) {
      props.history.push('/initial/');
      }
    

}, [state.token]);


  return (

    <div>
        <div className="jumbotron forum-header mini_header bgimg" style={{backgroundImage: {mini_header_2}}}>
            <MenuLayout props = {props}/>
           
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-12">	
                            <h1>Upload Documents</h1>
                            <p className="header-text">Please upload documentation to provide evidence of your child's existing diagnosis.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
        <div className="jumbotron bg-white">
            <div className="container-fluid">
                <div class="col-12">   
               
                    <div {...getRootProps({style})}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    </div>
                    <br/>
                    <aside>
                        <h4>Files</h4>
                        <ul>{files}</ul>
                    </aside>
                    <p className="questions text-danger col-md-9">{errorState}</p>

                                <button  onClick={handleSubmit} 
                                className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">
                                Book An Appointment
                                </button>
            </div>               
                </div>    
                <br/><br/>
                                <Link className="btn btn-secondary deepblue  curvebtn  my-2 my-sm-0 colorf" 
                                    style ={{float:'left'}}
                                    to={`/initial/`}>
                                    Previous
                                </Link>
        </div>

    </div>
  )
}