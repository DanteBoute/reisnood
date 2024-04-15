import React from "react";
import "./CollabContent.css";
import CollabPicture from "../../../public/images/ZwartStrandTessa.jpg";
import CollabPicture2 from "../../../public/images/TessaKano.jpeg";

const CollabContent = () => {
  return (
    <>
      <div className="collabContent grid grid-cols-3 grid-rows-1 gap-0">
        <div className="collabLeftSideContainer col-span-2">
          <p className="collabText leading-8">
            Hi! Wij zijn Greg & Irene, twee doorgewinterde reizigers die gek
            zijn op avontuurlijke bestemmingen. Voor jou, en een beetje voor
            onszelf, gaan we op zoek naar de mooiste plekken op aarde. Sinds
            2014 verzamelen we de beste reistips voor bestemmingen van over de
            hele wereld en deze bundelen we in handige artikelen op Reisjunk.nl.
            Het organiseren van je eigen rondreis is te gek maar soms zie je
            door de bomen het bos niet meer. Het is ons doel om het plannen van
            jouw reis een stukje makkelijker en vooral ook leuker te maken.
            <br />
            <br />
            Met reizen bedoelen we geen strandvakantie maar reizen om jezelf te
            verrijken, je te laten inspireren door andere culturen en de rijkdom
            van de natuur te beleven. Het constant opzoeken van je eigen
            grenzen, zowel fysiek door het beklimmen van een vulkaan, als
            mentaal door bijvoorbeeld het eten van insecten. Dát is reizen voor
            ons!
          </p>
        </div>
        <div className="collabRightSideContainer col-start-3">
          <img
            className="collabPicture shadow-2xl"
            src={CollabPicture.src}
            alt="Carrousel Two"
          />
          <img
            className="collabPicture shadow-2xl"
            src={CollabPicture2.src}
            alt="Carrousel Two"
          />
        </div>
      </div>
    </>
  );
};

export default CollabContent;
