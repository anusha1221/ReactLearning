import React, { useState } from "react";
import './state.css';
export function State() {
    let [counter, updateCounter] = useState(0)
    return (
        <>
            <h1>Counter Value:{counter}</h1>
            <button onClick={() => {
                updateCounter(++counter)
            }}>Click to increase count</button>
        </>

    )
}
// constructor(){
// super();
// this.method = this.method.bind(this)
// }
//Background color change
export function Background() {
    return (
        <div className="Wrapper">
            <h1>Background color change</h1>
            <input type="color" onChange={(e) => {
                document.body.style.background = e.target.value
            }} />
        </div>
    )
}


//CounterApp
export function Count() {
    let [counter, setCounter] = useState(0)
    let stock = 10;
    return (
        <div className="Wrapper1">
            <button className="minus" disabled={counter === 0} onClick={() => {
                if (counter > 0) {
                    setCounter(counter - 1)
                }
            }}>-</button>
            <p>{counter}</p>
            <button className="plus" disabled={counter === stock} onClick={() => {
                if (counter < stock) {
                    setCounter(counter + 1)
                }
            }}>+</button>
        </div>
    )
}

//Props destructing
