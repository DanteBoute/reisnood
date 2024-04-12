import React from "react";
import "./Hero.css";
import carrouselOne from "../../../public/images/KanoBirdView.jpeg";
import carrouselTwo from "../../../public/images/TessaGekleurdeHuizen.jpeg";
import carrouselThree from "../../../public/images/Petra.jpg";

const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={carrouselOne.src}
          className="image-container max-w-sm rounded-lg shadow-2xl"
        />
        <img
          src={carrouselTwo.src}
          className="image-container max-w-sm rounded-lg shadow-2xl"
        />
        <img
          src={carrouselThree.src}
          className="image-container max-w-sm rounded-lg shadow-2xl"
        />
        <div className="mr-5">
          <h1 className="text-5xl font-bold text-white">
            MET EEN DAKTENT DOOR IJSLAND
          </h1>
          <p className="py-6 text-white">
            Start hier met het plannen van jouw roadtrip met deze tips. Unieke
            accomodaties en de beste route om alle highlights te zien.
          </p>
          <button className="btn btn-primary">Plan je reis</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
