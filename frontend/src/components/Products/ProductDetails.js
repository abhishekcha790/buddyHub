// ProductDetails.js
import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

const ProductDetails = () => {
  return (
    <div
      className="container bg-white shadow rounded py-4 mb-5"
      style={{
        width: "107%",
        height: "82.5%",
        boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="row">
        {/* Left Side */}
        <div className="col-md-7">
          {/* Location */}
          <p className="text-primary small">
            <i className="bi bi-geo-alt"></i> South-City, Lucknow, Uttar Pradesh
          </p>

          {/* Title */}
          <h5 className="fw-bold">
            MOTOROLA G05 (Forest Green, 64 GB) (4 GB RAM)
          </h5>

          {/* Price */}
          <h5 className="fw-bold text-green">₹ 7,299</h5>

          {/* Callback Button */}
          <button className="btn btn-danger fw-semibold my-2">
            Request Callback
          </button>

          {/* Description */}
          <div className="mt-2 lh-sm">
            <h6 className="fw-bold">Description:</h6>
            <p>
              4 GB RAM | 64 GB ROM | Expandable Upto 1 TB <br />
              16.94 cm (6.67 inch) HD+ Display <br />
              50MP Rear Camera | 8MP Front Camera
              <br />
              5200 mAh Battery
              <br />
              Helio G81 Processor
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-md-5 mb-1 d-flex flex-column align-items-end">
          {/* Centered Content Block */}
          <div className="d-flex flex-column align-items-center w-100">
            {/* Top icons */}
            <div className="d-flex gap-2 mb-3">
              <button className="btn btn-light border rounded p-2">
                <i className="bi bi-heart"></i>
              </button>
              <button className="btn btn-light border rounded p-2">
                <i className="bi bi-share"></i>
              </button>
            </div>

            {/* Posted Date */}
            <div className="text-muted small mb-3">Posted 2 Days Ago</div>

            {/* Posted By Box */}
            <div
              className="border p-3 rounded bg-light mb-3"
              style={{ width: "80%", maxWidth: "250px" }}
            >
              <div className="fw-bold text-muted small mb-2">Posted by</div>
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="rounded-circle me-3"
                  width="35"
                  height="35"
                />
                <div>
                  <a
                    href="#"
                    className="text-decoration-none fw-semibold d-block"
                  >
                    Aman Upadhay
                  </a>
                  <span className="text-success small fw-semibold">
                    ✔ Verified
                  </span>
                </div>
              </div>
              <div className="small text-muted">Items Listed: 2</div>
              <div className="small text-muted">Member since: June 2025</div>
            </div>

            {/* Report Button */}
            <button className="btn btn-outline-danger btn-sm">
              Report this Ad
            </button>
          </div>
        </div>
      </div> {/* End of row */}
    </div>  
  );
};

export default ProductDetails;
