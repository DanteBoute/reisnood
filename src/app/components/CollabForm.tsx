import React from "react";
import "./CollabForm.css";
import Carousel1 from "../../../public/images/ZwartStrandTessa.jpg";
import Carousel2 from "../../../public/images/TessaKano.jpeg";
import Carousel3 from "../../../public/images/TessaGeleRugzak.jpg";
import Carousel4 from "../../../public/images/TessaRodeJas.png";

const ContactForm: React.FC = () => {
  return (
    <>
      <div className="fullDiv">
        <div className="leftSideDiv">
          <div className="verticalCarousel">
            <div className=" h-96 carousel carousel-vertical rounded-box">
              <div className="carouselImage image-container carousel-item h-full">
                <img src={Carousel1.src} />
              </div>
              <div className="carouselImage image-container carousel-item h-full">
                <img src={Carousel2.src} />
              </div>
              <div className="carouselImage image-container carousel-item h-full">
                <img src={Carousel3.src} />
              </div>
            </div>
          </div>
        </div>
        <div className="rightSideDiv">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="firstName">Voornaam</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Typ hier je voornaam"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Naam</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Typ hier je naam"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Typ hier je email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Onderwerp</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Typ hier je onderwerp"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Bericht</label>
              <textarea
                id="message"
                name="message"
                placeholder="Typ hier jouw bericht"
                rows={4}
                required
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Verstuur
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
