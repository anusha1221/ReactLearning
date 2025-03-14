import { useEffect, useState } from "react"

// Component to demonstrate fetching data and using state
export function Customhook() {
    // Initialize state with an empty array
    let [products, setProduct] = useState([])

    // Fetch data when the component mounts
    useEffect(() => {
        fetchData()
        console.log('useEffect')
    }, [])

    // Function to fetch data from the API
    async function fetchData() {
        let data = await fetch('https://fakestoreapi.com/products/')
        let response = await data.json()
        console.log(response)
        setProduct(response) // Update the state with fetched data
    }

    return (
        <>
            <h1>Custom Hook</h1>
            {/* Display keys of the products array */}
            <div>{Object.keys(products)}</div>
            <div>
                {/* Map through products and display each product's title and description */}
                {products.map((product) => {
                    return (
                        <div key={product.id}>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}