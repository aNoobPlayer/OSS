import * as React from "react";
import  FacilityImage from "../components/FacilityImage";
import { facilitiesPic } from "../data/facilityImage";
export default function Facilities() {
  return (
    <main className="flex flex-col" role="main" aria-labelledby="facilities-title">
      <h1 
        id="facilities-title"
        className="self-center ml-4 text-6xl font-bold text-center text-red-400 tracking-[3px] max-md:text-4xl"
      >
        FACILITIES
      </h1>
      <section 
        className="self-start text-2xl italic text-center text-red-400 border border-solid border-blue-950 max-md:max-w-full max-sm:self-center max-sm:px-5 max-sm:text-xl max-sm:italic max-sm:text-center"
        aria-label="Facilities Introduction"
      >
        <p>
         1111111111111111 We want your stay at our lush hotel to be truly unforgettable. That is
          why we give special attention to all of your needs so that we can ensure
          an experience quite uniquw. Luxury hotels offers the perfect setting
          with stunning views for leisure and our modern luxury resort facilities
          will help you enjoy the best of all.
        </p>
      </section>
      <section 
        className="flex flex-col px-8 mt-28 mb-20 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full"
        aria-label="Facility Images"
      >
        {facilitiesPic[0].images.map((image, index) => (
          <FacilityImage
            key={image.id}
            src={image.src}
            alt={image.alt}
            aspectRatio={image.aspectRatio}
            className={index === 1 ? "mt-28 max-md:mt-10" : index === 2 ? "mt-16 max-md:mt-10" : ""}
          />
        ))}
      </section>
    </main>
  );
}
