import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar  />
      <div className="container-fluid my-0 mz-0 p-0">
       
        <Outlet /> {/* This is where the selected page will appear */}
      </div>
      <Footer  />
    </>
  );
}

export default App;
