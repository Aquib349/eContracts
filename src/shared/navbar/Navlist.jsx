import { NavItems } from "../../constants/CustomData";
import PropTypes from "prop-types";

function Navlist({ setTitle }) {
  return (
    <>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded bg-gray-50 md:flex-row
             md:space-x-6 rtl:space-x-reverse md:mt-0 md:bg-transparent"
        >
          {NavItems.map((val) => (
            <li
              key={val.id}
              className="flex items-center cursor-pointer md:hover:bg-transparent hover:bg-gray-200 rounded"
            >
              <button
                data-tooltip-target={`tool-${val.id}`}
                data-tooltip-placement="bottom"
                type="button"
                className="block py-3 md:py-2 px-2 md:px-3 text-xl rounded md:bg-transparent relative"
                {...(val.id === 1 || val.id === 2 || val.id === 3
                  ? {
                      "data-drawer-target": "drawer-right-example",
                      "data-drawer-show": "drawer-right-example",
                      "data-drawer-placement": "right",
                      "aria-controls": "drawer-right-example",
                    }
                  : {})}
                onClick={() => {
                  setTitle(
                    val.id === 1 || val.id === 2 || val.id === 3
                      ? `My ${val.name}`
                      : ""
                  );
                }}
              >
                {val.icon}
                <div
                  className={`${
                    val.id === 1 || val.id === 2
                      ? "absolute top-0 right-1 bg-red-500 w-auto rounded-full text-[0.6rem] flex justify-center items-center p-1 h-4 text-white"
                      : "hidden"
                  }`}
                >
                  4
                </div>
              </button>

              <div
                id={`tool-${val.id}`}
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                {val.name}
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <span className="md:hidden text-black">{val.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

Navlist.propTypes = {
  setTitle: PropTypes.func,
};

export default Navlist;
