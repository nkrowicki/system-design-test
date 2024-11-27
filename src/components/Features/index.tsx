import React from "react";
import "./index.css";

interface FeatureProps {
  bedrooms?: number;
  bathrooms?: number;
}

const Feature = ({ bedrooms, bathrooms }: FeatureProps) => {
  return (
    <div className="features">
      <div className="features-text">
        {bedrooms && `${bedrooms} bed`}
        {bedrooms && bathrooms && " | "}
        {bathrooms && `${bathrooms} bath`}
      </div>
    </div>
  );
};

export default Feature;

// Tests-cases:
// Test if the component displays the correct number of bedrooms and bathrooms.
// Test if the component handles missing bedroom or bathroom props gracefully.
