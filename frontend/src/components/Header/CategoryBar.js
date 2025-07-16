import { useState } from "react";
import "./CategoryBar.css";

const categories = ["All Items", "Textbook", "Electronics", "Bike", "Furniture", "Kitchen", "Other"];

function CategoryBar() {
  const [activeCategory, setActiveCategory] = useState("All Items");

  return (
    <div className="category-bar-wrapper d-flex  py-3">
      <div className="category-container px-3 py-2 shadow-sm bg-white rounded-pill d-flex flex-nowrap gap-3 overflow-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`btn btn-sm category-btn ${
              activeCategory === cat ? "active-category" : "border-category"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryBar;
