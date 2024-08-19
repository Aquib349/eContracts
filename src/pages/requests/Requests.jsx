import { useContext } from "react";
import { ToggleSideMenuContext } from "../../context/ToggleMenuContext";

function Requests() {
  const { show } = useContext(ToggleSideMenuContext);
  return (
    <>
      <div
        className={`transition-all duration-500 ease-in-out ${
          show ? "pl-[3.5rem]" : ""
        } mx-2`}
      >
        Requests
      </div>
    </>
  );
}

export default Requests;
