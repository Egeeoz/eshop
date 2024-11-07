import '../styling/cart.css';

interface CartProps {
  onClose: () => void;
}

const Cart = ({ onClose }: CartProps) => {
  return (
    <section className="cart-container">
      <h1>Cart</h1>

      <section className="product-container">
        <p>Cart items</p>
      </section>
      <button onClick={onClose}></button>
    </section>
  );
};

export default Cart;
