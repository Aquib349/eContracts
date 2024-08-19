import React from "react";
import Accordion from "../../../../Reusable Components/Accordion";

const ContractSideMenu = ({ Title, Data, Open }) => {
  return (
    <>
      <div className="pb-1 px-1">
        <Accordion heading={Title} backgroundColor={false} checked={Open}>
          <div className="bg-white divide-y divide-gray-100 rounded shadow w-full dark:bg-gray-700">
            {Data.map((val) => (
              <div
                key={val.id}
                className="p-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center"
                aria-labelledby="dropdownDefaultButton"
              >
                <span className="text-slate-400 text-xl">{val.icon}</span>
                <span className="block px-4 text-gray-500">{val.name}</span>
              </div>
            ))}
          </div>
        </Accordion>
      </div>
    </>
  );
};

export default ContractSideMenu;
