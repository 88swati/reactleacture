// useState with object

// import React, { useState } from 'react'

// function USWithObject() {
//     const obj = {
//         name:  "Kamal",
//         age: "21",
//         height:5.11,
//         isyoung:true
//     }
//   const [person,setPerson] = useState (obj)
//   let changeState = () =>{
//     setPerson({
//         name:"swati",
//         age: "74",
//         height:5.9,
//         isyoung:false
//     })
//   }
//   return (

//     <div className=' text-center'>
//         <h1>{person.name}</h1>
//         <h1>{person.age}</h1>
//         <h1>{person.height}</h1>
//         <h1>{person.isyoung.toString()}</h1>
//         <button className=' bg-black text-white p-2 m-3 rounded-md' onClick={changeState}>Change</button>
//     </div>
    
    
    
//   )
// }

// export default USWithObject;



import PreviousMap from 'postcss/lib/previous-map'
import { object } from 'prop-types'
import React, { useState } from 'react'

function USWithObject() {
    const obj = {
        name:  "Kamal",
        age: "21",
        height:5.11,
        isyoung:true
    }
  const [person,setPerson] = useState (obj)
  let changeState = () =>{
    setPerson(PreviousState => {
        return{
            ...PreviousState,
            name:"nayan"
        }

    });

  }
  return (

    <div className=' text-center'>
        <h1>{person.name}</h1>
        <h1>{person.age}</h1>
        <h1>{person.height}</h1>
        <h1>{person.isyoung.toString()}</h1>
        <button className=' bg-black text-white p-2 m-3 rounded-md' onClick={changeState}>Change</button>
    </div>
    
    
    
  )
}

export default USWithObject;














