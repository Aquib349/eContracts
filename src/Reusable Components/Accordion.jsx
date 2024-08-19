import PropTypes from "prop-types";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Accordion({ heading, children, checked, backgroundColor }) {
  const [isOpen, setIsOpen] = useState(checked);

  useEffect(() => {
    setIsOpen(checked);
  }, [checked]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded bg-white cursor-pointer">
      <h2>
        <div className="relative w-full p-2.5 text-left font-medium text-gray-500 outline-none">
          <span>{heading}</span>
          <span
            className={`absolute right-2 top-4 transform transition-transform duration-500 ${
              isOpen ? "rotate-180" : ""
            }`}
            onClick={toggleAccordion}
          >
            <IoIosArrowDown />
          </span>
        </div>
      </h2>
      <Transition
        show={isOpen}
        enter="transition-max-height duration-300 ease-in-out"
        enterFrom="max-h-0"
        enterTo="max-h-screen"
        leave="transition-max-height duration-300 ease-in-out"
        leaveFrom="max-h-screen"
        leaveTo="max-h-0"
      >
        <div className="transition-max-height overflow-hidden duration-500 ease-in-out">
          <div className={`pt-1 ${backgroundColor ? "bg-gray-200" : ""}`}>
            {children}
          </div>
        </div>
      </Transition>
    </div>
  );
}

Accordion.propTypes = {
  heading: PropTypes.any,
  children: PropTypes.any,
};

export default Accordion;
