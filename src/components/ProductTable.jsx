import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error al traer los productos:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div>
      <Table striped bordered hover className="TablaProductos">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                <a href="#">Edit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductsPage;
