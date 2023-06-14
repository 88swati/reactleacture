// // props

// // import React from 'react'
// // import Hello from './Hello';
// // import House from './House';
// // function App() {
// //   let a = "nayan";
// //   return (
// //   <div >
// //     < Hello name={a} age="24">
// //       <p>Children Element 1</p>
// //       </Hello>
// //     <Hello Hello name="Kamal" age="21" >
// //       <button type='button' value="Click">Click</button>
// //       </Hello>
// //     <Hello Hello name="upadhyay" >
// // <h3>Children Element 3</h3>
// //       </Hello>
// //       {/* <House /> */}
// //     </div>
// //    )
// // }
// // export default App;

// // import React from 'react'
// // import Home from './pages/Home'

// // function App() {
// //   return (
// //     <div>
// //      <Home />

// //     </div>
// //   )
// // }

// // export default App; 


// // import React from 'react'
// // import Navbar from './Components/Navbar';
// // import ClickFunction from './Components/clickFunction';
// // function App() {
// //   return (
// //     <div>
// //       {/* < Navbar name="kamal" age="{21}" /> */}
// //       <ClickFunction name="Kamalswatiupadhyay" />

// //     </div>
// //   )
// // };
// // export default App;



// // Conditinal rendering
// // import React from 'react'
// // import Component1 from './Component1'
// // import Components2 from './Components2'

// // function App() {
// //   const name = "kamal"
// //   if(name == "Kamal"){
// //     return <Component1 />
// //   }
// //   else
// //   {
// //     return <Components2 />
// //   }
// //   }
// // export default App;



// // import React from 'react'
// // import Component1 from './Component1'
// // import Components2 from './Components2'
// // function App() {
// //   const name = "kamal"
// //   let data;
// //   if(name == "Kamal"){
    
// //     data = <Component1 />
// //   }
// //   else
// //   {
// //   data = <Components2 />
// //   }
// //   return(
// //     <div>
// //       {data}
// //     </div>
// //   )
// //   }
// // export default App
// ;

// // import React from 'react'
// // import Component1 from './Component1'
// // import Components2 from './Components2'
// // function App() {
// //   const name = "kamal";
// // return(
// //     <div>
// //      { name == "kamal" && <h1>Hello Kamal</h1>}
// //     </div>
// //   )
// //   }
// // export default App;

// // Ternary operater


// //  import React from 'react'
// // import Component1 from './Component1'
// // import Components2 from './Components2'
// // function App() {
// //    const name = "Kamal"
// //    const age = 15;
  
// //   return(
// //     <div>
// // {name == "Kamal" ? <Component1 /> : <Components2 />} 
// //       {/* {age >= 18 ? <h1> you can vote</h1> : <h1> you can not vote</h1>}  */}

// //     </div>
// //   )
// //   }
// // export default App

// // import React from 'react'
// // import Student from './Student'
// // import USComponents from './USComponents'
// // import USWithObject from './USWithObject';
// // import USWitharray from './USWitharray';
// // import USEffect from './USEffect';
// // import ComA from './ComA';

// // function App() {
// //   return (
// //     <div>
// //       {/* <Student /> */}
// //       {/* <USComponents /> */}
// //       {/* <USWithObject /> */}
// //       {/* <USWitharray /> */}
// //       {/* <USEffect /> */}
// //       < ComA />
// //     </div>
// //   );
// // }
// // export default App;

// // import React, { createContext, useState } from 'react'
// // import ComA from './ComA';
// // export const NameContext = createContext()
// //  export const ChannelContext = createContext()
// //  function App() {
// // const [name, setName] = useState("kamal")
// //   return (
// //     <div>
// //    <NameContext.Provider value={name}>
// //      <ChannelContext.Provider value={'devknus'}>
// //       <ComA />
// //      </ChannelContext.Provider>
// //    </NameContext.Provider>
// //     </div>
// //   )
// // }
// // export default App;


// // import React from 'react'
// // import ControlledFunction from './ControlledFunction';
// // import FunctionInput from './FunctionInput';
// // import OtherInputs from './OtherInputs';
// // import Contactus from './Components/Contactus';
// // import ContactPage from './Components/ContactPage';

// // function App() {
// //   return (
// //     <div>
// //       {/* <ControlledFunction /> */}
// //       {/* <FunctionInput /> */}
// //       {/* <OtherInputs/> */}
// //       {/* <Contactus /> */}
// //       <ContactPage />
// //     </div>
// //   )
// // }

// // export default App




// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";
// import Home from "./pages/Home";
// import Notfound from "./pages/Notfound";

// const App = () => {
// return (
//     <>
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="*" element={<Notfound />} />
//          </Routes>
//       </Router>
//     </>
//   );
// }
// export default App;



//import React from 'react'
// import Header from './Components/Header'
// import Slidbar from './Components/sidebar'
// import Body from './Components/Body'
// const App = () => {
//   return (
//     <div className='App'>
//       <Header />
//       <div className='flex pt-2'>
//         <Slidbar />
//         <Body />
//       </div>
     //</div>
//   )
// }

// export default App


// import UseState from './UseState';
// import Useeffect from './Useeffect'
// import Usememo from './Usememo'
// import Usecallback from './Usecallback';
// import FetchAPI from './FetchAPI';
// i



// export default function App() {
//   return (
//     <div>
    
//    {/* <UseState /> */}
//    {/* <Useeffect /> */}
//    {/* <Usememo /> */}
//    {/* <Usecallback /> */}
//  <FetchAPI />
//     </div>
//   );
// }



//import React from 'react'
// import FetchAPI from './FetchAPI'
// import GetAxios from './GetAxios'
// import PostAxios from './PostAxios'
// import Create from './Components/Create'

// function App() {
//   return (
//     <div>
//      {/* <FetchAPI /> */}
//      {/* <GetAxios /> */}
//      {/* <PostAxios /> */}
//      <Create />
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Create from './Components/Create'
// import { Route, Router, Routes } from 'react-router-dom'
// import Read from './Components/Read';


// function App() {
//   return (
//     <div>
//       <Create />
//       <div className=''>
//         <Router>
//           <Routes>
//             <Route path='/' element={<Read/>}></Route>
//             <Route path='/create' element={<Create/>}></Route>
//           </Routes>
//         </Router>
      
//       </div>
//     </div>
//   )
// }

// export default App


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


import Create from "./Components/Create";
import Read from "./Components/Read";
import Edit from "./Components/Edit";

function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
        <Route exact path="/" element={ <Read/> } />
        <Route exact path="/Create" element={ <Create/> } />
        <Route exact path="/edit" element={ <Edit/> } />
       </Routes>
      </Router>
    </div>
  )
}

export default App;