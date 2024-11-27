import React from "react";
import "./index.css";

interface ErrorComponentProps {
  message?: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => {
  return <div className="error-box">{message || "An error has occurred. Please try again later."}</div>;
};

export default ErrorComponent;

// Tests-cases:
// Test if the component displays the default error message when no message prop is provided.
// Test if the component displays the correct error message when a message prop is provided.
