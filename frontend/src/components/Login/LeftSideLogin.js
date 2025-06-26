import guitar from "../assets/guitar.png";
import motorcycle from "../assets/motorcycle.png";
import work from "../assets/work.png";

function LeftSideLogin() {
  return (
    <>
      <div
        style={{
          width: "270px", // Set your desired width
          height: "450px", // Set your desired height
          overflow: "hidden", // Ensures inner content doesn't overflow
          borderRadius: "10px", // Optional styling
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px", // Optional shadow
          padding: "20px", // Optional inner spacing
          backgroundColor: "#fff", // Optional background
          margin: "auto", // Center horizontally
        }}
      >
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide text-center"
        >
          <h1 style={{ marginBottom: "2rem" }}>Sign Up</h1>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src={guitar}
                className="mx-auto mb-2"
                style={{ width: "100px" }}
                alt="Guitar"
              />
              <p className="small" style={{ marginTop: "8rem" }}>
                Some placeholder content for the first slide.
              </p>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={work}
                className="mx-auto mb-2"
                style={{ width: "100px" }}
                alt="Work"
              />
              <p className="small" style={{ marginTop: "8rem" }}>
                Some placeholder content for the second slide.
              </p>
            </div>
            <div className="carousel-item">
              <img
                src={motorcycle}
                className="mx-auto mb-2"
                style={{ width: "100px" }}
                alt="Motorcycle"
              />
              <p className="small" style={{ marginTop: "8rem" }}>
                Some placeholder content for the third slide.
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

          {/* Controls (you can hide if not needed) */}
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
    </>
  );
}

export default LeftSideLogin;
