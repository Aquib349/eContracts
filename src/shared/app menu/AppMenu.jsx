import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { TbGridDots } from "react-icons/tb";
import { NavigateItem } from "../../constants/CustomData";
import "./AppMenu.css";

const AppMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mouseHover, setMouseHover] = useState(false);
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
    <>
      <div className="relative inline-block" ref={dropdownRef}>
        <button
          id="dropdownDefaultButton"
          onClick={toggleDropdown}
          type="button"
          className="text-[1.7rem] pt-2"
        >
          <TbGridDots />
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
              className="absolute left-[-5%] mt-1 z-10 bg-black/90 divide-y divide-gray-100 rounded-xl shadow-lg w-80"
            >
              {/* content */}
              <div className="grid grid-cols-3 gap-x-4 gap-y-8 px-4 py-8">
                {NavigateItem.map((val) => (
                  <div
                    key={val.id}
                    className="relative text-center text-white text-sm hover:bg-white/15 rounded-xl"
                    onMouseEnter={() => setMouseHover(val.name)}
                    onMouseLeave={() => setMouseHover("")}
                  >
                    <div className="text-blue-200 text-3xl flex flex-col justify-center items-center p-2">
                      {typeof val.icon === "string" ? (
                        <img src={val.icon} alt="logo" className="w-8 h-8" />
                      ) : (
                        <span className="text-4xl">{val.icon}</span>
                      )}
                    </div>
                    <span className="pb-2 block overflow-hidden text-ellipsis whitespace-nowrap w-full">
                      {val.name}
                    </span>
                    {mouseHover === val.name && (
                      <div
                        className="absolute left-0 top-full mt-1 w-max bg-white text-black px-2 py-1 rounded-md"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {val.name}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default AppMenu;
