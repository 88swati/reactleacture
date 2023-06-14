// import React, { useEffect, useState } from 'react'
// function USEffect() {
//    let [count , setCount] = useState(0)
//  useEffect ( () => {
//     // console.log("Hello i am Effect..")
//     console.log("Hello i am Effect =" + count)
//  } , [])
// return (
//     <div>
// <h1>{count}</h1>
// <button onClick={() => setCount(count+1)}> Update</button>
//     </div>
//   )
// }
// export default USEffect;


// import React, { useEffect, useState } from 'react'
// function USEffect() {
//    let [count , setCount] = useState(0)
//    let [name , setName ] = useState ("Kamal")
//  useEffect ( () => {
    
//     console.log("Hello i am Effect =" + count)
//  } , [count,name])
// return (
//     <div className=' text-center '>
// <h1>{count}</h1>
// <h1>{name}</h1>
// <button className=' bg-black rounded-md text-white p-3 m-3' onClick={() => setCount(count+1)}> Update</button>
// <button className=' bg-black rounded-md text-white p-3 m-3'onClick={() => setName(name = 'upadhyay')}> Update Name</button>
//     </div>
//   )
// }
// export default USEffect;


import React, { useEffect, useState } from 'react'
function USEffect() {
   let [count , setCount] = useState(0)
   let [name , setName ] = useState ("Kamal")
 useEffect ( () => {

    console.log("Hello i am Effect = " + count)
 } , [count])

 useEffect ( () => {
    console.log("Hello " + name)
     } , [name])

return (
    <div className=' text-center '>
<h1>{count}</h1>
<h1>{name}</h1>
<button className=' bg-black rounded-md text-white p-3 m-3' onClick={() => setCount(count+1)}> Update</button>
<button className=' bg-black rounded-md text-white p-3 m-3'onClick={() => setName(name = 'upadhyay')}> Update Name</button>
    </div>
  )
}
export default USEffect;














