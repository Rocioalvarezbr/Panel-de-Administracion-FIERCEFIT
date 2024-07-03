import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";

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
          <div className="d-flex justify-content-between pt-3">
            <h2>Productos</h2>
            <a
              id="agregar-productos"
              className="btn btn-primary"
              href="#"
              role="button"
            >
              Agregar producto
            </a>
          </div>
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product-item">
                <ul class="list-group list-group-horizontal">
                  <li>
                    <h3>{product.name}</h3>
                  </li>
                  <li>
                    <p>Precio: {product.price}</p>
                  </li>
                  <li>
                    <p>Stock: {product.stock}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
