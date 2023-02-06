import React from "react";

const SideMenu = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="sf-sidemenu d-flex">
          <span>
            <div></div>
            <div></div>
            <div></div>
          </span>
          <h4 className=" sf-sm-title">Category</h4>
        </div>

        <ul className="sf-sidemenu-item">
          <li>FRUITS</li>
          <li>VEGETABLES</li>
          <li>DRINKS</li>
          <li>BAKERY ITMES</li>
          <li>SNACKS</li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
