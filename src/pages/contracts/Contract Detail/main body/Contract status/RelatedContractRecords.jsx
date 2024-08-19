import React from "react";
import { FiEdit } from "react-icons/fi";
import Accordion from "../../../../../Reusable Components/Accordion";
import Tooltip from "../../../../../Reusable Components/Tooltip";

const RelatedContractRecords = () => {
  return (
    <>
      <div className="mt-1">
        <Accordion
          heading={
            <div className="status-update-component flex items-center justify-between">
              <h1 className="text-md font-semibold">
                Related Contract Records
              </h1>
              <div className="flex items-center gap-2 pr-5">
                <Tooltip Title={<FiEdit />} content="Edit" />
              </div>
            </div>
          }
          backgroundColor={false}
          checked={false}
        >
          <p className="text-slate-400 text-sm px-2">No Items Found.</p>
        </Accordion>
      </div>
    </>
  );
};

export default RelatedContractRecords;
