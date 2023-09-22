import React,{useEffect} from 'react'
import {AiOutlineAlignLeft} from 'react-icons/ai'
import { FiCheckSquare } from 'react-icons/fi'
import '../../asset/css/main.css'

export const ToDoBox=(props)=>{
    return(
        <>
          <section className='toDoBox_main'>
             {
              props.data.imageLink && <div className='toDobox_upper'>
              <img src={props.data.imageLink} alt="" />
                </div>  
             } 
              <div className='toDoBox_lower'>
                {props.data.line && <div className='color_line' style={{backgroundColor:props.data.line}}></div>}
                
                <h4>{props.data.name}</h4>
                <div className='toDoBox_lower_inner'>
                {props.data.date && <div className='toDoBox_attach'>
                <img width="17" height="17" src="https://img.icons8.com/ios/50/clock--v1.png" alt="clock--v1"/>


                <h5>{props.data.date}</h5>
                </div>}
               
                 {props.data.comment && <div className='toDoBox_attach'>
                 <img width="15" height="15" src={"https://img.icons8.com/ios/50/multiline-text.png"}/>
                <h5>{props.data.taskDone}</h5>
                </div>}
                {props.data.taskDone && <div className='toDoBox_attach'>
                <img width="17" height="17" src="https://img.icons8.com/material-outlined/24/checked-2--v1.png" alt="checked-2--v1"/>
                <h5>{props.data.taskDone}</h5>
                </div>}
               
                {props.data.attach && <div className='toDoBox_attach'>
                <img width="17" height="17" src="https://img.icons8.com/ios/50/attach.png" alt="attach"/>
                <h5>{props.data.attach}</h5>
                </div>}
                {props.data.taskComplete && 
                <div className='taskComplete'>
                  <h5>{props.data.taskComplete}</h5>

                </div>   
                }        
                </div>
              </div>         
          </section>
        
        </>
    )
}