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
    <div
      style={{
        width: "210px",
        height: "420px",
        padding: "4px",
        borderRadius: "10px",
        backgroundColor: "rgb(255, 255, 255)",
      }}
    >
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide text-center"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <h1 style={{ marginBottom: "1rem", marginTop: "1rem" }}>excomfy</h1>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={guitar}
              className="ml-4"
              style={{
                marginTop: "5rem",
                marginLeft: "1.4rem",
                width: "100px",
              }}
              alt="Guitar"
            />
            <p
              className="small"
              style={{
                marginTop: "4rem",
                fontFamily: "'Itim', cursive",
              }}
            >
              Want to upgrade?
              <br />
              First sell your old one.
            </p>
          </div>

          <div className="carousel-item">
            <img
              src={work}
              className="mb-2"
              style={{ width: "125px", marginTop: "5rem" }}
              alt="Work"
            />
            <p
              className="small"
              style={{
                marginTop: "2rem",
                fontFamily: "'Itim', cursive",
              }}
            >
              Want to buy it ?<br />
              Grab it from here!
            </p>
          </div>

          <div className="carousel-item">
            <img
              src={motorcycle}
              className="mb-2"
              style={{
                width: "120px",
                height: "125px",
                marginTop: "5rem",
              }}
              alt="Motorcycle"
            />
            <p
              className="small"
              style={{
                marginTop: "2rem",
                fontFamily: "'Itim', cursive",
              }}
            >
              Seal the deal without stepping outside.
            </p>
          </div>
        </div>

        {/* Indicators below the text */}
        <div className="carousel-indicators position-static mt-2">
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

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default LeftSideLogin;
