import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/posts";
// Function to fetch data from the API
export async function getData() {
    // Perform a GET request to the specified URL
    return await axios.get(url);
}

// Function to delete a product by ID
export async function deleteData(id) {
    return await axios.delete(`${url}/${id}`);
    // Perform a DELETE request to the specified URL
}

export async function postData(data) {
    return await axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

}


/**
 * Sends a PUT request to update a resource with the specified ID and data.
 *
 * @param {string|number} id - The unique identifier of the resource to update.
 * @param {Object} data - The data to update the resource with.
 * @returns {Promise<Object>} A promise that resolves to the response of the PUT request.
 */
export async function putData(id, data) {
    return await axios.put(`${url}/${id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

}