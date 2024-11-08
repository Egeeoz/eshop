import { useEffect, useRef, useState } from 'react';
import '../styling/components/navbar.css';
import Button from './button';
import { MdOutlineShoppingCart } from 'react-icons/md';
import Cart from './cart';
import { Link } from 'react-router-dom';

interface navbarProps {
  title: string;
}

const Navbar = ({ title }: navbarProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement | null>(null);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
      setIsCartOpen(!isCartOpen);
    }
  };

  useEffect(() => {
    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen]);

  return (
    <nav>
      <Link to="/">
        <h1>{title}</h1>
      </Link>
      <ul>
        <li>
          <Link to="/mens">
            <Button>Mens</Button>
          </Link>
          <Link to="/womens">
            <Button>Womens</Button>
          </Link>
        </li>
      </ul>
      <MdOutlineShoppingCart size={45} onClick={toggleCart} />
      {isCartOpen && <Cart onClose={toggleCart} ref={cartRef} />}
    </nav>
  );
};

export default Navbar;
