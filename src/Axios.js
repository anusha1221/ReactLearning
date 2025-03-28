import axios from 'axios'
import { useEffect, useState } from 'react'
export default function Axios() {
    const [pro, updatedPro] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://fakestoreapi.com/products/');
                console.log(res.data);
                updatedPro(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {pro.map((item) => (
                    <li key={item.id}>{item.title}item</li>
                ))}
            </ul>
        </div>
    )
}
