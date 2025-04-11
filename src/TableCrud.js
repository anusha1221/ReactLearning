import './APICrud.css';
import { useEffect } from 'react';

function TableCrud(props) {
    useEffect(() => {
        // Ensure the component re-renders when products prop changes
    }, [props.products]);

    return (
        <>
            {/* Table structure with a class for styling */}
            <table className="table m-3">
                <thead>
                    <tr>
                        {/* Table headers for displaying product details */}
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map through the products array and render each row */}
                    {props.products && props.products.map(
                        (data) =>
                            <tr key={data.id}>
                                {/* Display product details */}
                                <td>{data.id}</td>
                                <td>{data.userId}</td>
                                <td className="line-clamp">{data.title}</td>
                                <td className="line-clamp">{data.body}</td>
                                <td>
                                    {/* Edit button (functionality to be implemented) */}
                                    <button className='btn btn-primary m-2' onClick={() => {
                                        props.edit(data)

                                    }}>
                                        Edit</button>
                                    {/* Delete button triggers the delete function passed via props */}
                                    <button className='btn btn-danger' onClick={() => {
                                        props.delete(data.id)
                                    }}>Delete</button>
                                </td>
                            </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}
export default TableCrud;