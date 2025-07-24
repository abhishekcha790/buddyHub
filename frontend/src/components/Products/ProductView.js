import React, { useState } from "react";
import "./ProductView.css";
import ProductDetails from "./ProductDetails"
import ProductSuggestion from "./ProductSuggestion.js"

const images = [
  "https://th.bing.com/th/id/OIP.gvW11K7lDU5jiJXA4uMkDAHaEK?w=329&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  "https://th.bing.com/th/id/OIP.IuZQpkWlLxlbMctBdKl_0gHaEK?w=301&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  "https://th.bing.com/th/id/OIP.l_kprfaj9Ay4FX6Pd0r7HQHaFW?w=234&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  "https://ts2.mm.bing.net/th?id=OIP.jUB_HKD6v_kL89zBxp20sAHaE7&pid=15.1",
  "https://th.bing.com/th/id/OIP.l7Ja2m3R95H0nAsiAgP0TwHaEK?w=328&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
];

function ProductView() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
  <div className="product-page">
    <div className="container my-2">
      <div className="row justify-content-center">
        {/* Carousel Side - 6 columns */}
        <div className="col-md-5" style={{ marginRight: "-4rem" }}>
          <div className="product-view-box d-flex shadow rounded bg-white">
            {/* Left Thumbnail Panel */}
            <div className="thumbnail-panel d-flex flex-column justify-content-between">
              {images.map((img, index) => (
                <div key={index} className="thumb-wrapper">
                  <img
                    src={img}
                    alt={`thumb-${index}`}
                    onClick={() => setSelectedIndex(index)}
                    className={`thumb-img ${
                      selectedIndex === index ? "selected" : ""
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="vertical-divider" />

            {/* Main Image */}
            <div className="main-image-wrapper position-relative flex-grow-1 d-flex align-items-center justify-content-center">
              <button className="arrow left-arrow" onClick={handlePrev}>
                ‹
              </button>
              <img
                src={images[selectedIndex]}
                alt="Selected"
                className="main-img"
              />
              <button className="arrow right-arrow" onClick={handleNext}>
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Side - 6 columns */}
        <div className="col-md-7">
          <ProductDetails />
        </div>
        <div>
          <ProductSuggestion />
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProductView;
