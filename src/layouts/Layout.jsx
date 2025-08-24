import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/HeaderComponent/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Renders the page component */}
      </main>
    </>
  );
};

export default Layout;
