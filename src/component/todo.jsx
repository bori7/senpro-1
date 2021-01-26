
const question_list = [ {
                 title:'SECTION 1',
                 questions:[
                    '1.	Can your child use four-word sentences? ',
                    '2.	Can your child point to familiar things or pictures when they are named? ',
                    '3.	Can your child name familiar objects, names of parents and close family members? ',
                    '4.	Can your child follow simple step instructions? ',
                    '5.	Does your child repeat words overheard in a conversation? '
                 ]
                 },
                 {
                title:'SECTION 2',
                questions:[
                    '6.	Can your child walk up and down a flight of stairs unaided, while holding on to a rail? ',
                    '7.	Can your child throw a ball? ',
                    '8.	Can your child leaf through a thick book, page by page?  ',
                    '9.	Can your child open and close a door? ',
                    '10. Can your child kick a ball without losing his/her balance?  ',
                    '11. Can your child build objects using four blocks? ',
                    '12. Can your child scribble at will using chunky pencils or crayons? ',
                    '13. Can your child thread at least 4 to 6 big beads, using a strong, thick shoelace? ',
                    '14. Can your child eat with a fork? ',
                ]
                },
                {
                title:'SECTION 3',
                questions:[
                    '15. Can your child sort objects using colors, shapes, and sizes? ',
                    '16. Can your child play simple imaginative plays? ',
                    '17. Can your child find objects that you hid together after 5 minutes? ',
                    '18. Can your child complete a 3-to-4-piece puzzle? ',
                    '19. Can your child memorize simple rhymes and learn a simple song?  ',
                    '20.	Can your child follow simple two-step instructions such as ‘pick your books and put them on the table’? ',

                ]
                },

]




// const todos = 
//         [<div>   
//                     <div className="col-md-10" >
//                     <br/>
//                     <br/>
//                     <h4 className="form-title"style={{fontSize: '25px'}}>SECTION 1 </h4>
//                     </div>

//                     <div key={1} className="row questions">
//                     <div className="col-md-9 question-box">
//                     <p  className="question">1.	Can your child use four-word sentences? </p>
//                     </div>
//                     <div className="col-md-3">
//                     <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                     <label className="custom-choice btn btn-secondary ">
//                     <input type="radio" name="option1" id="option1" value = 'yes' autoComplete="off" required  /> Yes
//                     </label>

//                     <label className="custom-choice btn btn-secondary">
//                     <input type="radio" name="option1" id="option1" value = 'no' autoComplete="off" required /> No
//                     </label>
//                     </div>
//                     </div>
//                     </div>
//                     <div key={2} className="row questions">
//                     <div className="col-md-9 question-box">
//                     <p className="question">2.	Can your child point to familiar things or pictures when they are named?  </p>
//                     </div>
//                     <div className="col-md-3">
//                     <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                     <label className="custom-choice btn btn-secondary ">
//                     <input type="radio" name="option2" id="option2" value = 'yes' autoComplete="off"  required /> Yes
//                     </label>

//                     <label className="custom-choice btn btn-secondary">
//                     <input type="radio" name="option2" id="option2" value = 'no' autoComplete="off" required /> No
//                     </label>
//                     </div>
//                     </div>
//                     </div>
//                     <div key={3} className="row questions">
//                     <div className="col-md-9 question-box">
//                     <p className="question">3.	Can your child name familiar objects, names of parents and close family members? </p>
//                     </div>
//                     <div className="col-md-3">
//                     <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                     <label className="custom-choice btn btn-secondary ">
//                     <input type="radio" name="option3" id="option3" value = 'yes' autoComplete="off" required  /> Yes
//                     </label>

//                     <label className="custom-choice btn btn-secondary">
//                     <input type="radio" name="option3" id="option3" value = 'no' autoComplete="off" required /> No
//                     </label>
//                     </div>
//                     </div>
//                     </div>
//                     <div key={4} className="row questions">
//                     <div className="col-md-9 question-box">
//                     <p className="question">4.	Can your child follow simple step instructions?   </p>
//                     </div>
//                     <div className="col-md-3">
//                     <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                     <label className="custom-choice btn btn-secondary ">
//                     <input type="radio" name="option4" id="option4" value = 'yes' autoComplete="off" required  /> Yes
//                     </label>

//                     <label className="custom-choice btn btn-secondary">
//                     <input type="radio" name="option4" id="option4" value = 'no' autoComplete="off" required  /> No
//                     </label>
//                     </div>
//                     </div>
//                     </div>

//                     <div key={5} className="row questions">
//                     <div className="col-md-9 question-box">
//                     <p className="question">5.	Does your child repeat words overheard in a conversation?    </p>
//                     </div>
//                     <div className="col-md-3">
//                     <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                     <label className="custom-choice btn btn-secondary ">
//                     <input type="radio" name="option5" id="option5" value = 'yes' autoComplete="off"  required /> Yes
//                     </label>

