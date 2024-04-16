import React from "react";
import "./Inspiration.css";
import { FaCampground } from "react-icons/fa";
import { IoFootsteps } from "react-icons/io5";
import { FaWater } from "react-icons/fa";
import { SlDirections } from "react-icons/sl";
import { LuLeaf } from "react-icons/lu";
import carrouselOne from "../../../public/images/KanoBirdView.jpeg";
import carrouselTwo from "../../../public/images/TessaGekleurdeHuizen.jpeg";
import carrouselThree from "../../../public/images/Petra.jpg";
import carrouselFour from "../../../public/images/TessaGeleRugzak.jpg";
import carrouselFive from "../../../public/images/TessaRodeJas.png";

const Inspirition = () => {
  return (
    <>
      <div className="inspirationCardsContainer">
        <div className="inspirationCard card w-110 shadow-xl image-full hover:opacity-100 before:*:opacity-0 before:opacity-0">
          <figure>
            <img src={carrouselOne.src} alt="Petra" />
          </figure>
          <div className="card-body">
            <FaCampground className="cardIcon" />
            <h2 className="cardTitle">Trails</h2>
            <h2 className="cardCollection">12 reizen</h2>
          </div>
        </div>

        <div className="inspirationCard card w-110 shadow-xl image-full">
          <figure>
            <img src={carrouselTwo.src} alt="Petra" />
          </figure>
          <div className="card-body">
            <IoFootsteps className="cardIcon" />
            <h2 className="cardTitle">Trails</h2>
            <h2 className="cardCollection">4 reizen</h2>
          </div>
        </div>

        <div className="inspirationCard card w-110 shadow-xl image-full">
          <figure>
            <img src={carrouselThree.src} alt="Petra" />
          </figure>
          <div className="card-body">
            <FaWater className="cardIcon" />
            <h2 className="cardTitle">Trails</h2>
            <h2 className="cardCollection">9 reizen</h2>
          </div>
        </div>

        <div className="inspirationCard card w-110 shadow-xl image-full">
          <figure>
            <img src={carrouselFour.src} alt="Petra" />
          </figure>
          <div className="card-body">
            <SlDirections className="cardIcon" />
            <h2 className="cardTitle">Trails</h2>
            <h2 className="cardCollection">8 reizen</h2>
          </div>
        </div>

        <div className="inspirationCard card w-110 shadow-xl image-full">
          <figure>
            <img src={carrouselFive.src} alt="Petra" />
          </figure>
          <div className="card-body">
            <LuLeaf className="cardIcon" />
            <h2 className="cardTitle">Trails</h2>
            <h2 className="cardCollection">13 reizen</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inspirition;
