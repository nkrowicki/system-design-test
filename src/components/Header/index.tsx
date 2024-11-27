import React from "react";
import "./index.css";

const Header = ({ price, isFavorite }: { price?: number; isFavorite?: boolean }) => {
  const priceText = price ? price?.toLocaleString() : "Price not available";

  return (
    <div className="header">
      <div className="price">${price}</div>
      <button className={`favorite-button ${isFavorite ? "favorite" : ""}`} disabled>
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default Header;
