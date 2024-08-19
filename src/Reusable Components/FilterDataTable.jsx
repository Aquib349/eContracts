import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import EntriesPerPage from "./EntriesPerPage";
import Table from "./Table";
import Pagination from "./Pagination";
import Button from "./Button";
import {
  RemoveSelectedItems,
  toggleCheckBox,
  toggleSelectAll,
} from "../constants/CheckboxSelection";
import Badge from "./Badge";

const FilterDataTable = ({ TableHeading, TableContent }) => {
  const items = ["All", ..."#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
  const [searchTerm, setSearchTerm] = useState("");
  const [FilteredData, setFilteredData] = useState([]);
  const [filterLetter, setFilterLetter] = useState("");
  const [Active, setActive] = useState("All");

  // pagination state
  const [dataPerPage, setDataPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // checkbox select item state
  const [AllChecked, setAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);

  function FilterTableData() {
    // Filtered data based on search term
    const filteredData = TableContent.filter((row) => {
      const entityName = row["Legal Entity"];

      const searchMatchTerm = Object.values(row).some((value) => {
        // Check if value is a string before applying toLowerCase
        if (typeof value === "string") {
          return value.toLowerCase().includes(searchTerm.toLowerCase());
        }

        // For non-string values, just convert to a string and compare
        return value
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });

      if (!searchMatchTerm) {
        return false;
      }

      if (filterLetter === "All") {
        return true;
      } else {
        return entityName.startsWith(filterLetter);
      }
    });

    setFilteredData(filteredData);
  }

  useEffect(() => {
    FilterTableData();
  }, [filterLetter, searchTerm, TableContent]);

  // Calculate total pages
  const totalPages = Math.ceil(FilteredData.length / dataPerPage);

  // Get current page data
  const indexOfLastItem = currentPage * dataPerPage;
  const indexOfFirstItem = indexOfLastItem - dataPerPage;
  const currentData = FilteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // handle checkbox for selecting the items
  function handleSelectAll() {
    const { newSelectAll, newCheckedItems, updatedSelectedItems } =
      toggleSelectAll(FilteredData, AllChecked);
    setAllChecked(newSelectAll);
    setCheckedItems(newCheckedItems);
    setSelectedItems(updatedSelectedItems);
  }

  // function to handle the checkbox individually
  function handleCheckbox(row) {
    const { newCheckedItems, allChecked, updateSelectedItems } = toggleCheckBox(
      FilteredData,
      row["Legal Entity"],
      checkedItems,
      selectedItems
    );
    setCheckedItems(newCheckedItems);
    setAllChecked(allChecked);
    setSelectedItems(updateSelectedItems);
  }

  // function to remove selected item from checked list
  function removeSelectedItem(itemName) {
    const { CurrentList, updatedCheckedItems, allChecked } =
      RemoveSelectedItems(selectedItems, itemName, checkedItems);
    setSelectedItems(CurrentList);
    setCheckedItems(updatedCheckedItems);
    setAllChecked(allChecked);
  }

  return (
    <>
      <div className="">
        {/* FILTER BY LETTER */}
        <div className="flex flex-wrap justify-between gap-0.5 w-full py-2">
          {items.map((item) => (
            <span
              key={item}
              className={`cursor-pointer font-medium text-md text-blue-500 relative hover:bg-gray-100 hover:rounded
               transition-all ${Active === item ? "bg-gray-100 rounded" : ""}`}
              onClick={() => {
                setActive(item);
                setFilterLetter(item);
                setCurrentPage(1);
              }}
              style={{ padding: "1px" }}
            >
              <span
                className="relative"
                style={{ padding: "4px", transition: "background-color 0.3s" }}
              >
                {item}
              </span>
            </span>
          ))}
        </div>

        {/* ENTRIES PER PAGE & SEARCH BAR */}
        <div className="flex justify-between items-center mt-2">
          {/* ENTRIES PER PAGE */}
          <EntriesPerPage
            onChange={(e) => {
              setDataPerPage(parseInt(e.target.value, 10));
              setCurrentPage(1);
            }}
          />

          {/* SEARCH BAR */}
          <Searchbar
            placeholder="Search for legal entity"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>

        {/* DATA TABLE */}
        <Table
          headings={TableHeading}
          content={currentData}
          handleSelectAll={handleSelectAll}
          handleCheckbox={handleCheckbox}
          AllChecked={AllChecked}
          checkedItems={checkedItems}
        />

        {/* PAGINATION */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />

        {/* selected data */}
        {selectedItems.map((item, index) => (
          <Badge
            key={index}
            item={item}
            RemoveSelectedItems={removeSelectedItem}
          />
        ))}

        {/* BUTTONS */}
        <div className="absolute bottom-1 right-2">
          <Button Default={true}>OK</Button>
          <Button Default={false}>Cancel</Button>
        </div>
      </div>
    </>
  );
};

export default FilterDataTable;
