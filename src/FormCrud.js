// Importing necessary libraries and components
import { useState } from 'react';
import './APICrud.css';
export function FormCrud(props) {
    const [products, setProducts] = useState(props.data || {})
    let changeFormData = (e) => {
        const { name, value } = e.target;
        setProducts((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <>
            {/* Overlay container for the form */}
            <div className="form-overlay">
                <form onSubmit={(e) => e.preventDefault()}>
                    {/* Form group for ID input */}
                    <div className="form-group">
                        <label htmlFor="Id">ID</label>
                        <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="ID"
                            name="id"
                            value={products.id || ''}
                            onChange={changeFormData}
                            onBlur={(e) => {
                                if (!e.target.value.trim()) {
                                    alert("ID is required.");
                                }
                            }}
                        />
                    </div>
                    {/* Form group for User ID input */}
                    <div className="form-group">
                        <label htmlFor="userId">User ID</label>
                        <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Enter User ID"
                            name="userid"
                            value={products.userid || ''}
                            onChange={changeFormData}
                            onBlur={(e) => {
                                if (!e.target.value.trim()) {
                                    alert("User ID is required.");
                                } else if (!/^\d+$/.test(e.target.value)) {
                                    alert("User ID must be a numeric value.");
                                }
                            }}
                        />
                    </div>
                    {/* Form group for Title input */}
                    <div className="form-group">
                        <label htmlFor="Title">Title</label>
                        <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Enter User Title"
                            name="title"
                            value={products.title || ''}
                            onChange={changeFormData}
                            onBlur={(e) => {
                                if (!e.target.value.trim()) {
                                    alert("Title is required.");
                                } else if (e.target.value.length < 3) {
                                    alert("Title must be at least 3 characters long.");
                                }
                            }}
                        />
                    </div>
                    {/* Form group for Description input */}
                    <div className="form-group">
                        <label htmlFor="Description">Description</label>
                        <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Enter User Description"
                            name="description"
                            value={products.description || ''}
                            onChange={changeFormData}
                            onBlur={(e) => {
                                if (!e.target.value.trim()) {
                                    alert("Description is required.");
                                } else if (e.target.value.length < 5) {
                                    alert("Description must be at least 5 characters long.");
                                }
                            }}
                        />
                    </div>
                    <div>
                        <button className="btn btn-primary mt-3 float-end ms-2 ml-5" onClick={(e) => {
                            e.preventDefault();
                            props.hideForm();
                            props.add(products);
                            setProducts({}); // Clear the form after submission
                            console.log("products state:", products);
                        }}>Submit</button>
                        <button className="btn btn-danger mt-3 ms-3 float-end" onClick={(e) => {
                            e.preventDefault();
                            if (window.confirm("Are you sure you want to cancel?")) {
                                props.hideForm();
                                setProducts({}); // Clear the form on cancel
                            }
                        }}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}