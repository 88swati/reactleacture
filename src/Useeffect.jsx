import React, { useEffect, useState } from 'react'
export default function App() {
    const [number, setNumber] = useState(0)
    const [state, setState] = useState(10)

    // document.title = `you clicked ${number} times`;
    // console.log("title is changed");

    useEffect(() => {
        document.title = `you clicked ${number} times`;
    console.log("title is changed");
    },[number])

    return (
        <div>
            <h1>hello world its {number}</h1>
            <h2>hello world its {state}</h2>
            <button onClick={ () => setNumber(number + 1)}> Click me</button>
            <br/>
            <button onClick={ () => setState (state + 1)}>state changed</button>
        </div>
    )
};

