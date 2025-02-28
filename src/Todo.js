import { useState } from 'react';
import './Todo.css';

export function Todo() {
    let [todoInput, updateInput] = useState("");
    let [todoList, updateTodos] = useState([
        { id: 1, task: 'Learn React' },
        { id: 2, task: 'Learn Hooks' }
    ]);

    function addNewTodo() {
        if (!todoInput.trim()) {  // Trim input to prevent blank spaces
            alert("Please add a task");
            return;
        }

        let newTodo = {
            id: todoList.length + 1,  // Generate unique ID dynamically
            task: todoInput
        };

        updateTodos([...todoList, newTodo]); // Update todo list
        updateInput(""); // Clear input field
    }

    function deleteTodo(id) {
        let updatedList = todoList.filter(todo => todo.id !== id);
        updateTodos(updatedList);
    }

    return (
        <div className="container w-50">
            <h4 className='text-center mb-20'>Todo App using React</h4>
            <div className="input-group">
                <input
                    className="form-control"
                    onChange={(e) => updateInput(e.target.value)}
                    type='text'
                    value={todoInput}
                />
                <button onClick={addNewTodo} className="btn btn-primary">Add</button>
            </div>
            <ul className="list-group mt-4">
                {todoList.map(todo => (
                    <li key={todo.id} className='list-group-item'> {/* ✅ Added unique key */}
                        <p>{todo.task}</p>
                        <button onClick={() => deleteTodo(todo.id)} className='btn'>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
