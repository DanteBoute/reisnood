import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import bannerImage from "../../public/images/IMG_1190.jpg"
import carrouselOne from "../../public/images/IMG_1974 kopie 5.png"

export default function Home() {
  return (
    <main>
<div style={{backgroundImage: `url(${carrouselOne.src})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'}}>        <Navbar />
        <Hero />
      </div>
      <Footer />
      </main>
  );
}