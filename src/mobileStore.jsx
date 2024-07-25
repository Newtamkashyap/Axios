import { useEffect, useState } from "react";
import axios from "axios";


export function Mobile() {
    const [products, setProducts] = useState([{ Name: "", Price: 0, Stock: false }])


    function AddProducts() {
        axios.get("products.json")
            .then(response => {
                setProducts(response.data)
            })

    }

    function PostProduct() {
        axios.post("products.json")

            .then(response => {
                console.log(response.data)
            })

    }
    function DeleteProduct() {
        axios.delete("products.json")

            .then(response => {
                console.log(response.data)
            })

    }
    function PutProduct() {
        axios.put("products.json")

            .then(response => {
                console.log(response.data)
            })

    }
    useEffect(() => {
        AddProducts()
        // PostProduct()
        //  DeleteProduct()
        // PutProduct()
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
                        <th>Add</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product.Name}>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                                <td>{(product.Stock === true) ? "Available" : "OutOfStock"}</td>
                                <td >
                                    <button className="bi bi-plus-square-fill bg bg-danger"></button>
                                </td>
                                <td>
                                    <button className="bi bi-trash-fill bg bg-danger"></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}