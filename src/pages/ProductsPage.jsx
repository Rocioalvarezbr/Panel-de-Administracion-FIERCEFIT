import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
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
    <div className="main-container">
      <Header />
      <div className="content-container">
        <SideMenu />
        <div id="products-container" className="products-content">
          <div className="d-flex justify-content-between pt-3 px-4">
            <h2 className="fw-bold">Productos</h2>
            <a
              id="agregar-productos"
              className="btn btn-primary"
              href="#"
              role="button"
            >
              Agregar producto
            </a>
          </div>
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
                  <td><a href="#">Edit</a></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
