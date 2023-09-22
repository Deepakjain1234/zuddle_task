import React,{useEffect} from 'react'

export const Header=()=>{
    return(
        <>
        <div className='header_main'>
            <div className='header_left'>
            <div className='header_heading1'>
            <h3> Taco Taco's</h3>
            <img height="15" width="15" src="https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/files%2Ficons8-star-50.png?alt=media&token=79498aeb-4cba-4d2c-a010-4d984d2275ef" alt="" />
            </div>
            <div className='header_heading2'>
            <img width="15" height="15" src="https://img.icons8.com/papercut/60/fox.png" alt="fox"/>
                <h3>Taco & Co.</h3>
                <div className='free_box'> Free</div>
               
            </div>
            <div className='header_heading3'>
            <img width="15" height="15" src="https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/files%2Ficons8-people-50.png?alt=media&token=3e6007c9-be57-4724-a5b1-4d9873ca20a8" alt="conference-call--v1"/>
                <h3>Team Visible</h3>
            </div>
            </div>
            {/* <div>
            <img width="25" height="25" src="https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/files%2Ficons8-ellipsis-30.png?alt=media&token=44528cbd-6ee4-45db-aa06-adb94c01e638" alt="conference-call--v1"/>
            
                Show More
            </div> */}
            <div className='header_heading3'>
            <img width="20" height="20" src="https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/files%2Ficons8-ellipsis-30.png?alt=media&token=44528cbd-6ee4-45db-aa06-adb94c01e638" alt="conference-call--v1"/>
                <h4>Show More</h4>
            </div>
        </div>
        
        </>
    )
}