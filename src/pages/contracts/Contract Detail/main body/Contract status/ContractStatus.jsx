import React from "react";
import Accordion from "../../../../../Reusable Components/Accordion";
import { StatusColor } from "../../../../../constants/StatusColor";
import TaskAndNextStep from "./TaskAndNextStep";
import ContractMetadata from "./ContractMetadata";
import RelatedProjects from "./RelatedProjects";
import PeopleAndPermission from "./PeopleAndPermission";
import RelatedContractRecords from "./RelatedContractRecords";

const ContractStatus = () => {
  return (
    <>
      <Accordion
        heading={
          <div className="status-update-component flex items-center justify-between">
            <h1 className="text-md font-semibold">Status Updates</h1>
            <button
              type="button"
              className={`rounded mr-5 bg-blue-100 border border-blue-400 px-2 py-1 text-xs text-blue-600
                hover:bg-blue-200 hover:text-blue-700`}
            >
              +Update/Post
            </button>
          </div>
        }
        backgroundColor={false}
        checked={true}
      >
        <div className="rounded border bg-blue-50 py-2 px-0.5 text-xs">
          <div className="heading-status flex items-center gap-2 text-sm font-semibold">
            <span className="text-xl">
              <StatusColor status={"New"} />
            </span>
            <span className="font-medium">
              Ready for Counterparty Signature (..
            </span>
          </div>
          <p className="pl-7 py-1">No recent updates</p>
        </div>
      </Accordion>

      {/* Task & Next step */}
      <div className="border rounded mt-1">
        <TaskAndNextStep />
      </div>

      {/* Metadata */}
      <div className="border rounded mt-1">
        <ContractMetadata />
      </div>

      {/* Related Projects */}
      <div className="border rounded mt-1">
        <RelatedProjects />
      </div>

      {/* People & Permission */}
      <div className="border rounded mt-1">
        <PeopleAndPermission />
      </div>

      {/* Related Contracts */}
      <div className="border rounded mt-1">
        <RelatedContractRecords />
      </div>
    </>
  );
};

export default ContractStatus;
