import Axios  from 'axios';
import React, { useEffect, useState } from 'react'
const baseURL = "https://jsonplaceholder.typicode.com/posts";
function GetAxios() {

  const [my_data, setData]  = useState([]);
    useEffect( () => {
        Axios.get(baseURL).then((Response) =>{

            setData(Response.data);
        })
    },[]);
  return (
     <div>


{
  my_data.map((item)=>{
    const {id, title,body} = item;
    return (
      <div className=' text-center bg-black text-white' key={id}>
     <h1 className='  font-bold'>{id}</h1>
     <h2 className=''>{title}</h2>
     <h3>{body}</h3>
      </div>
    )
  })
}
// {/* <h1>{my_data.id}</h1>
// <h2>{my_data.title}</h2>
// <h3>{my_data.body}</h3> */}




//     </div>
  )
}

export default GetAxios