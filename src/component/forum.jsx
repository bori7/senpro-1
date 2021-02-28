import axios from "axios";
import * as auth from "../store/actions/auth";
import React ,{useEffect, useState, useContext, useRef} from "react";
import {MyContext} from '../store/context/myContext';
import * as actions from "../store/actions/results";
import {MenuLayout} from './menu';
import {ForumContext} from '../store/context/forumContext';
import { useAlert } from 'react-alert'
import {capitalizeFirstLetter} from '../store/utility';
import  {HOST_URL} from '../store/clientResult';
import Pagination from "react-js-pagination";
import { Editor } from "@tinymce/tinymce-react";
import ReactHtmlParser from 'react-html-parser';




const Forum = (props)=> {

    const node = useRef();
    
    const todosPerPage = 10;
    const [ activePage, setCurrentPage ] = useState( 1 );
    const alert = useAlert()
    const [forumsho, setForumsho] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [editorcontent, setEditorContent] = useState(' ');
    

    const [toggle, setToggle] = useState(false);
    const [come, setCome] = useState([]);
    const [commentshow, setCommentshow] = useState(null);
    const {state, dispatch} = useContext(MyContext)
    const {forumstate, forumdispatch} = useContext(ForumContext)

    
const getForum = (token,forumdispatch) => {
 
    
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get(`${HOST_URL}/community/forums/?ordering=-id`)
      .then(res => {
        const forums = res.data;
        setForumsho(forums)
    
      })
      .catch(err => {
    
      });
  };

  const getComments = (token,forumdispatch) => {
 
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get(`${HOST_URL}/community/comments/`)
      .then(res => {
        const comments = res.data;
        setCome(comments)
      
      })
      .catch(err => {
    
      });
  };
    

    useEffect(() => {
        
        auth.authCheckState(dispatch, props);
        getForum(state.token, forumdispatch)
        getComments(state.token, forumdispatch)
        const foruminterval = setInterval(function(){ 
            getForum(state.token, forumdispatch)
             }, 
            1000*60);
        const commentinterval = setInterval(function(){ 
            
            getComments(state.token, forumdispatch); }, 
            1000*18);
      
            return () => {clearInterval(foruminterval);
                        clearInterval(commentinterval)}
          
    }, []);



   
const handleEditorChange =(content, editor)=>{
   
    setEditorContent(content)

    }    

const onSearchChange = event => {
    event.preventDefault();
    setSearchField(event.target.value );
  };

const handleClick = (id,e) => {
    
    setToggle(!toggle)
    setCommentshow(id)
    getComments(state.token, forumdispatch)
   

}
const comm  = {}
const handleAdd = (id,e) => {
    e.preventDefault();
    
    if(state.token){
        comm["desc"] = editorcontent
        comm["likes"] = 0
        comm["user"] = state.userId.pk
        comm["forum"] = id
        comm["sender"] = state.userId.username
        actions.postComments(comm,state.token, forumdispatch)
       
       
        const $ = window.$;
        $('.forummodal').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();

        getComments(state.token, forumdispatch)
        getForum(state.token, forumdispatch)
        setEditorContent(' ')
    }
    else{
        alert.show('You are not LoggedIn',{ type: 'error',})}


}
const filteredForumsho = forumsho.filter(forum =>
    forum.title.toLowerCase().includes(searchField.toLowerCase())
  );


              // Logic for displaying current todos
    const indexOfLastTodo  = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    var currentForumsho     = filteredForumsho.slice( indexOfFirstTodo, indexOfLastTodo );

  

const handlePageChange= (pageNumber)=> {
    
    setCurrentPage( pageNumber);
  }
 
 
    
const handleSubmit = e => {
    const fom = {}
    e.preventDefault();
    if(state.token){
        fom["title"] = e.target.option2.value
        fom["desc"] = editorcontent
        fom["likes"] = 0
        fom["user"] = state.userId.pk
        fom["sender"] = state.userId.username
        
        actions.postForum(fom,state.token,forumdispatch)
       
        const $ = window.$;
        $('.forummodal').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        getComments(state.token, forumdispatch)
        getForum(state.token, forumdispatch)

        setEditorContent(' ')
    }
    else{
        alert.show('You are not LoggedIn',{ type: 'error',})}  
    }





return (
    <div ref={node}>
		
        <div className="jumbotron forum-header bgimg">
        <MenuLayout/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-12">	
                                <h1>Forum</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                 <div className="form-group has-search forum-search">
                                    <span className="fa fa-search form-control-feedback"></span>
                                    <input type="search" onChange={onSearchChange}  className="form-control" 
                                    placeholder="Search Forums"/>
                                  </div>
                            </div>
                            <div className="col-md-6">
                                <div className="stat">
                                    <div className="stat-item red">
                                        <h2>{filteredForumsho.length}</h2>
                                        <p>Threads</p>
                                    </div>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        <div className="infobar jumbotron">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <p style={{color: "#fff"}}>Please keep all discuss on the platform respectful and within our <a href="#">guidelines</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="thread jumbotron">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="content">
                            <h2>All Threads</h2>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
       
        <div className="tab-content" id="myTabContent">
             <div className="tab-pane fade show active" id="expert" role="tabpanel" aria-labelledby="home-tab">
                <div id="accordion">
                 		
        { currentForumsho.map(forum => (
                    <div className="" key ={forum.id}>
                        <div className="topic jumbotron">
                            <div className="container">
                              <h4>{capitalizeFirstLetter(forum.title)}</h4>
                              <p  style={{fontSize: "17px"}}>{ReactHtmlParser(forum.desc)}</p>
        
                              <div className="topic-meta">
                                  <div className="leftmeta">
                                      <p style={{fontSize: "12px",fontStyle:"italic"}} >{capitalizeFirstLetter(forum.sender)}</p>
                                      { Math.abs(new Date() - new Date(forum.created_at))<= 1.2e+6 ? <p className="post-type new">New</p>:
                                                            <p className="post-type regular">Regular</p>
                                                          }
                                      <p style={{fontSize: "12px",fontStyle:"italic"}}>{(new Date(forum.created_at)).toLocaleDateString()} 
                                     _{(new Date(forum.created_at)).toLocaleTimeString()}</p>
                                  </div>
                                  <div className="leftmeta">
                                      
                                      <p>
                                        <i key ={forum.id} 
                                        className={ (come.filter(x=> x.forum==forum.id).length >0)? "btn btn-dark fa fa-comment": "btn btn-secondary fa fa-comment"}
                                        style={{fontSize:'18px'}} onClick={(e) => handleClick(forum.id, e)}>

                                        </i> {come.filter(x=> x.forum==forum.id).length}  Comments
                                      </p>
                                      
                                   
                                    <button className="btn btn-info" 
                                            data-toggle="modal" data-target={`#mod${forum.id}`}>
                                        <i className="fa fa-plus toggler"></i>
                                    </button>
                                  </div>
                              </div>
                          </div>
                        </div>

                        

            <div className="modal forummodal" tabIndex="-1"  role="dialog" id={`mod${forum.id}`}>
                <div className="modal-dialog" role="form">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" style={{fontWeight: "700"}}>
                            Add Comment</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form onSubmit={(e) => handleAdd(forum.id, e)}>         
                          

                                <div className="form-group">
                                    <Editor
                                        apiKey={`${process.env.Api_Key}`}
                                        initialValue={editorcontent}
                                        init={{
                                            plugins: 'table lists wordcount emoticons' ,
                                            toolbar: 'undo redo | bold italic | alignleft aligncenter | numlist bullist| wordcount link emoticons | table  |',
                                            table_sizing_mode: 'relative',
                                          }}
                                        onEditorChange={handleEditorChange}
                                      
                                    />
                                </div>
                                <div className="form-group" >
                                <button type='submit' value='Submit' className="btn btn-info deepblue curvebtn my-2  colorf">Add
                                </button>
                                </div>               
                            
                        </form>
                        </div>

                    </div>
                </div>
            </div>
    
                           
                        { come.map(comment => ((toggle && commentshow===comment.forum  && forum.id===comment.forum ) ?
                        
                        (<div key ={come.indexOf(comment)}  className="collapse greybg show"
                         aria-labelledby="headingOne" data-parent="#accordion">
                                   
                                   <div className="jumbotron comment">
                                       <div className="container-fluid">
                                           <div className="row">
                                               <div className="col-12">
                                            <div className="card-body">
                                                  <div className="container">
                                                      <p className="prestuff" >
                                                      {ReactHtmlParser(comment.desc)}
                                                      </p>
                                             
                                               
                                                    <div className="leftmeta">
                                                          <p style={{fontSize: "12px",fontStyle:"italic"}}>{capitalizeFirstLetter(comment.sender)}</p>

                                                          { (Math.abs(new Date() - new Date(comment.created_at)) <= 1.2e+6) ? <p className="post-type new">New</p>:
                                                            <p className="post-type regular">Regular</p>
                                                          }
                                                          
                                                          <p style={{fontSize: "12px",fontStyle:"italic"}}>{(new Date(comment.created_at)).toLocaleDateString()} 
                                                        _{(new Date(comment.created_at)).toLocaleTimeString()}</p>
                                                      </div>
                                                      
                                                  
                                                    </div>
                                                </div>
                                             </div>
                                         </div>
                                        </div>
                                    </div>

                                  
                        </div>)	:null
                         )) }
                                
                </div>   
                    ))}
                
            </div>

            </div>
            <div className="container">
           
            <div className="row">
                <div className="col-6">
                <br/> <br/>
                    <button className="btn btn-info skyblue  curvebtn my-2 my-sm-0 colorf"
                    data-toggle="modal" data-target="#create">
                       Create a Topic
                    </button>
                    
                </div>
                
            </div>

            <br/> <br/>     
            <div className="modal forummodal" tabIndex="-1" role="document" id="create" >
                <div className="modal-dialog" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" style={{fontWeight: "700"}}>
                            Create Topic</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit} id='createsub'>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <textarea input className="form-control" 
                                        type="text" id = "option2" name = "option2" required />
                                    </div>   
                                    <div className="form-group">
                                        <label>Description</label>
                                      
                                    <br/>
                                    <Editor
                                        
                                        apiKey={`${process.env.Api_Key}`}
                                        initialValue={editorcontent}
                                        init={{
                                            plugins: 'table lists wordcount emoticons' ,
                                            toolbar: 'undo redo | bold italic | alignleft aligncenter| numlist bullist| wordcount link emoticons | table |',
                                        }}
                                        onEditorChange={handleEditorChange}
                                      
                                    />

                                    </div> 
                                     <br/>
                                    <div className="form-group" >
                                        <button type="submit" value="Submit" 
                                        className=" btn btn-primary skyblue  curvebtn my-2 my-sm-0 colorf">Create
                                        </button>
                                    </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
</div>
                       
                <div className="col-10 summary step-control question " style={{justifyContent: 'center'}}>
                        <Pagination 
                        hideDisabled
                        itemClass="page-item"
                        linkClass="page-link"
                       activePage={ activePage }
                        itemsCountPerPage={ todosPerPage }
                        totalItemsCount={filteredForumsho.length }
                        pageRangeDisplayed={ 2 }
                        onChange={ handlePageChange }
                        />
                </div> 
        </div>
    </div>
)}

// export default React.memo(Forum);
export default Forum;



