import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function Read() {
const [apiData,setApiData]  = useState([])
function getData(){
    axios.get('https://64878e7fbeba62972790ce3b.mockapi.io/crud')
    .then((Response) =>{
        setApiData(Response.data);
    }).catch((err) =>{
        console.log(err)
      });
}
function handleDelete(id){
axios.delete(`https://64878e7fbeba62972790ce3b.mockapi.io/crud/${id}`)
.then (() => {
    getData();
}).catch((err) =>{
    console.log(err)
  });

}

 function setDataToStorage( id, name, age,email){
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('email', email);
   

 }

useEffect(() =>{
    getData();
}, [])
return (
    <div className=''>
        <div className=' bg-cyan-500 flex justify-center items-center h-screen'>

            <div className='  mb-auto  mt-5'>
               <Link to='/Create'>
               <button className=' bg-cyan-800 py-1 p-4 m-3 px-2 rounded-md'>
                    Create New Data
                </button>
               </Link>
            </div>
<table className='shadow-2xl font-[Poppins]   border-spacing-2  border-cyan-200 w-6/12  hover:bg-cyan-500'>
    <thead className='text-white '>
        <tr className=' hover:bg-cyan-700 cursor-pointer duration-300'>
            <th className=' py-3 bg-cyan-800'>ID</th>
            <th className=' py-3 bg-cyan-800'>NAME</th>
            <th className=' py-3 bg-cyan-800'>AGE</th>
            <th className=' py-3 bg-cyan-800'>EMAIL</th>
            <th className=' py-3 bg-cyan-800'>EDIT</th>
            <th className=' py-3 bg-cyan-800'>DELETE</th>
        </tr>
    </thead>
    <tbody className=' text-cyan-900 text-center '>
        {
          apiData.map((item) => {
            return(
                <>
                <tr className=' bg-cyan-200 cursor-pointer duration-300'>
            <td className=' py-3 px-6 '>{item.id}</td>
            <td className=' py-3 px-6 '>{item.e_name}</td>
            <td className=' py-3 px-6 '>{item.e_age}</td>
            <td className=' py-3 px-6 '>{item.e_email}</td>
           <Link to='/edit'>
           <button className= ' bg-slate-400 py-1 p-4 m-3 px-2 rounded-md ' onClick={() => setDataToStorage(item.id, item.e_name, item.e_age, item.e_email)}>
                 EDIT
            </button>
           </Link>
            <td className=' '>
                {/* <button  onClick={ () => handleDelete(item.id)} className='  bg-slate-400 py-1 p-4 m-3 px-2 rounded-md '>
                    DELETE
                </button> */}
                  <button  onClick={ () => { if(window.confirm('Are you sure to delete data ??')) { handleDelete(item.id)}
                }} className='  bg-slate-400 py-1 p-4 m-3 px-2 rounded-md '>
                    DELETE
                </button>
            </td>
        </tr>
                </>
            )
          })
        }
      </tbody>
</table>
        </div>
       </div>
  )
}
export default Read;