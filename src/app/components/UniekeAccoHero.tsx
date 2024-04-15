import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./UniekeAccoHero.css";
import uniekeAccoHero from "../../../public/images/uniekeAccoHero.jpg";

const UniekeAccoHero = () => {
  return (
    <div className="HeroUniekeAcco">
      <Image
        className="HeroUniekeAccoImage"
        alt="Unique Accommodation cottage waterfall"
        src={uniekeAccoHero}
      />
      <div className="HeroContent">
        <h1 className="HeroText">
          Unieke <br />
          accommodaties
        </h1>
        <button className="HeroButton btn btn-primary">
          {" "}
          <Link href="/uniekeAccomodaties" className="nav-link ">
            See all
          </Link>
        </button>
      </div>
    </div>
  );
};

export default UniekeAccoHero;
