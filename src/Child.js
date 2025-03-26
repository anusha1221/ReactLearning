import React, { useState } from 'react'
// Define and export the Child component
export function Child(props) {
    // Declare a state variable 'newTodo' with an initial value of an empty string
    const [newTodo, SetInput] = useState("")

    // Function to handle adding a new todo
    const handleAddTodo = () => {
        // Call the add function passed via props with the newTodo value
        props.add(newTodo)
        // Reset the input field to an empty string
        SetInput("")
    }

    return (
        <>
            {/* Input field to capture new todo value */}
            <input value={newTodo} onChange={(e) => { SetInput(e.target.value) }} />
            {/* Button to trigger the handleAddTodo function */}
            <button onClick={handleAddTodo}>Add</button>
        </>
    )
}