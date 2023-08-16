import Layout from "@/components/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import {EditNoteRounded, AddCircle} from '@mui/icons-material/';

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setProducts(res.data);
    }).catch((error) => {
      // Handle the error
      console.error('Error:', error.message);
      // You can also access the response status and data in the error object
      if (error.response) {
        console.error('Status:', error.response.status);
        console.error('Data:', error.response.data);
      }
    });
  }, []);
  return (
    <Layout>
      <Link className="btn" href="/products/addnewproduct">
        <AddCircle/>
            <span className="ml-4">Add new product</span>
      </Link>
      <table>
        <thead className="heading">
          <tr>
            <td>
              <b>Product Name</b>
            </td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td><button className="btn flex flex-row">
                <EditNoteRounded/>
                <p>edit</p>
                </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}