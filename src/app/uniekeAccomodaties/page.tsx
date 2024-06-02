import React from "react";
import Image from "next/image";
import NavbarHome from "../components/NavbarHome";
import uniekeAccoHero from "../../../public/images/uniekeAccoHero.jpg";

const uniekeAccomodaties = () => {
  return (
    <>
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
          src={uniekeAccoHero}
          layout="fill"
          objectFit="cover"
          alt="Banner"
        />
      </div>
    </>
  );
};

export default uniekeAccomodaties;
