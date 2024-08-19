import PropTypes from "prop-types";

function Drawer({ title, children }) {
  return (
    <>
      <div
        id="drawer-right-example"
        className="fixed top-0 mt-14 right-0 z-40 h-screen overflow-y-auto transition-transform translate-x-full bg-white w-96 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <div className="border-b border-slate-300 p-2">
          <h5
            id="drawer-right-label"
            className="inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
          >
            {title}
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-right-example"
            aria-controls="drawer-right-example"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-1 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
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
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div className="drawer-body">{children}</div>
      </div>
    </>
  );
}

Drawer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Drawer;
