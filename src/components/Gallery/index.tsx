import React, { useEffect, useState } from "react";
import Image from "../Image";
import "./index.css";

const Gallery = ({ photos }: { photos?: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (photos ? (prevIndex + 1) % photos.length : 0));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [photos]);

  if (!photos || photos.length === 0) {
    return <div className="no-image">No images available :(</div>;
  }

  return (
    <div className="photo-gallery">
      {photos.map((photo, index) => (
        <Image
          key={index}
          src={photo}
          alt={`Photo ${index + 1}`}
          className={`gallery-photo ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default Gallery;

// Tests-cases:
// Test if the component renders the correct number of images.
// Test if the component handles an empty photos array gracefully.
// Test if the image carousel changes images at the correct interval.
