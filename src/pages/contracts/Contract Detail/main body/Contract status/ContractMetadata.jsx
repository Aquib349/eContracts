import React from "react";
import { FiEdit } from "react-icons/fi";
import { LuGanttChartSquare } from "react-icons/lu";
import Accordion from "../../../../../Reusable Components/Accordion";
import Tooltip from "../../../../../Reusable Components/Tooltip";

const ContractMetadata = () => {
  const data = {
    Number: 1000,
    Record: {
      Counterparty: "University Hospitals Health System, Inc.",
      "Business Area": "Finance > Finance- Business Area",
      "Created on": "04/01/2024",
      "Created by": "Santosh Dutta",
      "Legal Entity": "MED-EL Corporation",
      Type: "Master Sales Agreement (MED-EL US)",
      "Contract Term Type": "Renewable",
      "CI 1 AP Agreement Price": "Not Available",
      "CI Discount": "Not Available",
      "BB Implant Agreement Price": "Not Available",
      "BB Goal": "Not Available",
      "ADHEAR Agreement Price": "Not Available",
    },
  };
  return (
    <>
      <div className="mt-1">
        <Accordion
          heading={
            <div className="status-update-component flex items-center justify-between">
              <h1 className="text-md font-semibold">Metadata</h1>
              <div className="flex items-center gap-2 pr-5">
                <Tooltip Title={<LuGanttChartSquare />} content="View All" />
                <Tooltip Title={<FiEdit />} content="Edit" />
              </div>
            </div>
          }
          backgroundColor={false}
          checked={false}
        >
          <div className="flex flex-col px-3 text-sm">
            {Object.entries(data.Record).map(([key, value], index) => (
              <div key={index} className="flex gap-4 pb-1.5">
                <span className="w-1/3 font-medium text-slate-500">
                  {key} :
                </span>
                <span className="w-2/3">{value}</span>
              </div>
            ))}
          </div>
        </Accordion>
      </div>
    </>
  );
};

export default ContractMetadata;
