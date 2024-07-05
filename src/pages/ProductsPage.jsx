import React from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import ProductTable from "../components/ProductTable";
import Footer from "../components/Footer";

function ProductsPage() {
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
          <ProductTable />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductsPage;
