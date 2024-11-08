import '../styling/components/product.css';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <Link to="/productpage" className="product-link">
      <section className="product-container">
        <h2>Product Name</h2>
        <figure className="product-image"></figure>
        <section className="product-bottom">
          <p>product price</p>
          <button>add to cart</button>
        </section>
        <section className="product-size-container">
          <button>38</button>
          <button>39</button>
          <button>40</button>
          <button>41</button>
          <button>42</button>
        </section>
      </section>
    </Link>
  );
};

export default Product;
