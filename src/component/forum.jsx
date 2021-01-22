

import React ,{useEffect, useState, useContext, useRef} from "react";
import {MyContext} from '../store/context/myContext';
import * as actions from "../store/actions/results";
import {MenuLayout} from './menu';
import {ForumContext} from '../store/context/forumContext';
import { useAlert } from 'react-alert'

const Forum = (props)=> {

    const node = useRef();

    const alert = useAlert()
    const [forumsho, setForumsho] = useState([]);
    const [searchField, setSearchField] = useState('');

    const [toggle, setToggle] = useState(false);
    // const [come, setCome] = useState({});

    const {state, dispatch} = useContext(MyContext)
    const {forumstate, forumdispatch} = useContext(ForumContext)



    useEffect(() => {
        setForumsho(forumstate.forums)
        actions.getForum(state.token, forumdispatch)
        // if (state.token === undefined || state.token === null) {
        //     props.history.push('/login/');
        //  }


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

            console.log(state.token)
            
            console.log(forumstate.forums)
    }, [forumstate.forums,forumstate.comments]);


    
const scrollFunction = ()=> {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("scrollnav").style.top = "0";
    } else {
    document.getElementById("scrollnav").style.top = "-150px";
    }
}

window.onscroll = ()=>  {scrollFunction()};

// const setcoment = (comment) =>setCome(comment)

const onSearchChange = event => {
    event.preventDefault();
    setSearchField(event.target.value );
  };

const handleClick = (id,e) => {
    e.preventDefault();
    setToggle(!toggle)
    actions.getComments(id,state.token, forumdispatch)
    console.log(forumstate.comments)

}
const comm  = {}
const handleAdd = (id,e) => {
    e.preventDefault();
    

    if(state.token){
        comm["desc"] = e.target.option1.value
        comm["likes"] = 0
        comm["user"] = state.userId.pk
        comm["forum"] = id
        actions.postComments(comm,state.token, forumdispatch)
    }
    else{
        alert.show('You are not LoggedIn',{ type: 'error',})}

    // console.log(forumstate.comments)

}


const getId = id => {
    return '#'+id
}
const fom = {}
const handleSubmit = e => {
    e.preventDefault();
    if(state.token){
        fom["title"] = e.target.option2.value
        fom["desc"] = e.target.option3.value
        fom["likes"] = 0
        fom["user"] = state.userId.pk
        
        actions.postForum(fom,state.token,dispatch)
    }
    else{
        alert.show('You are not LoggedIn',{ type: 'error',})}  
      }

  const filteredForumsho = forumsho.filter(forum =>
    forum.title.toLowerCase().includes(searchField.toLowerCase())
  );



//   var forumshow = forumstate.forums
 

