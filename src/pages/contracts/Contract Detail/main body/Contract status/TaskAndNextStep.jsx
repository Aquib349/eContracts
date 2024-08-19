import React from "react";
import Accordion from "../../../../../Reusable Components/Accordion";
import { LuGanttChartSquare } from "react-icons/lu";
import { LuListPlus } from "react-icons/lu";
import Tooltip from "../../../../../Reusable Components/Tooltip";

const TaskAndNextStep = () => {
  return (
    <>
      <div className="mt-1">
        <Accordion
          heading={
            <div className="status-update-component flex items-center justify-between">
              <h1 className="text-md font-semibold">Task & Next Step</h1>
              <div className="flex items-center gap-2 pr-5">
                <Tooltip Title={<LuGanttChartSquare />} content="View All" />
                <div className="flex items-center">
                  <Tooltip
                    Title={
                      <span className="text-lg">
                        <LuListPlus />
                      </span>
                    }
                    content="Add a Task"
                  />
                  <span className="text-xs pt-1">Add</span>
                </div>
              </div>
            </div>
          }
          backgroundColor={false}
          checked={false}
        >
          <p className="text-slate-400 text-sm px-2">No delayed and Upcoming Task</p>
        </Accordion>
      </div>
    </>
  );
};

export default TaskAndNextStep;
