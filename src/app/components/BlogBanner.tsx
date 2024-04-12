import React from "react";
import Image from "next/image";
import "./BlogBanner.css";
import Navbar from "./Navbar";
import bannerImage from "../../../public/images/lightroom italie 2023 - 1 van 1.jpeg";
import carrouselThree from "../../../public/images/kseniia-jin-n5f0INq5uKI-unsplash.jpg";

const BlogBanner = () => {
  return (
    <>
      <div
        className="blogPageBanner"
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
        <div className="blogPageBannerContent">
          <h1 className="blogTitle">This is a blogpage</h1>
          <button className="blogBannerButton btn">Button</button>
        </div>
      </div>
    </>
  );
};

export default BlogBanner;
