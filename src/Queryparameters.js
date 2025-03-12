import { useLocation, useParams } from "react-router-dom"

// This function component retrieves and displays query parameters and URL parameters
export function QueryParameter() {
    // useLocation hook provides access to the location object which contains information about the current URL
    let Location = useLocation();

    // URLSearchParams is used to parse the query string from the URL
    let queryparams = new URLSearchParams(Location.search)

    // useParams hook provides access to the URL parameters
    let { id, name } = useParams();

    // Retrieve the 'category' query parameter from the URL
    let category = queryparams.get('category')

    // Retrieve the 'posts' query parameter from the URL
    let posts = queryparams.get('posts')

    // Return a JSX element displaying the retrieved parameters
    return (
        <>
            <h1>This is QueryParam component </h1>
            <p>id is :{id}</p>
            <p>name is {name}</p>
            <p>Category:{category}</p>
            <p>Posts:{posts}</p>
        </>
    )
}