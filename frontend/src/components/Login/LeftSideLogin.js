// src/components/Login/LeftSideLogin.js
import React, { useEffect } from "react";
import guitar from "../assets/guitar.png";
import motorcycle from "../assets/motorcycle.png";
import work from "../assets/work.png";

function LeftSideLogin() {
  useEffect(() => {
    const carousel = document.querySelector("#carouselExampleDark");
    if (carousel && window.bootstrap) {
      new window.bootstrap.Carousel(carousel, {
        interval: 3000,
        ride: "carousel",
      });
    }
  }, []);

  return (
    <div className="w-100 px-3 py-4">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide text-center"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
       <h1 className="mb-5 mt-0 fs-4 d-none d-md-block">excomfy</h1>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={guitar}
              className="mx-auto d-block"
              style={{ width: "110px", marginTop: "2rem" }}
              alt="Guitar"
            />
            <p className="small mt-4" style={{ fontFamily: "'Itim', cursive" }}>
              Want to upgrade?
              <br />
              First sell your old one.
            </p>
          </div>

          <div className="carousel-item">
            <img
              src={work}
              className="mx-auto d-block"
              style={{  width: "110px", marginTop: "2rem" }}
              alt="Work"
            />
            <p className="small mt-4" style={{ fontFamily: "'Itim', cursive" }}>
              Want to buy it?
              <br />
              Grab it from here!
            </p>
          </div>

          <div className="carousel-item">
            <img
              src={motorcycle}
              className="mx-auto d-block"
              style={{  width: "110px", marginTop: "2rem" }}
              alt="Motorcycle"
            />
            <p className="small mt-4" style={{ fontFamily: "'Itim', cursive" }}>
              Seal the deal without <br />
               stepping outside.
            </p>
          </div>
        </div>

        <div className="carousel-indicators position-static mt-4">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default LeftSideLogin;
