import * as React from "react";

export default function FacilityImage({ src, alt, aspectRatio, className = "" }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      style={{ aspectRatio }}
      className={`object-contain w-full max-md:mr-0.5 max-md:max-w-full ${className}`}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
        console.error(`Failed to load image: ${src}`);
      }}
    />
  );
}