//                     <label className="custom-choice btn btn-secondary">
//                     <input type="radio" name="option5" id="option5" value = 'no' autoComplete="off" required /> No
//                     </label>
//                     </div>
//                     </div>
//                     </div>
//             </div>,
//             <div>
//                     <div className="col-md-10" >
//                     <br/>
//                     <br/>
//                     <h4 className="form-title"style={{fontSize: '25px'}}>
//                     SECTION 2</h4>
//                     </div>
//                     <div key={6} className="row questions">
//                     <div className="col-md-9 question-box">
//                     <p className="question">6.	Can your child walk up and down a flight of stairs unaided, while holding on to a rail?   </p>
//                     </div>
//                     <div className="col-md-3">
//                     <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                     <label className="custom-choice btn btn-secondary ">
//                     <input type="radio" name="option6" id="option6" value = 'yes' autoComplete="off" required  /> Yes
//                     </label>

//                     <label className="custom-choice btn btn-secondary">
//                     <input type="radio" name="option6" id="option6" value = 'no' autoComplete="off" required /> No
//                     </label>
//                     </div>
//                     </div>
//                     </div>
//                     <div key={7} className="row questions">
//                     <div className="col-md-9 question-box">
//                     <p className="question">7.	Can your child throw a ball?  </p>
//                     </div>
//                     <div className="col-md-3">
//                     <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                     <label className="custom-choice btn btn-secondary ">
//                     <input type="radio" name="option7" id="option7" value = 'yes' autoComplete="off" required  /> Yes
//                     </label>

//                     <label className="custom-choice btn btn-secondary">
//                     <input type="radio" name="option7" id="option7" value = 'no' autoComplete="off" required /> No
//                     </label>
//                     </div>
//                     </div>
//                     </div>
//                     <div key={8} className="row questions">
//                     <div className="col-md-9 question-box">
//                     <p className="question">8.	Can your child leaf through a thick book, page by page?  </p>
//                     </div>
//                     <div className="col-md-3">
//                     <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                     <label className="custom-choice btn btn-secondary ">
//                     <input type="radio" name="option8" id="option8" value = 'yes' autoComplete="off" required  /> Yes
//                     </label>

//                     <label className="custom-choice btn btn-secondary">
//                     <input type="radio" name="option8" id="option8" value = 'no' autoComplete="off" required /> No
//                     </label>
//                     </div>
//                     </div>
//                     </div>
//                     <div key={9} className="row questions">
//                     <div className="col-md-9 question-box">
//                     <p className="question">9.	Can your child open and close a door?   </p>
//                     </div>
//                     <div className="col-md-3">
//                     <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                     <label className="custom-choice btn btn-secondary ">
//                     <input type="radio" name="option9" id="option9" value = 'yes' autoComplete="off"  required /> Yes
//                     </label>

//                     <label className="custom-choice btn btn-secondary">
//                     <input type="radio" name="option9" id="option9" value = 'no' autoComplete="off" required /> No
//                     </label>
//                     </div>
//                     </div>
//                     </div>

//                     <div key={10} className="row questions">
//                     <div className="col-md-9 question-box">
//                     <p className="question">10.	Can your child kick a ball without losing his/her balance?   </p>
//                     </div>
//                     <div className="col-md-3">
//                     <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                     <label className="custom-choice btn btn-secondary ">
//                     <input type="radio" name="option10" id="option10" value = 'yes' autoComplete="off" required  /> Yes
//                     </label>

//                     <label className="custom-choice btn btn-secondary">
//                     <input type="radio" name="option10" id="option10" value = 'no' autoComplete="off" required /> No
//                     </label>
//                     </div>
//                     </div>
//                     </div>

//                     <div key={11} className="row questions">
//                     <div className="col-md-9 question-box">
//                     <p className="question">11.	Can your child build objects using four blocks?   </p>
//                     </div>
//                     <div className="col-md-3">
//                     <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                     <label className="custom-choice btn btn-secondary ">
//                     <input type="radio" name="option11" id="option11" value = 'yes' autoComplete="off"  required /> Yes
//                     </label>

//                     <label className="custom-choice btn btn-secondary">
//                     <input type="radio" name="option11" id="option11" value = 'no' autoComplete="off" required /> No
//                     </label>
//                     </div>
//                     </div>
//                     </div>
//                     <div key={12} className="row questions">
//                     <div className="col-md-9 question-box">
//                     <p className="question">12.	Can your child scribble at will using chunky pencils or crayons?   </p>
//                     </div>
//                     <div className="col-md-3">
//                     <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                     <label className="custom-choice btn btn-secondary ">
//                     <input type="radio" name="option12" id="option12" value = 'yes' autoComplete="off" required  /> Yes
//                     </label>

//                     <label className="custom-choice btn btn-secondary">
//                     <input type="radio" name="option12" id="option12" value = 'no' autoComplete="off" required /> No
//                     </label>
//                     </div>
//                     </div>
//                     </div>
//                     <div key={13} className="row questions">
//                     <div className="col-md-9 question-box">
//                     <p className="question">13.	Can your child thread at least 4 to 6 big beads, using a strong, thick shoelace?   </p>
//                     </div>
//                     <div className="col-md-3">
//                     <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                     <label className="custom-choice btn btn-secondary ">
//                     <input type="radio" name="option13" id="option13" value = 'yes' autoComplete="off" required   /> Yes
//                     </label>

