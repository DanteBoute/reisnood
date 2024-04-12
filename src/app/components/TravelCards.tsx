import React from "react";
import Image from "next/image";
import "./TravelCards.css";
import Italy from "../../../public/images/TessaKano.jpeg";
import carrouselOne from "../../../public/images/KanoBirdView.jpeg";
import carrouselTwo from "../../../public/images/TessaGekleurdeHuizen.jpeg";
import carrouselThree from "../../../public/images/Petra.jpg";

const TravelCards = () => {
  return (
    <>
      <div className="travelcardsContainer">
        <div className="travelcard">
          <Image
            src={Italy}
            layout="fill"
            objectFit="cover"
            alt="Ijsland"
            className="travelcardImage"
          />
          <p className="travelcardText">Zweden</p>
        </div>
        <div className="travelcard">
          <Image
            src={carrouselOne}
            layout="fill"
            objectFit="cover"
            alt="Italië"
            className="travelcardImage"
          />
          <p className="travelcardText">Norwegen</p>
        </div>
        <div className="travelcard">
          <Image
            src={carrouselThree}
            layout="fill"
            objectFit="cover"
            alt="Zweden"
            className="travelcardImage"
          />
          <p className="travelcardText">Jordanië</p>
        </div>
        <div className="travelcard">
          <Image
            className="travelcardImage"
            src={carrouselTwo}
            layout="fill"
            objectFit="cover"
            alt="Norwegen"
          />
          <p className="travelcardText">Italië</p>
        </div>
      </div>
    </>
  );
};

export default TravelCards;
