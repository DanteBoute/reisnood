import React from 'react'
import './Hero.css'; // Adjust the import statement


const Hero = () => {
  return (
<div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="image-container max-w-sm rounded-lg shadow-2xl" />
    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="image-container max-w-sm rounded-lg shadow-2xl" />
    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="image-container max-w-sm rounded-lg shadow-2xl" />
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