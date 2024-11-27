import React from "react";
import "./index.css";

const LoadingSkeleton = () => {
  return (
    <div className="skeletonContainer">
      {[...Array(25)].map((_, index) => (
        <div key={index} className="skeletonCard">
          <div className="skeletonImage"></div>
          <div className="skeletonText"></div>
          <div className="skeletonText short"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;

// Tests-cases:
// Test if the component renders the correct number of skeleton cards.
// Test if the skeleton cards have the correct structure.
