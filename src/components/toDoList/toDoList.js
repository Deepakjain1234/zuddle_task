import React,{useEffect} from 'react'
import { ToDoBox } from '../toDoBox/toDoBox'

export const ToDoList=(props)=>{
    return (
        <>
          <section className='toDoList_main'>
            
            <div className='toDoList_head'>
            <h1>{props.toDo.name}</h1>
            <img width="15" height="15" src="https://img.icons8.com/ios-glyphs/30/ellipsis.png" alt="ellipsis"/>

            </div>
            <div>
              {props.toDo.task.map((data) => (
                <ToDoBox data={data} />
              ))}
            </div>
            
          </section>
        
        </>
    )
}