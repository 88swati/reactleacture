// useState

import React from 'react'
import { useState } from 'react'
function USComponents() {
   const[name, setName] = useState("Kamal")
  let changeState = () =>{
   setName("swati")
   }
  return (
   <div>
      <h1>{name}</h1>
      <button onClick={changeState}>Click</button>
   </div>
   
  )
}
export default USComponents;




// import React from 'react'
// import { useState } from 'react'

// function USComponents() {
//    const myArray = useState("Kamal")
//   let changeState = () =>{
//     myArray[1]("nayan")
//    }
//   return (
//     <div>
//       <h1>{myArray[0]}</h1>
//       <button onClick={changeState}>Click</button>
//     </div>
//   )
// }

// export default USComponents;



// import React from 'react'
// import { useState } from 'react'

// function USComponents() {
//    const myArray = useState("Kamal")
//   return (
//     <div>
//       <h1>{myArray[0]}</h1>
//       <button onClick={()  => myArray[1]("Kumar")}>Click</button>
//     </div>
//   )
// }

// export default USComponents;