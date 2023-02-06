import HomeBanner from "../Components/HomeBanner";
import ProductCard from "../Components/ProductCard";

const Shop = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <HomeBanner />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h1 className="text-center my-5">All Items</h1>
            <div className="col">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
