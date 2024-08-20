import { useContext, useEffect } from "react";
import { ToggleSideMenuContext } from "../../context/ToggleMenuContext";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Contracts() {
  const { show } = useContext(ToggleSideMenuContext);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/contractDetail/summary");
  }, []);
  return (
    <>
      <div
        className={`transition-all duration-500 ease-in-out ${
          show ? "pl-[3.5rem]" : ""
        }`}
      >
        <Outlet />
        {/* <Link to="/contractDetail/summary">To Contract Detail</Link> */}
      </div>
    </>
  );
}
export default Contracts;
