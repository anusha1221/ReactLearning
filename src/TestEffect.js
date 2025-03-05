import { useEffect, useState } from "react"
import { ProductCard } from "./Api-Product"
import './TestEffect.css';

export function TestEffect() {
    let [timer, setTimer] = useState(0)
    let [counter, setCounter] = useState(0)
    useEffect(() => {
        console.log("inside use effect")
    }, [counter] //whenever counter value changes then the useEffect will be rendered
    )
    return (
        <>
            <h2>{console.log("Inside component")}Testing of UseEffect</h2>
            <p>timer :{timer}</p>

            <button onClick={() => {
                setTimer(timer + 1)
            }}>Update timer</button>

            <button onClick={() => {
                setCounter(counter + 1)
            }}>Update counter</button>

        </>
    )
}


//API call in react

export function APIcall() {
    let [products, updateProducts] = useState([])
    useEffect(
        () => {
            getProducts()
        }, []
    )
    async function getProducts() {
        let res = await fetch('https://fakestoreapi.com/products')
        let productList = await res.json()
        updateProducts(productList)
        console.log(productList)

    }

    if (products.length == 0) {
        return (<p>Fetching data</p>)
    }
    return (
        <>
            <div className="product-list">
                {
                    products.map((p) => <ProductCard {...p} key={p.id} />)
                }
            </div>
        </>
    )
} 