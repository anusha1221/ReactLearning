import { useState } from 'react';
import { Child } from './Child';

// Define the Parent component
export function Parent() {
    // State to hold the list of todos
    const [Todos, UpdateTodos] = useState(['todo1', 'todo2', 'todo3']);

    // Function to add a new todo to the list
    const addNew = (task) => {
        // Update the todos state with the new task added
        UpdateTodos([...Todos, task]);
    }

    return (
        <>
            {/* Render the Child component and pass the addNew function as a prop */}
            <Child add={addNew} />
            {/* Render the list of todos */}
            <ul>
                {
                    // Map over the todos array and render each todo as a list item
                    Todos.map((todo, index) => <li key={index}>{todo}</li>)
                }
            </ul>
        </>
    )
}