import { useState, useEffect, useRef } from "react";
import { NavigateItem } from "../../constants/CustomData";

function Navigate() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState({});
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const toggleSubmenu = (id) => {
    setOpenSubmenu((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(false);
      setOpenSubmenu({});
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        id="multiLevelDropdownButton"
        onClick={toggleDropdown}
        className="border border-dashed border-black focus:outline-none focus:ring-blue-300 font-medium rounded text-xs
        px-2 py-1 text-center inline-flex items-center"
        type="button"
      >
        Navigate To
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {openDropdown && (
        <div
          id="multi-dropdown"
          className="absolute z-50 mt-4 border bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-64 transition-all duration-300 ease-in-out transform"
        >
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="multiLevelDropdownButton"
          >
            {NavigateItem.map((val) => (
              <li key={val.id} className="relative">
                <button
                  onClick={() => toggleSubmenu(val.id)}
                  className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100"
                >
                  {val.name}
                  {val.child.length > 0 && (
                    <svg
                      className="w-2.5 h-2.5 ml-3"
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
                  )}
                </button>
                {openSubmenu[val.id] && (
                  <div className="absolute left-full ml-1 top-0 shadow-lg border z-50 bg-white divide-y divide-gray-100 rounded-lg w-52 transition-all duration-300 ease-in-out transform">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      {val.child.map((child) => (
                        <li key={child.id}>
                          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                            {child.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navigate;
