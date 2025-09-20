import React, { useState } from "react";

const PostAdCard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: "textbook", name: "Textbook", icon: "📚" },
    { id: "electronics", name: "Electronics", icon: "💻" },
    { id: "bike", name: "Bike", icon: "🏍️" },
    { id: "furniture", name: "Furniture", icon: "🪑" },
    { id: "kitchen", name: "Kitchen", icon: "🍳" },
    { id: "other", name: "Other", icon: "✈️" },
  ];

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    console.log(`Selected category: ${categoryId}`);
  };

  return (
    <div className="container my-5">
      {/* Title */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">POST YOUR AD</h2>
        <p className="text-muted">Select a Category</p>
      </div>

      {/* Categories Grid */}
      <div className="row g-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="col-6 col-md-4"
            onClick={() => handleCategoryClick(category.id)}
          >
            <div
              className={`card h-100 text-center border-2 cursor-pointer ${
                selectedCategory === category.id
                  ? "border-primary shadow"
                  : "border-light"
              }`}
              style={{ cursor: "pointer" }}
            >
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <div
                  className={`rounded-circle bg-light d-flex align-items-center justify-content-center mb-3`}
                  style={{ width: "60px", height: "60px", fontSize: "24px" }}
                >
                  {category.icon}
                </div>
                <h6 className="fw-medium">{category.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostAdCard;
