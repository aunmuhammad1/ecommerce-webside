import Layout from "../../components/Layout";
import { useState } from "react";
import axios from "axios";
import router from "next/router";

export default function AddNewProduct() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        created: new Date(),
    });
    const [goToProduct, setGoToProduct] = useState(false); 

    if (goToProduct) {
        router.push('/products');
    }
    
    const { title, description, price, created} = formData;
    function handleSubmit(e) {
        e.preventDefault();
        axios.post('/api/products', formData); 
        setGoToProduct(true);
    }
    
    return (
    <Layout>
        <form onSubmit={handleSubmit} className="flex flex-col">
            <h1>Add new product</h1>
            <label>Product Name:</label>
            <input 
                type="text" 
                value={title} 
                onChange={
                (e) => setFormData(
                    { ...formData, title: e.target.value }
                )}
                placeholder="Product name"/>
            <label>Descrption:</label>
            <textarea
                value={description}
                onChange={
                (e) => setFormData(
                    { ...formData, description: e.target.value }
                )}
                placeholder="Description"></textarea>
            <label>Price(in USD):</label>
            <input 
                type="number"
                value={price}
                onChange={
                    (e) => setFormData(
                        { ...formData, price: e.target.value }
                    )} 
                placeholder="Price"/>
            <button className="btn">Save</button>
        </form>
    </Layout>
  )
}