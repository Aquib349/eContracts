import React from "react";
import Accordion from "../../../../../../Reusable Components/Accordion";
import { VscFilePdf } from "react-icons/vsc";
import { FcLock } from "react-icons/fc";
import { LuChevronDownSquare } from "react-icons/lu";
import Tooltip from "../../../../../../Reusable Components/Tooltip";

const PrimaryAndPinnedDocuments = () => {
  return (
    <>
      <div className="border rounded relative">
        <Accordion
          heading={"Primary And Pinned Document(s) (1)"}
          backgroundColor={false}
          checked={true}
        >
          <div className="flex items-center gap-1.5 p-2 pb-8">
            <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2 py-0.5 rounded">
              Default
            </span>
            <span className="text-red-500">
              <VscFilePdf />
            </span>
            <span>University Hospitals Cleveland 05-19-21 to 05-19-22.pdf</span>
            <small className="text-slate-400 px-1">4 months ago</small>
            <Tooltip Title={"📑"} content="Primary document" position="bottom" />
            <Tooltip
              Title={
                <span className="text-lg">
                  <FcLock />
                </span>
              }
              content="Finalized document"
              position="bottom"
            />
            <Tooltip
              Title={
                <span className="text-slate-400">
                  <LuChevronDownSquare />
                </span>
              }
              content="Open menu"
              position="bottom"
            />
          </div>
        </Accordion>
      </div>
    </>
  );
};

export default PrimaryAndPinnedDocuments;
