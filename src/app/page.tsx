import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import bannerImage from "../../public/images/IMG_1974 kopie 5.png";

export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      <Navbar />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1 }}>
        <Image src={bannerImage} layout="fill" objectFit="cover" alt="Banner" />
      </div>
      <Hero />
      <Footer />
    </main>
  );
}
