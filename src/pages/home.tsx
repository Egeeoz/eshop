import Hero from '../components/hero';
import Product from '../components/products';

const Home = () => {
  return (
    <>
      <Hero />
      <section className="items-container">
        <h1 className="popular-products-title">Popular Products</h1>
        <section className="items">
          <Product />
          <Product />
          <Product />
        </section>
      </section>
    </>
  );
};

export default Home;
