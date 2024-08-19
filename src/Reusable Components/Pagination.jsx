import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i}>
          <button
            type="button"
            onClick={() => onPageChange(i)}
            className={`flex items-center justify-center px-3 h-8 leading-tight ${
              i === currentPage
                ? "text-blue-600 bg-blue-50 border border-blue-300"
                : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            {i}
          </button>
        </li>
      );
    }
    return pages;
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="flex items-center -space-x-px h-8 text-sm mt-2">
        <li>
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0
             border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300
             rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
