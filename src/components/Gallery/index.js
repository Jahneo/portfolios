import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/portfolio/0.jpg";
function Gallery(props) {
  const currentCategory = {
    name: "portfolio",
    description:
      "Photos of projects",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div>
          <img
           src={photo}
           alt="Portfolio Example"
           className="img-thumbnail mx-1"
          />
      </div>
    </section>
  );
}
export default Gallery;