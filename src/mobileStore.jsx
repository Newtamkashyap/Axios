import { useEffect, useState } from "react";
import axios from "axios";


export function Mobile() {
    const [products, setProducts] = useState([{ Name:"", Price: 0, Stock: false }])


    function AddProducts() {
        axios.get("products.json")
            .then(response => {
                setProducts(response.data)
            })

    }
    useEffect(() => {
        AddProducts()
    }, [])
    return (
        <div className="container-fluid">
            <h2>products Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        products.map(product =>
                            <tr key={product.Name}>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                                <td>{(product.Stock === true) ? "Available" : "OutOfStock"}</td>

                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}