import React from "react";

const EntriesPerPage = ({ onChange }) => {
  return (
    <>
      <div className="max-w-sm flex items-center gap-2">
        <label htmlFor="entries" className="block text-md">
          show
        </label>
        <select
          id="entries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
               focus:border-blue-500 block p-2"
          onChange={onChange}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <span className="text-md w-full">entries</span>
      </div>
    </>
  );
};

export default EntriesPerPage;