//                     <label className="custom-choice btn btn-secondary">
//                     <input type="radio" name="option13" id="option13" value = 'no' autoComplete="off" required /> No
//                     </label>
//                     </div>
//                     </div>
//                     </div>
//                     <div key={14} className="row questions">
//                     <div className="col-md-9 question-box">
//                     <p className="question">14.	Can your child eat with a fork?   </p>
//                     </div>
//                     <div className="col-md-3">
//                     <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                     <label className="custom-choice btn btn-secondary ">
//                     <input type="radio" name="option14" id="option14" value = 'yes' autoComplete="off" required  /> Yes
//                     </label>

//                     <label className="custom-choice btn btn-secondary">
//                     <input type="radio" name="option14" id="option14" value = 'no' autoComplete="off" required /> No
//                     </label>
//                     </div>
//                     </div>
//                     </div>

//             </div>,
//             <div>
//                 <div className="col-md-10" >
//                 <br/>
//                 <br/>
//                 <h4 className="form-title"style={{fontSize: '25px'}}>
//                 SECTION 3</h4>
//                 </div>
//                 <div key={15}className="row questions">
//                 <div className="col-md-9 question-box">
//                 <p className="question">15.	Can your child sort objects using colors, shapes, and sizes?  </p>
//                 </div>
//                 <div className="col-md-3">
//                 <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                 <label className="custom-choice btn btn-secondary ">
//                 <input type="radio" name="option15" id="option15" value = 'yes' autoComplete="off" required  /> Yes
//                 </label>

//                 <label className="custom-choice btn btn-secondary">
//                 <input type="radio" name="option15" id="option15" value = 'no' autoComplete="off" required /> No
//                 </label>
//                 </div>
//                 </div>
//                 </div>


//                 <div key={16} className="row questions">
//                 <div className="col-md-9 question-box">
//                 <p className="question">16.	Can your child play simple imaginative plays?  </p>
//                 </div>
//                 <div className="col-md-3">
//                 <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                 <label className="custom-choice btn btn-secondary ">
//                 <input type="radio" name="option16" id="option16" value = 'yes' autoComplete="off" required  /> Yes
//                 </label>

//                 <label className="custom-choice btn btn-secondary">
//                 <input type="radio" name="option16" id="option16" value = 'no' autoComplete="off" required /> No
//                 </label>
//                 </div>
//                 </div>
//                 </div>


//                 <div key={17} className="row questions">
//                 <div className="col-md-9 question-box">
//                 <p className="question">17.	Can your child find objects that you hid together after 5 minutes?    </p>
//                 </div>
//                 <div className="col-md-3">
//                 <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                 <label className="custom-choice btn btn-secondary ">
//                 <input type="radio" name="option17" id="option17" value = 'yes' autoComplete="off" required  /> Yes
//                 </label>

//                 <label className="custom-choice btn btn-secondary">
//                 <input type="radio" name="option17" id="option17" value = 'no' autoComplete="off" required /> No
//                 </label>
//                 </div>
//                 </div>
//                 </div>


//                 <div key={18} className="row questions">
//                 <div className="col-md-9 question-box">
//                 <p className="question">18.	Can your child complete a 3-to-4-piece puzzle?   </p>
//                 </div>
//                 <div className="col-md-3">
//                 <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                 <label className="custom-choice btn btn-secondary ">
//                 <input type="radio" name="option18" id="option18" value = 'yes' autoComplete="off" required  /> Yes
//                 </label>

//                 <label className="custom-choice btn btn-secondary">
//                 <input type="radio" name="option18" id="option18" value = 'no' autoComplete="off" required /> No
//                 </label>
//                 </div>
//                 </div>
//                 </div>


//                 <div key={19} className="row questions">
//                 <div className="col-md-9 question-box">
//                 <p className="question">19.	Can your child memorize simple rhymes and learn a simple song?   </p>
//                 </div>
//                 <div className="col-md-3">
//                 <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                 <label className="custom-choice btn btn-secondary ">
//                 <input type="radio" name="option19" id="option19" value = 'yes' autoComplete="off" required  /> Yes
//                 </label>

//                 <label className="custom-choice btn btn-secondary">
//                 <input type="radio" name="option19" id="option19" value = 'no' autoComplete="off" required /> No
//                 </label>
//                 </div>
//                 </div>
//                 </div>

//                 <div key={20} className="row questions">
//                 <div className="col-md-9 question-box">
//                 <p className="question">20.	Can your child follow simple two-step instructions such as ‘pick your books and put them on the table’?   </p>
//                 </div>
//                 <div className="col-md-3">
//                 <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
//                 <label className="custom-choice btn btn-secondary ">
//                 <input type="radio" name="option20" id="option20" value = 'yes' autoComplete="off" required  /> Yes
//                 </label>

//                 <label className="custom-choice btn btn-secondary">
//                 <input type="radio" name="option20" id="option20" value = 'no' autoComplete="off" required /> No
//                 </label>
//                 </div>
//                 </div>
//                 </div>

//             </div>
//         ]

