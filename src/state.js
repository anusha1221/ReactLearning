import React, { useState } from "react";
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
