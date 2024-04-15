import Image from "next/image";
import NavbarHome from "./components/NavbarHome";
import Hero from "./components/Hero";
import bannerImage from "../../public/images/TessaRodeJas.png";
import TravelCards from "./components/TravelCards";
import TitelDivider from "./components/TitelDivider";
import InstagramFeed from "./components/InstagramFeed";
import UniekeAccoHero from "./components/UniekeAccoHero";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
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
        <Image src={bannerImage} layout="fill" objectFit="cover" alt="Banner" />
      </div>
      <Hero />
      <TitelDivider />
      <TravelCards />
      {/* <InstagramFeed /> */}
      <UniekeAccoHero />
    </main>
  );
}
