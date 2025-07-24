import React, { useRef } from "react";
import "./ProductView.css";
import car from "../assets/car1 1.png"


const sampleProducts = [
  {
    id: 1,
    title: "Hatchbacks, Mercedes-Benz | Diesel",
    price: "₹ 4,299",
    image: car,
  },
  {
    id: 2,
    title: "Hi-Tech, Guitar | New strings",
    price: "₹ 1,500",
    image: "https://th.bing.com/th/id/OIP.7yIpoFG-trMPoU4HKYVzyAHaFj?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 3,
    title: "Gaming Laptop, Dell | Nvidia CPU",
    price: "₹ 20,000",
    image: "https://th.bing.com/th/id/OIP.FmW0kQSU1f_CwQRCFypzHAHaFS?w=265&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 4,
    title: "Hatchbacks, Mercedes-Benz | Diesel",
    price: "₹ 4,40,299",
    image: car,
  },
  {
    id: 5,
    title: "Realme 6 Pro, 128 GB | 108 MP",
    price: "₹ 5,000",
    image: "https://th.bing.com/th/id/OIP.VonZhUztdsTUPDUwcBnwTgHaFj?w=239&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 6,
    title: "MacBook Air, M1 | Apple",
    price: "₹ 4,299",
    image: "https://th.bing.com/th/id/OIP.U0Fz7qJ6z21jIa3hd7fFbwHaEK?w=319&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 7,
    title: "Gaming Laptop, Dell | Nvidia CPU",
    price: "₹ 20,000",
    image: "https://th.bing.com/th/id/OIP.FmW0kQSU1f_CwQRCFypzHAHaFS?w=265&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 8,
    title: "Hatchbacks, Mercedes-Benz | Diesel",
    price: "₹ 4,40,299",
    image: car,
  },
  {
    id: 9,
    title: "Realme 6 Pro, 128 GB | 108 MP",
    price: "₹ 5,000",
    image: "https://th.bing.com/th/id/OIP.VonZhUztdsTUPDUwcBnwTgHaFj?w=239&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 10,
    title: "MacBook Air, M1 | Apple",
    price: "₹ 4,299",
    image: "https://th.bing.com/th/id/OIP.U0Fz7qJ6z21jIa3hd7fFbwHaEK?w=319&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
   {
    id: 11,
    title: "Hi-Tech, Guitar | New strings",
    price: "₹ 1,500",
    image: "https://th.bing.com/th/id/OIP.7yIpoFG-trMPoU4HKYVzyAHaFj?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 12,
    title: "Gaming Laptop, Dell | Nvidia CPU",
    price: "₹ 20,000",
    image: "https://th.bing.com/th/id/OIP.FmW0kQSU1f_CwQRCFypzHAHaFS?w=265&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 13,
    title: "Hatchbacks, Mercedes-Benz | Diesel",
    price: "₹ 4,40,299",
    image: car,
  },
  {
    id: 14,
    title: "Realme 6 Pro, 128 GB | 108 MP",
    price: "₹ 5,000",
    image: "https://th.bing.com/th/id/OIP.VonZhUztdsTUPDUwcBnwTgHaFj?w=239&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },

];

const ProductSuggestion = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="suggestion-box my-4 bg-white rounded shadow-sm py-6 px-6" style={{ width: "104%", margin: "auto", marginLeft:"-2rem"}}>
      <div className="d-flex justify-content-between align-items-center mb-3 py-0 " style={{marginTop:"-5.5rem"}}>
        <h5 className="fw-bold mt-2 px-1">Similar Products</h5>  
        <button className="btn btn-link text-primary fw-semibold">View All</button>      
      </div>
      <hr className="my-1" />

      <div className="position-relative">
        {/* Left Arrow */}
        <button className="carousel-arrow left" onClick={scrollLeft}>
          &lt;
        </button>

        {/* Product Cards Scroll */}
        <div className="carousel-track" ref={scrollRef}>
          {sampleProducts.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt="item" className="img-fluid rounded mb-2" />
              <div className="fw-bold">{item.price}</div>
              <div className="text-muted" style={{ fontSize: "0.7rem" }}>
  {item.title}
</div>

            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="carousel-arrow right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductSuggestion;
