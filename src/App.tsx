import './App.css';
import Footer from './components/footer';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Product from './components/products';

function App() {
  return (
    <>
      <Navbar title="Eshop" />
      <Hero />
      <section className="items-container">
        <h1 className="popular-products-title">Popular Products</h1>
        <section className="items">
          <Product />
          <Product />
          <Product />
        </section>
      </section>
      <Footer />
    </>
  );
}

export default App;
