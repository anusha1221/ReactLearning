import { useLocation, useParams } from "react-router-dom"

export function QueryParameter() {
    let Location = useLocation();
    let queryparams = new URLSearchParams(Location.search)
    let { id, name } = useParams();
    let category = queryparams.get('category')
    let posts = queryparams.get('posts')
    return (
        <>
            <h1>This is User component </h1>
            <p>id is :{id}</p>
            <p>name is {name}</p>
            <p>Category:{category}</p>
            <p>Posts:{posts}</p>
        </>
    )
}