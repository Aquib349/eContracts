import React from "react";
import { FiEdit } from "react-icons/fi";
import { LuGanttChartSquare } from "react-icons/lu";
import Accordion from "../../../../../Reusable Components/Accordion";
import Tooltip from "../../../../../Reusable Components/Tooltip";

const PeopleAndPermission = () => {
  // Data is an array with a single object
  const data = [
    {
      Owner: "Hariharan N",
      Approvers: "Not Available",
      Reviewers: "Not Available",
      "Project Manager": "Not Available",
      Requestor: "Not Available",
      "Business Owner(s)": "Not Available",
      "Contract Role": "Not Available",
      "Contract Reviewer": "Not Available",
      Reviewer: "Not Available",
    },
  ];

  return (
    <div className="mt-1">
      <Accordion
        heading={
          <div className="status-update-component flex items-center justify-between">
            <h1 className="text-md font-semibold">People & Permission</h1>
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
          {/* Access the first item in the data array */}
          {Object.entries(data[0]).map(([key, value], index) => (
            <div key={index} className="flex gap-4 pb-1.5">
              <span className="w-1/3 font-medium text-slate-500">{key}:</span>
              <span className="w-2/3">{value}</span>
            </div>
          ))}
        </div>
      </Accordion>
    </div>
  );
};

export default PeopleAndPermission;
