import { forwardRef } from 'react';
import '../styling/components/cart.css';

interface CartProps {
  onClose: () => void;
}

const Cart = forwardRef<HTMLDivElement, CartProps>(
  ({ onClose }: CartProps, ref) => {
    return (
      <section className="cart-container" ref={ref}>
        <h1>Cart</h1>

        <section className="cart-items">
          <p>Cart items</p>
        </section>
        <button onClick={onClose}></button>
      </section>
    );
  }
);

export default Cart;
