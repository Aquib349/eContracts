import React from "react";
import Accordion from "../../../../../../Reusable Components/Accordion";
import { LuListPlus } from "react-icons/lu";
import { BiSolidChevronDownSquare } from "react-icons/bi";
import Tooltip from "../../../../../../Reusable Components/Tooltip";

const KeyProvision = () => {
  const data = [
    {
      Notices: {
        description:
          "All notices shall be deemed effective on the date shown on the postal return receipt, or when received if made in writing by registered mail, certified mail, or overnight mail to the addresses specified.",
      },
      "Force Majeure": {
        description:
          "Neither party shall be liable for performance delays or non-performance due to causes beyond reasonable control, except for payment obligations.",
      },
      "Entire Agreement; Modification; Waiver": {
        description:
          "This Agreement constitutes the entire agreement between the parties and supersedes any prior communication or agreements. No revisions or additions will be effective unless signed by MED-EL's authorized representative.",
      },
      Severability: {
        description:
          "If any provision or portion of this Agreement is held to be illegal, invalid, or unenforceable, the remaining provisions or portions shall remain in full force and effect.",
      },
      "Authorized Signatories": {
        description:
          "The individuals signing the Agreement are warranted to be authorized to execute it on behalf of their respective parties, with no further proof of authorization required.",
      },
    },
  ];

  return (
    <>
      <div className="mt-1 border rounded">
        <Accordion
          checked={true}
          backgroundColor={false}
          heading={
            <>
              <div className="flex items-center gap-8">
                <span>Key Provision (15)</span>
                <Tooltip
                  Title={
                    <div className="text-xs flex gap-0.5 items-center hover:text-blue-500">
                      <span className="text-lg">
                        <LuListPlus />
                      </span>
                      <span>Add</span>
                    </div>
                  }
                  content="Add Key Provision"
                />
              </div>
            </>
          }
        >
          <>
            <div className="border border-t-0 mx-2">
              {Object.entries(data[0]).map(([key, value], index) => (
                <div key={index} className="flex text-sm border-t">
                  <div className="flex items-start w-1/3 min-w-0 font-medium p-1 bg-gray-100">
                    <p className="break-words w-full">{key} :</p>
                    <span className="pt-0.5 text-lg pl-0.5 text-slate-400 flex-shrink-0">
                      <BiSolidChevronDownSquare />
                    </span>
                  </div>
                  <span className="w-2/3 leading-4 p-1 text-slate-500">
                    {value.description}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col px-2">
              <small className="hover:text-blue-500 py-1">show 10 more</small>
              <small className="text-blue-500 py-2">
                View more about key provision for this contract type
              </small>
            </div>
          </>
        </Accordion>
      </div>
    </>
  );
};

export default KeyProvision;
