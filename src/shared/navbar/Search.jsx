import { IoSearchSharp } from "react-icons/io5";
import { TiInfoLarge } from "react-icons/ti";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        <IoSearchSharp />
      </button>

      {/* <!-- Dropdown menu --> */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="dropdown"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded shadow-lg border w-80 dark:bg-gray-700"
          >
            <div className="flex flex-col p-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-md">Global Search</span>
                <span className="text-md">
                  <TiInfoLarge />
                </span>
              </div>
              <div className="grid grid-cols-3 text-xs pt-2 cursor-pointer">
                <span className="border border-slate-400 border-r-0 rounded-l flex justify-center items-center p-1">
                  Contracts
                </span>
                <span className="border border-slate-400 flex justify-center items-center p-1">
                  Documents
                </span>
                <span className="border border-slate-400 border-l-0 rounded-r flex justify-center items-center p-1">
                  Counterparty
                </span>
              </div>
              <div className="search-input pt-2">
                <input
                  type="search"
                  name="searchKeyword"
                  className="w-full outline-none border rounded p-1 text-sm"
                  placeholder="Enter Keyword"
                />
              </div>
              <div className="pt-4 flex justify-between items-center">
                <span className="text-xs hover:underline font-medium cursor-pointer">
                  Go To Advanced Search
                </span>
                <button
                  type="button"
                  className="border py-0.5 px-1.5 text-sm rounded border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                >
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Search;
