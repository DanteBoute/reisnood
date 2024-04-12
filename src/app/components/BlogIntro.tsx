import React from "react";
import "./BlogIntro.css";
import carrouselOne from "../../../public/images/KanoBirdView.jpeg";
import carrouselTwo from "../../../public/images/TessaGekleurdeHuizen.jpeg";
import carrouselThree from "../../../public/images/Petra.jpg";
import carrouselFour from "../../../public/images/TessaGeleRugzak.jpg";
import carrouselFive from "../../../public/images/TessaRodeJas.png";

const BlogIntro = () => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-1 gap-0">
        <div className="blogHead col-span-2">
          <h2 className="blogTitel">
            De ultieme reisroute voor Guatemala + tips
          </h2>
          <p className="blogIntro">
            Guatemala is één van de meest afwisselende bestemmingen van
            Midden-Amerika. Met onze reisroute voor Guatemala kun je dan ook al
            je reiswensen afvinken. Zo trek je de jungle in, beklim je een
            vulkaan, geniet je op het strand, bezoek je de leukste steden,
            ontdek je de interessante Maya cultuur en leer je alles over de
            rijke geschiedenis van het land. In Guatemala kom je alle soorten
            reizigers tegen en dat komt omdat het voor ieder wat wils heeft. Het
            reizen is er makkelijk maar heeft nog wel dat leuke avontuurlijk
            randje. Er valt genoeg te ontdekken en de meeste mooie plekken hoef
            je maar met een klein groepje andere reizigers te delen. Benieuwd
            naar wat Guatemala te bieden heeft? Bekijk hieronder de ultieme
            reisroute voor Guatemala!
          </p>
          <div className="blogArticleImageSetHorizontal">
            <img
              className="blogPageImageHorizontal shadow-2xl"
              src={carrouselOne.src}
              alt="Carrousel One"
            />
            <img
              className="blogPageImageHorizontal shadow-2xl"
              src={carrouselTwo.src}
              alt="Carrousel Two"
            />
          </div>
          <h2 className="blogTitel">
            De ultieme reisroute voor Guatemala + tips
          </h2>
          <p className="blogIntro">
            Guatemala is één van de meest afwisselende bestemmingen van
            Midden-Amerika. Met onze reisroute voor Guatemala kun je dan ook al
            je reiswensen afvinken. Zo trek je de jungle in, beklim je een
            vulkaan, geniet je op het strand, bezoek je de leukste steden,
            ontdek je de interessante Maya cultuur en leer je alles over de
            rijke geschiedenis van het land. In Guatemala kom je alle soorten
            reizigers tegen en dat komt omdat het voor ieder wat wils heeft. Het
            reizen is er makkelijk maar heeft nog wel dat leuke avontuurlijk
            randje. Er valt genoeg te ontdekken en de meeste mooie plekken hoef
            je maar met een klein groepje andere reizigers te delen. Benieuwd
            naar wat Guatemala te bieden heeft? Bekijk hieronder de ultieme
            reisroute voor Guatemala!
          </p>
          <div className="blogArticleImageSetVertical">
            <img
              className="blogPageImageVertical shadow-2xl"
              src={carrouselThree.src}
              alt="Carrousel One"
            />
            <img
              className="blogPageImageVertical shadow-2xl"
              src={carrouselFour.src}
              alt="Carrousel Two"
            />
          </div>
        </div>
        <div className="blogIntroRightColumn col-start-3">
          <div className="avatarSection bg-blue-50">
            <div className="avatar">
              <div className="rounded-full shadow-2xl">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <p className="subTextAvatar italic">
              Hey allemaal! Ik ben Tessa, een reisliefhebber die dol is op het
              ontdekken van nieuwe plekken en culturen. Op mijn blog deel ik
              graag mijn avonturen en tips. Leuk om kennis te maken!
            </p>
          </div>
          <div className="nextTripsSection bg-blue-50">
            <h2 className="nextTripsTitle">Meer Tips</h2>
            <div className="nextTripImages bg-blue-50">
              <img
                className="nextTripImage image-container max-w-sm rounded-lg shadow-2xl"
                src={carrouselOne.src}
                alt="Carrousel One"
              />
              <img
                className="nextTripImage image-container max-w-sm rounded-lg shadow-2xl"
                src={carrouselTwo.src}
                alt="Carrousel Two"
              />
              <img
                className="nextTripImage image-container max-w-sm rounded-lg shadow-2xl"
                src={carrouselThree.src}
                alt="Carrousel Three"
              />
              <img
                className="nextTripImage image-container max-w-sm rounded-lg shadow-2xl"
                src={carrouselFour.src}
                alt="Carrousel Four"
              />
              <img
                className="nextTripImage image-container max-w-sm rounded-lg shadow-2xl"
                src={carrouselFive.src}
                alt="Carrousel Five"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogIntro;
