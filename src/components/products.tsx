import '../styling/components/product.css';

const Product = () => {
  return (
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
  );
};

export default Product;
