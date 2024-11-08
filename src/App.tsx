import './App.css';
import Footer from './components/footer';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Product from './components/products';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Mens from './pages/mens';
import Womens from './pages/womens';
import ProductPage from './pages/productPage';

function App() {
  return (
    <section className="App">
      <Navbar title="Eshop" />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/productpage" element={<ProductPage />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;
