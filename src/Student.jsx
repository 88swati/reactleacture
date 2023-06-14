// import React from 'react'

// function Student() {

//         // const students = ["kamal", "swati", "vandana", "deepak"];
//        const number = [2,3,4,5];
//   return (
//     <div>
//         {/* { students.map(std => <h1>{ std }</h1>)} */}
//         { number.map(num => <h1>{num = num*2}</h1>)}
//     </div>
//   )
// }

// export default Student


// import React from 'react'

// function Student() {
//     //  const students = ["kamal", "swati", "vandana", "deepak"];

//        const numbers = [2,3,4,5];
//        const result = numbers.map(num => <h1>{num= num*2}</h1>);



//   return (
//     <div>
//         {result}
//     </div>
//   )
// }

// export default Student


// import React from 'react'
// import Students from './Students';

// function Student() {
//     const student = [
//         {
//             name:"Kamal",
//             age:22
//         },
//         {
//             name:"Nayan",
//             age:21
//         },
//         {
//             name:"swati",
//             age:24
//         }
//     ]


//   return (
//     <div>
//         { student.map(std => <Students  std={std}/>)}
//     </div>
//   )
// }

// export default Student;


import React from 'react'

function Student() {

        const students = ["kamal", "swati", "vandana", "deepak"];
        let studentNames = students.map((std,index) => <li key={index}>{ std }</li>)
      
  return (

    <div className=' text-center'>
      {<li>{studentNames}</li>}
         
    </div>
  )
}

export default Student;