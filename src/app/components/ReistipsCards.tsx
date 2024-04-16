import React from "react";
import Image from "next/image";
import "./ReistipsCards.css";
import Carousel1 from "../../../public/images/ZwartStrandTessa.jpg";
import Carousel2 from "../../../public/images/TessaKano.jpeg";
import Carousel3 from "../../../public/images/TessaGeleRugzak.jpg";
import Carousel4 from "../../../public/images/TessaRodeJas.png";
import Carousel5 from "../../../public/images/KanoBirdView.jpeg";
import Carousel6 from "../../../public/images/Petra.jpg";

const ReistipsCards = () => {
  return (
    <>
      <div className="allCarousels">
        <div className="verticalCarousel">
          <h1 className="carouselTitle">Zweden</h1>
          <div className=" h-96 carousel carousel-vertical rounded-box">
            <div className="carouselImage image-container carousel-item h-full">
              <img src={Carousel1.src} />
            </div>
            <div className="carouselImage image-container carousel-item h-full">
              <img src={Carousel2.src} />
            </div>
            <div className="carouselImage image-container carousel-item h-full">
              <img src={Carousel3.src} />
            </div>
            <div className="carouselImage image-container carousel-item h-full">
              <img src={Carousel4.src} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReistipsCards;
