import HomeBanner from "../Images/HomeBanner.jpg";

const ShopBanner = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <img src={HomeBanner} alt="Banner-img" className="sf-homebanner" />
        </div>
      </div>
    </section>
  );
};

export default ShopBanner;
