// import React, { useState ,UseMemo} from 'react';

//  function squareNum(number) {
//     console.log("squaring will be done!");
//     return Math.pow(number, 2);

//  }

//  function Usememo () {
//     const [number, setNumber] = useState(0);
//     const squareNum = squareNum(number);
//     const [counter, setCounter] = useState(0);

//     //Change the state to the input
//     const onChangeHandler = (e) => {
//         setNumber(e.target.value);
//     };
  
//     //increase the counter by 1
//     const  counterHander = () => {
//         setCounter(counter + 1);
//   };
//   return (
//     <div className='App'>
//         <input
//          type='number'
//         placeholder=' Enter a Number '
//         value={number}
//         onChange={onChangeHandler}>
//         </input>


//         <div>OUTPUT: {squareNum}</div>
//         <button onClick={counterHander}> Counter ++</button>
//         <div>Counter : {counter}</div>
//     </div>
//   )
//  }
//  export default Usememo;


import React, { useState, useMemo} from "react";
//function to squre  the value
function squareNum(number) {
    console.log("Square will  be dpne! ");
    return Math.pow(number,2);
}
function Usememo() {
    const [number,setNumber] = useState(0)
    const squareNum  = useMemo(() =>{
        return squareNum(number);
    }, [number])
    const [counter, setCounter] = useState(0)

    //change the state to the input
    const onChangeHandler = () => {
        setNumber(e.target.value);
    }
    //increases the counter by 1 
    const counterHander = () => {
        setCounter(counter + 1);
    };
    return (
        <div className="App">
            <input
            type="number"
            placeholder="Enter a number"
            value={number}
            onChange={onChangeHandler}
            ></input>
            <div>OUTPUT: {squareNum}</div>
            <button onClick={counterHander}>Counter ++</button>
            <div>Counter: {counter}</div>
        </div>
    );
}
export default Usememo;



