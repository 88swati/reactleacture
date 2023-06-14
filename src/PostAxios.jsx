import  Axios from 'axios';
import React, { useState } from 'react'

function PostAxios() {

 const [my_title ,setTitle]  =  useState('')
 const [my_body ,setBody]  =  useState('')

 const handleSubmit =(e) => {
    e.preventDefault();
    Axios.post("https://jsonplaceholder.typicode.com/post" ,{
        title:my_title,
       body:my_body
         
      })
    .then((Response) =>{
    console.log(Response);

    }).catch((error) =>{
        console.log(error)
    })
 }
  return (
    <div>
        <form className=' text-center ' onSubmit={handleSubmit}>
            <label>Enter Title</label>
            <input type="text"  name='title' value={my_title} onChange={(e) => setTitle(e.target.value)}/>
             <br/><br/>
            <label>Enter Body</label>
            <input type="text"  name='body' value={my_body} onChange={(e) => setBody(e.target.value)}/>
            <br/><br/>
            <input className=' bg-black text-white rounded-lg  px-4 py-2' type="Submit"  value='Post'/>
        </form>
    </div>
  )
}

export default PostAxios