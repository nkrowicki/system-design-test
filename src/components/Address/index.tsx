import React from "react";

import "./index.css";

const Address = ({ address, city, state, zipCode }) => {
  return (
    <div className="address-display">
      <div className="address">{address},</div>
      <div className="city">{city},</div>
      <div className="state">
        {state}, {zipCode}
      </div>
    </div>
  );
};

export default Address;

// Tests-cases:
// Test if the component renders correctly with all props.
// Test if the component handles missing props gracefully.
