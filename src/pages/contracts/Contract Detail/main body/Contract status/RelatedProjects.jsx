import React from "react";
import Accordion from "../../../../../Reusable Components/Accordion";

const RelatedProjects = () => {
  return (
    <>
      <div className="mt-1">
        <Accordion
          heading={
            <div className="status-update-component flex items-center justify-between">
              <h1 className="text-md font-semibold">Related Projects</h1>
            </div>
          }
          backgroundColor={false}
          checked={false}
        >
          <p className="text-slate-400 text-sm px-2">No Items found.</p>
        </Accordion>
      </div>
    </>
  );
};

export default RelatedProjects;
