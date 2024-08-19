import React from "react";
import Milestones from "./Milestones";
import PrimaryAndPinnedDocuments from "./PrimaryAndPinnedDocuments";
import Financials from "./Financials";
import KeyProvision from "./KeyProvision";

const Summary = () => {
  return (
    <>
      <div className="relative z-0">
        {/* Primary and Pinned Documents */}
        <PrimaryAndPinnedDocuments />

        {/* key provision */}
        <KeyProvision />

        {/* Milestones */}
        <Milestones />

        {/* Financials */}
        <Financials />
      </div>
    </>
  );
};

export default Summary;
