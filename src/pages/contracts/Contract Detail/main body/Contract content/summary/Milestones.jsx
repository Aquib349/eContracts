import React from "react";
import { LuListPlus } from "react-icons/lu";
import Accordion from "../../../../../../Reusable Components/Accordion";
import Tooltip from "../../../../../../Reusable Components/Tooltip";
import { BiSolidChevronDownSquare } from "react-icons/bi";

const Milestones = () => {
  return (
    <>
      <div className="mt-1 pb-2 border rounded">
        <Accordion
          checked={true}
          backgroundColor={false}
          heading={
            <>
              <div className="flex items-center gap-8">
                <span>Milestones (11)</span>
                <Tooltip
                  Title={
                    <div className="text-xs flex gap-0.5 items-center hover:text-blue-500">
                      <span className="text-lg">
                        <LuListPlus />
                      </span>
                      <span>Add</span>
                    </div>
                  }
                  content="Add Milestone"
                />
              </div>
            </>
          }
        >
          <>
            <div className="px-2 text-sm">
              <div className="flex flex-col py-1">
                <span className="">05/19/2021</span>
                <span className="">Initial Term Start Date</span>
              </div>
              <div className="flex flex-col py-1">
                <span className="">05/19/2022</span>
                <span className="">End Date (Overall Contract Record)</span>
              </div>
              <div className="flex flex-col py-1">
                <span className="">05/19/2022</span>
                <span className="">Initial Term End Date</span>
              </div>

              <div className=""></div>
            </div>

            <div className="text-sm pl-4 pt-4">
              <div className="flex items-center">
                <div className="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded outline-none"
                  />
                </div>
                <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 rounded ml-1 border border-red-800">
                  Red
                </span>
                <span className="text-md font-medium">Renewal Term Start</span>
                <span className="pt-0.5 text-lg pl-0.5 text-slate-400 flex-shrink-0">
                  <BiSolidChevronDownSquare />
                </span>
              </div>
              <div className="pt-1 text-[0.8rem]">
                <div className="flex items-start">
                  <span className="text-slate-500 w-1/7">
                    Start / Due Date:
                  </span>
                  <span className="w-6/7 px-1">05/19/2022</span>
                </div>
                <div className="flex">
                  <span className="text-slate-500 1/7">Description:</span>
                  <span className="w-6/7 px-1 leading-4 pt-0.5">
                    Provided that no termination notice has been given, this
                    date marks the beginning of a successive one-year renewal
                    term fol..
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm px-4 pt-4 hover:text-blue-500">show more</p>
          </>
        </Accordion>
      </div>
    </>
  );
};

export default Milestones;
