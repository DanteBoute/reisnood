import React from "react";
import Image from "next/image";
import "./BlogBanner.css";
import NavbarHome from "./NavbarHome";
import carrouselThree from "../../../public/images/Petra.jpg";

const BlogBanner = () => {
  return (
    <>
      <div
        className="blogPageBanner"
        style={{ position: "relative", height: "100vh" }}
      >
        <NavbarHome />

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
        <div className="blogPageBannerContent">
          <h1 className="blogTitle">This is a blogpage</h1>
          <button className="blogBannerButton btn">Button</button>
        </div>
      </div>
    </>
  );
};

export default BlogBanner;
