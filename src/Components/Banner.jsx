import BannerImg from "../Images/BannerImg.jpg";

const Banner = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <img src={BannerImg} alt="Banner-img" className="sf-banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
