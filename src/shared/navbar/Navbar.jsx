import { TbGridDots } from "react-icons/tb";
import { useContext } from "react";
import { ToggleSideMenuContext } from "../../context/ToggleMenuContext";
import Drawer from "../../Elements/Drawer";
import Navigate from "./Navigate";
import Navlist from "./Navlist";
import Search from "./Search";

function Navbar() {
  const { show, setShow, Title, setTitle } = useContext(ToggleSideMenuContext);

  return (
    <>
      <nav className="blue-background fixed top-0 w-full z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 relative">
          <span className="text-[1.7rem] text-black absolute left-[-2%] top-4 cursor-pointer">
            <TbGridDots onClick={() => setShow(!show)} />
          </span>
          <div className="flex items-center gap-3">
            <img
              src="https://econtracts2412.blob.core.windows.net/companylogo/companylogo_egPTzQev.gif"
              className="h-10"
              alt="eContract Logo"
            />
            {/* navigate to */}
            <Navigate />
          </div>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-gray-700 rounded-lg md:hidden
            focus:outline-none focus:ring-2 hover:ring-2"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {/* search button */}
            <Search />

            {/* navlist */}
            <Navlist setTitle={setTitle} />
          </div>
        </div>
      </nav>
      <Drawer title={Title} />
    </>
  );
}

export default Navbar;