import PreviousMap from 'postcss/lib/previous-map';
import React, { useState } from 'react'

function USWitharray() {
    let num = [11,12,13,14];
  let [number, setNumbers] = useState(num)

  let changeList = () => {
    setNumbers(PreviousState => {
        return [
            ...PreviousState,
            Math.floor (Math.rendom() * 50)
            // 98
        ]
    }); 
  }
  return (
    <div className=' text-center'>
        <ul>
    {number.map((n,i) =>  <li key={i}>{n}</li>)}
    </ul>
    <button className='  bg-transparent text-black  border-neutral-950 rounded-md  p-3 m-3' onClick={changeList}>change Array</button>
    </div>
  )
}

export default USWitharray;






// import React, { useState } from 'react'

// function USWitharray() {
//     let num = [11,12,13,14];
//   let [number, setNumbers] = useState(num)
//   let changeList = () => {
//     setNumbers([55,66,89,56])
//   }
//   return (
//     <div className=' text-center'>
//         <ul>
//     {number.map((n,i) =>  <li key={i}>{n}</li>)}
//     </ul>
//     <button className='  bg-transparent text-black  border-neutral-950 rounded-md  p-3 m-3' onClick={changeList}>change Array</button>
//     </div>
//   )
// }

// export default USWitharray;