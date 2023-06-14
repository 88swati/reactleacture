import React, { useState } from "react";
const funccount = new Set();
const App = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)
 
    const incrementCounter = () => {
        setCount(count+1)
    };
    const decrementCounter = () => {
        setCount(count-1)
    };

    const incrementNumber = () => {
        setNumber(number + 1);

    };

    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);
    alert(funccount.size);
    return(
        <div>
            Count: {count}
            <button onClick={incrementCounter}> increase counter</button>
            <button onClick={decrementCounter}> decrement counter</button>
            <button onClick={incrementNumber}> increase Number</button>

        </div>
    );
};
export default App;