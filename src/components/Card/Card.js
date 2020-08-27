import React from "react";

const Card = ({ img, owner, tags, cardStyle, downloads, likes, views }) => {
  return (
    <div className={"rounded overflow-hidden shadow-lg mt-4 " + cardStyle}>
      <img
        className={
          "w-full h-48 object-cover " +
          (cardStyle === "big" || cardStyle === "vertical"
            ? "sm:h-130"
            : "sm:h-48")
        }
        src={img}
        alt="CARD"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 capitalize">
          photo by <span className="text-green-500">{owner}</span>
        </div>
        <p className="text-gray-700 text-base pl-4">
          <strong className="capitalize">views</strong> : {views}
        </p>
        <p className="text-gray-700 text-base pl-4">
          <strong className="capitalize">downloads</strong> : {downloads}
        </p>
        <p className="text-gray-700 text-base pl-4">
          <strong className="capitalize">likes</strong> : {likes}
        </p>
      </div>
      <div className="px-6 pt-2 pb-1">
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #&nbsp;{tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
