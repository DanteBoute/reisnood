import React from "react";
import "./BlogIntro.css";

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
          <div className="blogArticleImageSet">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="blogIntroRightColumn col-start-3">
          <h2 className="blogIntroRightTitel">Hello</h2>
        </div>
      </div>
    </>
  );
};

export default BlogIntro;
