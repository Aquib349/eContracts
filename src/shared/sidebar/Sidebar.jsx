import { MdOutlineDashboard } from "react-icons/md";
import { LiaHandPointer } from "react-icons/lia";
import { BsBricks } from "react-icons/bs";
import { LiaFileContractSolid } from "react-icons/lia";
import { BsUiChecks } from "react-icons/bs";
import { useContext, useState } from "react";
import { ToggleSideMenuContext } from "../../context/ToggleMenuContext";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const sideItem = [
    { id: 1, name: "My Dashboard", icon: <MdOutlineDashboard />, links: "/" },
    {
      id: 2,
      name: "My Requests",
      icon: <LiaHandPointer />,
      links: "/requests",
    },
    { id: 3, name: "My Pipeline", icon: <BsBricks />, links: "/pipeline" },
    {
      id: 4,
      name: "My Contracts",
      icon: <LiaFileContractSolid />,
      links: "/contracts",
    },
    {
      id: 5,
      name: "My Activities",
      icon: <BsUiChecks />,
      links: "/activities",
    },
  ];
  const { show } = useContext(ToggleSideMenuContext);
  const [Active, setActive] = useState("/");
  const navigate = useNavigate();

  return (
    <div className="sidebar-component mt-14">
      <div
        className={`main blue-background h-screen fixed left-0 transition-all ease-in-out duration-500 ${
          show ? "w-14" : "w-0"
        }`}
      >
        <div className="flex flex-col gap-y-5 items-center">
          {sideItem.map((val) => (
            <div key={val.id} className="relative pt-5">
              <button
                data-tooltip-target={`tooltip-${val.id}`}
                data-tooltip-placement="right"
                type="button"
                className={`text-2xl ${show ? "block" : "hidden"} ${
                  Active === val.links ? "text-slate-200" : ""
                }`}
                onClick={() => {
                  navigate(val.links);
                  setActive(val.links);
                }}
              >
                {val.icon}
              </button>
              <div
                id={`tooltip-${val.id}`}
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm
                 opacity-0 tooltip max-w-xs whitespace-nowrap"
              >
                {val.name}
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
