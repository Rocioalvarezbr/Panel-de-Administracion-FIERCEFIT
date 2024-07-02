import React from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu"

function Home() {
  return (
    <div>
      <Header />
      <div className="Container">
        <div className="row">
          <div className="col-4">
          <SideMenu />
          </div>
          <div className="col-8"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
