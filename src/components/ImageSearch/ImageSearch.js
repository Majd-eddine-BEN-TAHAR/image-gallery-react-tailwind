import React from "react";
import searchIcon from "./../../assets/images/search.svg";

const categories = [
  "all",
  "backgrounds",
  "fashion",
  "nature",
  "science",
  "education",
  "feelings",
  "health",
  "people",
  "religion",
  "places",
  "animals",
  "industry",
  "computer",
  "food",
  "sports",
  "transportation",
  "travel",
  "buildings",
  "business",
  "music",
];

const ImageSearch = ({ term, setTerm, category, setCategory }) => {
  return (
    <form className="flex flex-col justify-between items-start sm:flex-row w-full max-w-screen-md mx-auto pb-1">
      <div className="relative w-10/12 sm:w-5/12 mx-auto mt-2 sm:mr-8 border-b-2  border-green-400 focus-within:border-green-600 duration-100">
        <label className="text-2xl text-green-800">Search by term :</label>
        <input
          type="text"
          placeholder="Enter some text..."
          className="w-full p-2 placeholder-gray-700 text-center"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <img
          alt="search"
          src={searchIcon}
          className="h-6 absolute right-0 bottom-1"
        />
      </div>
      <div className="relative w-10/12 sm:w-5/12 mx-auto mt-6 sm:mt-2">
        <div className="pointer-events-none absolute inset-y-0 right-0  flex items-center px-2 text-gray-700 top-50">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
        <label className="text-2xl text-green-800 block mb-4 sm:mb-0">
          Search by category :
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default ImageSearch;
