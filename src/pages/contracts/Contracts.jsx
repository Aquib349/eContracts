import { useContext } from "react";
import { ToggleSideMenuContext } from "../../context/ToggleMenuContext";
import { Link, Outlet } from "react-router-dom";

function Contracts() {
  const { show } = useContext(ToggleSideMenuContext);
  return (
    <>
      <div
        className={`transition-all duration-500 ease-in-out ${
          show ? "pl-[3.5rem]" : ""
        }`}
      >
        <Outlet />
        <Link to="/contractDetail/summary">To Contract Detail</Link>
      </div>
    </>
  );
}
export default Contracts;
