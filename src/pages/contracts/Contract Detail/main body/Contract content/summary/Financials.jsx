import React from "react";
import Tooltip from "../../../../../../Reusable Components/Tooltip";
import Accordion from "../../../../../../Reusable Components/Accordion";
import { FiEdit } from "react-icons/fi";

const Financials = () => {
  return (
    <>
      <div className="mt-1 border rounded">
        <Accordion
          heading={
            <div className="status-update-component flex items-center gap-3">
              <h1 className="text-md font-semibold">Financials</h1>
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

export default Financials;
