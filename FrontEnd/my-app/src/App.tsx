import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingpage from './pages/landingpage/landingpage';
import IndividualProduct from './pages/product/individualproduct';
import Footer from './component/footer';
import ProductLandingPage from './pages/product/productlandingpage';
import LoginPage from './component/login/loginpage';
import Signup from './component/login/signup';
import Header from './component/header/header';
import ContactPage from './pages/contactpage/contactpage';
import AboutUsPage from './component/about/aboutuspage';

function App() {
  const [reload, setReload] = React.useState(false);

  useEffect(() => {
    let mounted = true;

    const run = async () => {
      setReload(true);
      await new Promise(r => setTimeout(r, 1500)); // fake delay
      if (mounted) setReload(false);
    };

    run();
    return () => { mounted = false; };
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        {reload ? (
          <div className="loading-app">
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <main className="app-main">
              <Routes>
                {/* Home */}
                <Route path="/" element={<Landingpage />} />

                {/* Product list */}
                <Route path="/product" element={<ProductLandingPage />} />

                {/* Single product (multi-digit / any number works now) */}
                <Route path="/product/:id" element={<IndividualProduct />} />

                {/* Auth */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<Signup />} />

                {/* Pages */}
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutUsPage />} />
              </Routes>
            </main>

            <Footer />
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
