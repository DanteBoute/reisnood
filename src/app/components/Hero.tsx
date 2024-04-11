import React from 'react'
import './Hero.css';
import carrouselOne from "../../../public/images/IMG_1974 kopie 5.png"
import carrouselTwo from "../../../public/images/lightroom italie 2023 - 1 van 1.jpeg"
import carrouselThree from "../../../public/images/kseniia-jin-n5f0INq5uKI-unsplash.jpg"


const Hero = () => {
  return (
<div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={carrouselOne.src} className="image-container max-w-sm rounded-lg shadow-2xl" />
    <img src={carrouselTwo.src} className="image-container max-w-sm rounded-lg shadow-2xl" />
    <img src={carrouselThree.src} className="image-container max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-white">Box Office News!</h1>
      <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Hero