return (
    <div ref={node}>

            {/* <div class="se-pre-con"></div> */}
		
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
                                    <input type="search" onChange={onSearchChange}  className="form-control" placeholder="Search Forums"/>
                                  </div>
                            </div>
                            <div className="col-md-6">
                                <div className="stat">
                                    <div className="stat-item">
                                        <h2>345</h2>
                                        <p>Threads</p>
                                    </div>
                                    <div className="stat-item red">
                                        <h2>345</h2>
                                        <p>Members</p>
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
                            {/* <div className="filter-action">
                                <p>Filter by</p>
                                <select className="myselect"><option>Category</option></select>
                            </div>
         */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/** 
        <div className="thread jumbotron tabsec">
            <div className="container-fluid">
               
                <div className="row">
                    <div className="col-md-6">
                        
                            <nav className="nav nav-pills nav-justified mytab">
                             
                              <a className="nav-item nav-link " data-toggle="tab" role="tab" aria-controls="home" aria-selected="false" href="#all">All</a>
                            </nav>
                            
                        
                    </div>
                </div>
               
            </div>
        </div>
         */}
        <div className="tab-content" id="myTabContent">
             <div className="tab-pane fade show active" id="expert" role="tabpanel" aria-labelledby="home-tab">
                <div id="accordion">
                 		
        { filteredForumsho.map(forum => (
                    <div className="" key ={forum.id}>
                        <div className="topic jumbotron">
                            <div className="container-fluid">
                              <h4>{forum.title}</h4>
                              <p>{forum.desc}</p>
        
                              <div className="topic-meta">
                                  <div className="leftmeta">
                                      <p>{forum.user}</p>
                                      <p className="post-type new">New</p>
                                      <p>{(new Date(forum.created_at)).toLocaleDateString()} 
                                     _{(new Date(forum.created_at)).toLocaleTimeString()}</p>
                                  </div>
                                  <div className="leftmeta">
                                      {/* <p><i class="fa fa-eye"></i> 10 views</p> */}
                                      <p><i className="fa fa-heart heart-active"></i> {forum.likes} hearts</p>
                                      <p><i className="fa fa-comment"></i> {forumstate.comments.length} Comments</p>
                                      
                                    <button className="btn btn-primary post-toggler" data-toggle="collapse" data-target={`#collapse${forum.id}`} aria-expanded="true" aria-controls="collapseOne">
                                         <i className="fa fa-plus toggler"></i>
                                    </button>
                                  </div>
                              </div>
                          </div>
                        </div>

                        <div id={`collapse${forum.id}`} class="collapse greybg " aria-labelledby="headingOne" data-parent="#accordion">
						  	 	<div class="jumbotron comment">
							  	 	<div class="container-fluid">
							  	 		<div class="row">
							  	 			<div class="col-12">
										      <div class="card-body">
										      	<div class="">
										      		<p>
										        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
										        <div class="topic-meta">
											  		<div class="leftmeta">
											  			<p>Ada Adamu</p>
											  			<p class="post-type regular">Regular</p>
											  			<p>Added Jan 22. 2020, 10:23pm</p>
											  		</div>
											  		<div class="leftmeta">
											  			<p><i class="fa fa-eye"></i> 10 views</p>
											  			<p><i class="fa fa-heart heart-active"></i> 45 hearts</p>
											  			<p><i class="fa fa-comment"></i> 5 Comments</p>
											  			
											  			
											  		</div>
											  	</div>
										    	</div>
										      </div>
										     </div>
										 </div>
								  </div>
							</div>
                            </div>
                        {/**
                        {forumstate.comments.map(comment => ((toggle && forum.id==comment.forum) ?
                        
                        (<div id={forumstate.comments.indexOf(comment)} className="collapse greybg show" aria-labelledby="headingOne" data-parent="#accordion">
                                   
                                   <div className="jumbotron comment">
                                       <div className="container">
                                           <div className="row">
                                               <div className="col-12">
                                              <div className="card-body">
                                                  <div className="">
                                                      <p>
                                               {comment.desc}</p>
                                                <div className="topic-meta">
                                                      <div className="leftmeta">
                                                          <p>{comment.user}</p>
                                                          <p className="post-type regular">Regular</p>
                                                          <p>{comment.created_at}</p>
                                                      </div>
                                                      <div className="leftmeta">
                                                          
                                                          <p><i className="fa fa-heart heart-active"></i> {comment.likes}hearts</p>
                                                               
                                                      </div>
                                                  </div>
                                                </div>
                                              </div>
                                             </div>
                                         </div>
                                        </div>
                                    </div>
 
                        </div>)	:null
                         )) }**/}
                        {(toggle ) ? <div id="collapse2" className="collapse show greybg " aria-labelledby="headingOne" data-parent="#accordion">
                            <div className=" jumbotron comment">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                
                                                <p>Add your comment</p>
                                                <form onSubmit={(e) => handleAdd(forum.id, e)}>         
                                                    <div className="topic-meta">
                                                
                                                        <div className="col-md-9">
                                                            <textarea  input className="question-input form-control" type="text" id = "option1" name = "option1" required />
                                                        </div>
                                                        <button type='submit' value='Submit' className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Add
                                                        </button>
                                                        
                                                    </div>
                                                </form>
                        
                                        </div>
                                    </div>
                            </div>
                            </div>
                        </div>: null}
                                
            </div>   
                 ))}
                
                </div>
            </div>
            <div className="container">
          
            <div className="row">
                            <div className="col-12">
                              <h4>Create a Topic</h4>
                              {/* <p>{forum.desc}</p> */}
                              <form onSubmit={handleSubmit}>
                              
                            
                              <div className="form-group">
                              <label>Title</label>
                            <textarea input className="question-input form-control" type="text" id = "option2" name = "option2" required />
                            </div>   
                            <div className="form-group">
                            <label>Description</label>
                            <textarea input className="question-input form-control" type="text" rows="10" id = "option3" name = "option3" required />
                            </div> 
                            <br/>
                            <div className="form-group" >
                            <button type="submit" value="Submit" className="btn btn-primary skyblue form-control curvebtn my-2 my-sm-0 colorf">Create
                                </button>
                                </div>
                            </form>
                          </div>
                        </div>
                        </div>
                       
          
        </div>
    </div>
)}

export default React.memo(Forum);