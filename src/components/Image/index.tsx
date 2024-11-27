import React from "react";
import "./index.css";

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  height?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className, height }) => {
  return <img src={src} alt={alt || "Image"} className={`image ${className}`} style={{ height }} />;
};

export default Image;

// Tests-cases:
// Test if the component renders an image with the correct src and alt attributes.
// Test if the component applies additional class names and styles correctly.
