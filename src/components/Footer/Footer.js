import React from "react";

const Footer = () => {
  return (
    <div className="block my-4">
      <p className="capitalize text-right mr-4">
        data from{" "}
        <a
          href="https://pixabay.com/"
          className="text-green-700 hover:text-green-400 underline"
        >
          pixabay API
        </a>
      </p>
    </div>
  );
};

export default Footer;
