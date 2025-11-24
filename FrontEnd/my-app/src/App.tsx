import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Landingpage from './pages/landingpage/landingpage';
import IndividualProduct from './pages/product/individualproduct';
import Footer from './component/footer';
import data from './Data/product.json';
import {idIsPreset,handleAddToBag} from './functions/bagoperations/BagOpeations';
import ProductLandingPage from './pages/product/productlandingpage';
import LoginPage from './component/login/loginpage';
import Signup from './component/login/signup';
import Header from './component/header/header';
import ContactPage from './pages/contactpage/contactpage';
function IndividualProductRoute() {
  const params = useParams();
  const id = params.id ? parseInt(params.id, data.phones.length) : NaN;
  if (isNaN(id) || !idIsPreset(id)) return <div>Invalid product id</div>;
  return <IndividualProduct id={id} onAddToBag={handleAddToBag} />;
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/product/:id" element={<IndividualProductRoute />} />
            <Route path="/product" element={<ProductLandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
