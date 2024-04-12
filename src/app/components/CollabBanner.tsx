import React from "react";
import Image from "next/image";
import "./CollabBanner.css";
import Navbar from "./Navbar";
import carrouselThree from "../../../public/images/Petra.jpg";

const CollabBanner = () => {
  return (
    <>
      <div
        className="CollabPageBanner"
        style={{ position: "relative", height: "100vh" }}
      >
        <Navbar />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            zIndex: -1,
          }}
        >
          <Image
            src={carrouselThree}
            layout="fill"
            objectFit="cover"
            alt="Banner"
          />
        </div>
        <div className="CollabPageBannerContent">
          <h1 className="CollabTitle">This is a Collabpage</h1>
        </div>
      </div>
    </>
  );
};

export default CollabBanner;
