import { useState } from "react";
import Data from "../Data.json";

const ProductCard = () => {
  const [page, setpage] = useState(1);
  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= Data.length / 8 && selectedPage !== page) setpage(selectedPage);
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-wrap justify-content-between gap-4">
            {Data.slice(page * 8 - 8, page * 8).map((collection) => (
              <div className="card sf-productcard">
                <div className="card-body p-2">
                  <img src={collection.image} alt="img" />
                  <h5 className="card-title mb-3">{collection.name}</h5>
                  <p className="card-text mb-3">
                    {collection.price}
                    <span className="fw-normal">/Kg</span>
                  </p>
                  <button className="sf-button">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
          {Data.length > 0 && (
            <div className="pagination d-flex justify-content-center">
              <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination-disable"}>
                Prev
              </span>
              {[...Array(Data.length / 8)].map((_, i) => {
                return (
                  <span
                    className={page === i + 1 ? "page-select" : ""}
                    onClick={() => selectPageHandler(i + 1)}
                    key={i}
                  >
                    {i + 1}
                  </span>
                );
              })}
              <span
                onClick={() => selectPageHandler(page + 1)}
                className={page < Data.length / 8 ? "" : "pagination-disable"}
              >
                Next
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
