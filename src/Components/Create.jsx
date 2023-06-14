import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Create() {
  const [ name, setName] = useState('');
  const [ age, setAge] = useState('');
  const [ email, setEmail] = useState('');

  const navigate= useNavigate();

  const  handleSubmit =(e) =>{
e.preventDefault();
axios.post('https://64878e7fbeba62972790ce3b.mockapi.io/crud',{
    e_name:name,
    e_age: age,
    e_email: email
}).then(() =>{
    navigate('/')
}).catch((err) =>{
    console.log(err)
  });
  }
  return (
   <>
   <div className=' flex flex-wrap'>
   <div className='md:w-1/3 pr-4 pl-4'>


   <div className='  mb-auto  mt-5'>
               <Link to='/'>
               <button className= ' bg-blue-700 text-white py-1 p-4 m-3 px-2 rounded-md'>
                   Read Data
                </button>
               </Link>
            </div>
    <div className=' bg-blue-600 p-4 text-center'>
    <h1>Create Data</h1>
    </div>
    <form onSubmit={handleSubmit} >

        <div className='mb-4  justify-center'>
            <label>Enter Name</label>
            <input type="text" placeholder='Name' className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' onChange={(e) => setName(e.target.value)}/>

        </div>


        <div className='mb-4'>
            <label>Enter Age</label>
            <input type="text" placeholder='Age' className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' onChange={(e) => setAge(e.target.value)}/>

        </div>

        <div className='mb-4'>
            <label>Enter Email</label>
            <input type="email" placeholder='Enter Email' className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' onChange={(e) => setEmail(e.target.value)}/>

        </div>

       <div className='  grid-column: span 4 / span 4; '>
       <input className=" w-full  bg-blue-600 text-white py-2 px-4 rounded-lg " type="submit" value='submit' />
       </div>
    </form>
    {name}
    <br/>
    {age}
    <br/>
    {email}

   </div>
   </div>
   </>
  )
}

export default Create;


