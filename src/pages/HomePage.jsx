import React from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="main-container">
      <Header />
      <div className="content-container">
        <SideMenu />
        <div className="home-content"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
