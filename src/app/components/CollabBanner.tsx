import React from "react";
import Image from "next/image";
import "./CollabBanner.css";
import Navbar from "./Navbar";
import carrouselThree from "../../../public/images/TessaGeleRugzak.jpg";
import colabBannerImage from "../../../public/images/KanoBirdView.jpeg";

const CollabBanner = () => {
  return (
    <>
      <div
        className="CollabPageBanner"
        style={{ position: "relative", height: "75vh" }}
      >
        <Navbar />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "75vh",
            zIndex: -1,
          }}
        >
          <Image
            src={colabBannerImage}
            layout="fill"
            objectFit="cover"
            alt="Banner"
          />
        </div>
        <div className="collabTitleContainer">
          <h1 className="CollabTitle">Over Reisnood</h1>
        </div>
      </div>
    </>
  );
};

export default CollabBanner;
