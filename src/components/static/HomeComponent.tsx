import React from "react";
import "./home.css";
import img from "../../images/myFoto3.webp";

export const HomeComponent = () => {
  return (
  <div className="main-space">
      <div className="home-body">
        <div className="img-wrapper">
          <img src={img} alt="img" className="img-foto" />
        </div>
        <div className="description-wrap">
          <h1>Chaplynskyi Andrii</h1>
          <p className="address"> Kyiv city, Ukraine</p>
          <p className="email">email: chaa01051982@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
