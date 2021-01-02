import {useDropzone} from 'react-dropzone'
import {MyContext} from '../store/context/myContext';
import * as auth from "../store/actions/auth"; 
import React ,{useEffect, useState, useContext, useRef, useCallback, useMemo}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import request from "superagent";
import {ResContext} from '../store/context/resultContext';
import axios from "axios";

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
            console.log('yes')
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

    const node = useRef();
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
    console.log('yes')
    console.log(resstate.child.id);
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
            //console.log(res)
            //props.history.push('/book-appointment');
            alert('files submitted successfully, working on book appoitnment page as discussed');

          })
        
      }
      else{
        setError('Please upload at least one medical file')
      }
      
  }
  

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));


  useEffect(() => {
    auth.authCheckState(dispatch, props);
    
    node.current.addEventListener('click', (e)=>  {
        for (const select of node.current.querySelectorAll('.custom-select')) {
            if (!select.contains(e.target)) {
                select.classList.remove('open');
            }
        }
    });

    for (const option of node.current.querySelectorAll(".custom-option")) {
        option.addEventListener('click', () =>  {
            if (!option.classList.contains('selected')) {
                option.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
                option.classList.add('selected');
                option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent;
            }
        })   }
  
        for (const dropdown of node.current.querySelectorAll(".custom-select-wrapper")) {
            dropdown.addEventListener('click', ()=> {
                dropdown.querySelector('.my-custom-select').classList.toggle('open');
            })
            
        }

        for (const option of node.current.querySelectorAll(".custom-choice")) {
            option.addEventListener('click', () =>{
                if (!option.classList.contains('active')) {
                    if( option.parentNode.querySelector('.custom-choice.active')){
                     option.parentNode.querySelector('.custom-choice.active').classList.remove('active');}
                     option.classList.add('active');
                    // option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent; 
                }
            })
        }



}, [state.token]);




const scrollFunction = ()=> {
if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
document.getElementById("scrollnav").style.top = "0";
} else {
document.getElementById("scrollnav").style.top = "-150px";
}
}

window.onscroll = ()=>  {scrollFunction()};


  return (

    <div ref={node}>
        <div className="jumbotron forum-header mini_header bgimg" style={{backgroundImage: {mini_header_2}}}>
            <MenuLayout props = {props}/>
           
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
                <div class="col-12">   
               
                    <div {...getRootProps({style})}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    </div>
                    <aside>
                        <h4>Files</h4>
                        <ul>{files}</ul>
                    </aside>
                    <p className="questions text-danger col-md-9">{errorState}</p>

                <button  onClick={handleSubmit} className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Book An Appointment
                                </button>
                </div>    
            </div>
        </div>

    </div>
  )
}