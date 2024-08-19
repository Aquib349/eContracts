import React from "react";

const Table = ({
  headings,
  content,
  handleCheckbox,
  AllChecked,
  handleSelectAll,
  checkedItems,
}) => {
  return (
    <>
      <div className="relative overflow-auto mt-4 h-[300px] cursor-pointer border border-x-0">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={AllChecked}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer outline-none"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              {headings.map((heading, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {content.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-white border-b hover:bg-gray-50">
                <td className="px-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      checked={checkedItems[row["Legal Entity"]] || false}
                      onChange={() => handleCheckbox(row)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                {headings.map((heading, colIndex) => (
                  <td key={colIndex} className="px-6 py-2">
                    {row[heading]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
