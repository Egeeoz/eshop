import './App.css';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Product from './components/products';

function App() {
  const navItems = [
    { name: 'Mens', subnav: ['Hoodies', 'Socks'] },
    { name: 'Womens', subnav: ['Hoodies', 'Socks'] },
  ];

  return (
    <>
      <Navbar title="Eshop" navItems={navItems} />
      <Hero />
      <section>
        <Product />
      </section>
    </>
  );
}

export default App;
