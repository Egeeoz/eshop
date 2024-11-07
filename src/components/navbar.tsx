import { useState } from 'react';
import '../styling/navbar.css';
import Button from './button';
import { MdOutlineShoppingCart } from 'react-icons/md';
import Cart from './cart';

interface navbarProps {
  title: string;
}

const Navbar = ({ title }: navbarProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav>
      <h1>{title}</h1>
      <ul>
        <li>
          <Button>Mens</Button>
          <Button>Womens</Button>
        </li>
      </ul>
      <MdOutlineShoppingCart size={45} onClick={toggleCart} />
      {isCartOpen && <Cart onClose={toggleCart} />}
    </nav>
  );
};

export default Navbar;
