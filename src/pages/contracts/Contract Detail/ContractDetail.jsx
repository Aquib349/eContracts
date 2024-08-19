import React, { useContext } from "react";
import { VscSettingsGear } from "react-icons/vsc";
import ContractMainBody from "./main body/ContractMainBody";
import ContractSideMenu from "./side menu/ContractSideMenu";
import { summary, Settings } from "../../../constants/ContractCustomData";
import { NavLink } from "react-router-dom";
import { ToggleSideMenuContext } from "../../../context/ToggleMenuContext";

const ContractDetail = () => {
  const { show } = useContext(ToggleSideMenuContext);

  return (
    <>
      <div
        className={`transition-all duration-500 ease-in-out ${
          show ? "pl-[3.5rem]" : ""
        }`}
      >
        <div className="flex">
          {/* Sidebar content */}
          <div className="w-2/12 bg-gray-100">
            {summary.map((val) => (
              <NavLink
                to={val.link}
                key={val.id}
                className={({ isActive }) =>
                  `flex items-center gap-4 m-1 p-2 font-medium cursor-pointer border rounded hover:bg-white ${
                    isActive ? "bg-white text-black" : "text-slate-500"
                  }`
                }
              >
                <span className="text-lg">{val.icon}</span>
                <span className="">{val.name}</span>
              </NavLink>
            ))}

            <ContractSideMenu
              Title={
                <div className="flex items-center gap-4">
                  <span className="spin">
                    <VscSettingsGear />
                  </span>
                  <span className="">Settings</span>
                </div>
              }
              Data={Settings}
              Open={true}
            />
          </div>

          {/* Main body of contract detail */}
          <div className="w-10/12 bg-gray-50">
            <ContractMainBody />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractDetail;
