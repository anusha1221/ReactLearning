import React, { useState, useMemo, useEffect, use } from 'react';
export function UseMemo() {
    let [Time, setTime] = useState(new Date().toLocaleTimeString());
    let [products, setProducts] = useState(
        [
            { id: 1, name: 'Laptop', price: 1000 },
            { id: 2, name: 'Mobile', price: 500 },
            { id: 3, name: 'Camera', price: 200 },
            { id: 4, name: 'Watch', price: 100 },
            { id: 5, name: 'Shoes', price: 50 },
            { id: 6, name: 'Headphones', price: 30 }
        ]
    )
    const [searchText, updateSearch] = useState("")
    const filteredProducts = useMemo(() => {
        console.log('filtering products')
        return products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
    }, [products, searchText])

    useEffect(() => {
        let timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [])
    return (
        <>
            {/* Display the current time */}
            <div>{Time}</div>

            {/* Input field to update the search text */}
            <input type="text" value={searchText} onChange={(e) => updateSearch(e.target.value)} />

            <h1>Products</h1>

            {/* Table to display the filtered products */}
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredProducts.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}