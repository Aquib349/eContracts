import React from "react";

const Button = ({ children, Default, onClick }) => {
  return (
    <>
      {Default ? (
        <button
          type="button"
          onClick={onClick}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
        font-medium rounded text-sm px-5 py-2 me-2 mb-2 focus:outline-none"
        >
          {children}
        </button>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className="py-2 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-100 rounded border
           border-gray-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
