import React, { useState } from "react";
import ImageSearch from "./../ImageSearch/ImageSearch";
import Cards from "../Cards/Cards";
import Spinner from "../Spinner/Spinner";
import useFetchImages from "../../hooks/useFetchImages";

const Main = () => {
  const [term, setTerm] = useState("");
  const [category, setCategory] = useState("food");
  const { error, imagesData, loading } = useFetchImages(term, category);

  return (
    <main className="mt-12 flex-1">
      <ImageSearch
        term={term}
        setTerm={setTerm}
        category={category}
        setCategory={setCategory}
      />
      {loading ? <Spinner /> : null}
      {error ? (
        <h1 className="capitalize text-center mt-28 text-4xl">
          an error occured, try reloading the page
        </h1>
      ) : null}
      <Cards imagesData={imagesData} loading={loading} error={error} />
    </main>
  );
};

export default Main;
