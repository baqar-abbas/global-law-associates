import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/HeaderComponent/Navbar";
import Footer from "../components/FooterComponent/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Renders the page component */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
