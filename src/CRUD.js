import React from 'react'
import { useState, useEffect } from 'react';
import { getData, postData, deleteData, putData } from './APICrud';
import TableCrud from './TableCrud';
import './APICrud.css';
// Importing the FormCrud component from the FormCrud file
import { FormCrud } from './FormCrud';
import { Form } from 'react-router-dom';

/**
 * CRUD Component
 * 
 * This component provides a user interface for performing CRUD (Create, Read, Update, Delete) operations
 * on a list of products using API calls. It includes functionality for adding, editing, deleting, and 
 * displaying products in a table format.
 * 
 * State Variables:
 * - `products`: Array of product objects fetched from the API.
 * - `openForm`: Boolean indicating whether the form modal is open or closed.
 * - `edit`: Object representing the product being edited.
 * - `initalForm`: Object representing the initial state of the form fields.
 * 
 * Functions:
 * - `getProducts`: Fetches the list of products from the API and updates the `products` state.
 * - `deleteProducts`: Deletes a product by its ID and updates the `products` state.
 * - `addProduct`: Adds a new product or updates an existing product based on the form data.
 * - `editProduct`: Prepares the form for editing a product by populating it with the selected product's data.
 * - `showForm`: Opens the form modal for adding a new product.
 * - `hideForm`: Closes the form modal.
 * 
 * Lifecycle:
 * - `useEffect`: Fetches the products when the component mounts.
 * 
 * UI Components:
 * - `TableCrud`: Displays the list of products in a table format with options to edit or delete.
 * - `FormCrud`: Displays a form for adding or editing a product.
 * 
 * @component
 */
function CRUD() {
    const [products, setProducts] = useState([])
    const [openForm, setopenForm] = useState(false)
    const [edit, setEdit] = useState({})
    const [initalForm, setInitalForm] = useState({ id: '', userId: '', title: '', body: '' })
    // useEffect hook to fetch products when the component mounts
    useEffect(() => {
        getProducts();
    }, [])
    let getProducts = async () => {
        let res = await getData()
        setProducts(res.data)

    }
    let deleteProducts = async (id) => {
        try {
            // Attempt to delete the product using the provided ID
            const response = await deleteData(id);

            // Check if the response status is 200 (success)
            if (response.status === 200) {
                alert('Product deleted successfully'); // Notify the user of successful deletion

                // Update the products state by filtering out the deleted product
                setProducts((prev) => prev.filter((product) => product.id !== id));
            } else {
                // Notify the user if the deletion failed due to an invalid status
                alert('Failed to delete the product (invalid status)');
            }

        } catch (error) {
            // Log the error to the console for debugging
            console.error('Error deleting product:', error.message);

            // Notify the user if the deletion failed due to an exception
            alert('Failed to delete the product (exception)');
        }



    }
    let addProduct = async (product) => {
        let data = {
            userId: initalForm.userId,
            title: initalForm.title,
            body: initalForm.body
        };
        try {
            let response;
            try {
                if (edit && initalForm.id) {
                    response = await putData(initalForm.id, data); // Ensure correct ID is passed for editing
                } else if (!edit || !initalForm.id) {
                    response = await postData(data); // Send data without an ID for new product creation
                } else {
                    alert('Invalid product ID for editing');
                    return;
                }
            } catch (apiError) {
                console.error('API error:', apiError.message);
                alert('Failed to save the product (API error)');
                return;
            }
            if (response.status === 200 || response.status === 201) { // Handle both success statuses
                if (!edit) {
                    const newProduct = { ...data, id: response.data.id || response.data?.id || new Date().getTime() };
                    setProducts((prev) => [...prev, newProduct]);
                } else {
                    setProducts((prev) =>
                        prev.map((product) =>
                            product.id === initalForm.id ? { ...product, ...data } : product
                        )
                    );
                }
                alert(edit ? 'Product updated successfully' : 'Product added successfully');
            } else {
                alert('Failed to save the product');
            }
        } catch (error) {
            console.error('Error saving product:', error.message);
            alert('Failed to save the product (exception)');
        }
        setopenForm(false); // Close the form after submission
    }
    let editProduct = (data) => {
        setInitalForm(data)
        setopenForm(true)
        setEdit(true)
    }

    let showForm = () => {
        setopenForm(true)
        setInitalForm({ id: '', userId: '', title: '', body: '' })
    }
    let hideForm = () => {
        setopenForm(false)
    }

    return (
        <>
            <div className='wrapper m-5 w-100'>
                <h1 className='text-primary '>CRUD Operations using API Call</h1>
                <button className='btn btn-primary' onClick={() => {
                    showForm()
                }} >Add Product</button>
                <TableCrud products={products} delete={deleteProducts} edit={editProduct} />
                {
                    openForm &&
                    <FormCrud
                        hideForm={hideForm}
                        data={initalForm}
                        add={(product) => {
                            // Validation logic before adding the product
                            if (!product.userId || !product.title || !product.body) {
                                alert('All fields are required!');
                                return;
                            }
                            if (isNaN(product.userId)) {
                                alert('User ID must be a number!');
                                return;
                            }
                            addProduct(product);
                        }}
                    ></FormCrud>
                }
            </div>
        </>
    )
}
export default CRUD;