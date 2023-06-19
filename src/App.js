import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import SignUpPage from "./pages/SingUpPage/SignUpPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
