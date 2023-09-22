import React,{useEffect} from 'react'
import { ToDoList } from '../toDoList/toDoList'
import  "../../asset/css/main.css"

export const Main=()=>{
    const toDo1={
        "name":"Resources",
        "task":[
            {
                "name":"Financials & Growth",
                "imageLink":"https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/files%2FScreenshot%202023-09-22%20190610.png?alt=media&token=23c5be09-ea93-4f50-8d22-aa83d71f7117",
                "attach":3,
                "comment":"yes"
            },
            {
                "name":"2017 Goals & KPIs",
                "attach":3,
                "comment":"yes"
            },
            {
                "name":"Brand Guide",
                "attach":3,
                "comment":"yes"
            },
            {
                "name":"Employee Manual",
                "attach":3,
                "comment":"yes"
            }
        ]
        
    }
    const toDo2={
        "name":"To Do",
        "task":[
            {
                "name":"Build A better Burrito : 7 layer To success",
                "taskDone":"0/7",
                "comment":"yes",
                "line":"orange"
            },
            {
                "name":"Nacho Ordinary Birthday - Event Space Rentals",
                "comment":"yes",
                "line":"blue"
            },
            {
                "name":"Taco Drone Delivery Service ",
                "imageLink":"https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/files%2FScreenshot%202023-09-22%20190621.png?alt=media&token=8442da6a-39b9-4d17-84b1-7aa9eb9aa6eb",
                "attach":3,
                "date":"Nov 10"
            },
            {
                "name":"Superbowl Ad - Super Salad Bowls",
                "attach":3,
                "date":"Dec 12",
                "comment":"yes"
            }
        ]
    }
    const toDo3={
        "name":"Doing",
        "task":[
            {
                "name":"The Taco Truck World Tour",
                "attach":3,
                "comment":"yes"
            },
            {
                "name":"Operation Awesome Sauce - A Recipe For Profit",
                "imageLink":"https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/files%2FScreenshot%202023-09-22%20190634.png?alt=media&token=a3403c0e-1c14-4026-be78-5614233dfddd",
                "attach":3,
                "comment":"yes",
                
                "line":"green"
            },
            {
                "name":"NoFiller Instagram Campaign ",
                "attach":3,
                "line":"orange"
            },
            {
                "name":"Global Franchise Opportunities",
                "attach":3,
                "comment":"yes"
            }
        ]
    }
    const toDo4={
        "name":"Done",
        "task":[
            {
                "name":"Focus Group : Corn vs Flour Tortillas",
                "comment":"yes"
            },
            {
                "name":"New Swag: Socks, Scarves & Salsa",
                "attach":3
            },
            {
                "name":"Eco Friendly Utensils & Napkins ",
                "attach":3,
                "line":"blue",
                "taskComplete":"3/3"
            },
            {
                "name":"Upate Yelp Listing",
                "attach":3,
                "comment":"yes"
            }
            ,
            {
                "name":"Grand Opening Celebration",
                "imageLink":"https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/files%2FScreenshot%202023-09-22%20190649.png?alt=media&token=455f745b-eb5b-4370-9783-01b81d4fcf40",
                "attach":3,
                "taskComplete":"Aug 11,2016"
            }
        ]
    }
    return(
        <>
        
          <section className='main_section'>
            <ToDoList  toDo={toDo1} />
            <ToDoList  toDo={toDo2} />
            <ToDoList  toDo={toDo3}/>
            <ToDoList  toDo={toDo4}/>      
          </section>
        
        </>
    )
}