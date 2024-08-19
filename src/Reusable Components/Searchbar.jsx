import React from "react";

const Searchbar = ({ placeholder, onChange, value }) => {
  return (
    <>
      <div className="max-w-md w-full">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50
             focus:ring-gray-500 focus:border-gray-500"
            placeholder={placeholder || "Search Mockups"}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

export default Searchbar;
