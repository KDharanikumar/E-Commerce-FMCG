import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <input className="sf-search" type="text" placeholder="Search Anything..." />
            <FaSearch />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
