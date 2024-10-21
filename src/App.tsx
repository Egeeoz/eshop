import './App.css';
import Hero from './components/hero';
import Navbar from './components/navbar';

function App() {
  const navItems = [
    { name: 'Mens', subnav: ['Hoodies', 'Socks'] },
    { name: 'Womens', subnav: ['Hoodies', 'Socks'] },
  ];

  return (
    <>
      <Navbar title="Eshop" navItems={navItems} />
      <Hero />
    </>
  );
}

export default App;
