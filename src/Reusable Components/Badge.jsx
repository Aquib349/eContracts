import React from "react";

const Badge = ({ item, RemoveSelectedItems }) => {
  return (
    <>
      <span
        id="badge-dismiss-default"
        className="inline-flex items-center px-2 py-1 me-2 text-xs font-medium text-blue-800 bg-blue-100 rounded mt-2 mb-6"
      >
        {item["Legal Entity"]}
        <button
          type="button"
          onClick={() => RemoveSelectedItems(item["Legal Entity"])}
          className="inline-flex items-center p-1 ms-2 text-xs text-red-500 bg-transparent rounded-sm hover:bg-red-200
            hover:text-red-600"
          data-dismiss-target="#badge-dismiss-default"
          aria-label="Remove"
        >
          <svg
            className="w-2 h-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Remove badge</span>
        </button>
      </span>
    </>
  );
};

export default Badge;
