// import React from 'react'

// function Hello(props) {
//   return (
//     console.log(props),
//     <div>
//     <h1> Hello {props.name}</h1>
//     <h1> age {props.age}</h1>
//     </div>
//   )
// }
// export default Hello;


import React from 'react'

function Hello(props) {
  return (
    console.log(props),
    <div>
    <h1> Hello {props.name}</h1>
    <h1> age {props.age}</h1>
    {props.Children}
    </div>
  )
}
export default Hello;