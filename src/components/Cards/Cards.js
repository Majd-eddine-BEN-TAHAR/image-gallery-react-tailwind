import React from "react";
import Card from "../Card/Card";

const Cards = ({ error, imagesData }) => {
  const indexArray = ["horizontal", "vertical", "big"];
  let cardConteiner = (
    <div className="mt-4 p-4 grid grid-cols-13 gap-3 grid-auto-rows grid-auto-flow">
      {/* add some spinner for loading */}
      {imagesData.length === 0 && !error ? (
        <h1 className="capitalize text-center mt-28 text-4xl">
          no images found
        </h1>
      ) : (
        imagesData.map((imageData) => {
          return (
            <Card
              cardStyle={indexArray[(indexArray.length * Math.random()) | 0]}
              key={imageData.id}
              img={imageData.webformatURL}
              owner={imageData.user}
              tags={imageData.tags.split(",")}
              downloads={imageData.downloads}
              likes={imageData.likes}
              views={imageData.views}
            />
          );
        })
      )}
    </div>
  );
  return cardConteiner;
};

export default Cards;
