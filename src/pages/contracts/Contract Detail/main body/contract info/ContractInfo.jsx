import React from "react";
import { PiFolderOpenFill } from "react-icons/pi";
import Tooltip from "../../../../../Reusable Components/Tooltip";
import { FiUsers } from "react-icons/fi";
import { BsBuildings } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import Label from "./label/Label";
import ContractTerm from "./contract term/ContractTerm";

const ContractInfo = ({ Title, content }) => {
  return (
    <>
      <div className="flex gap-2">
        <span className="text-5xl">
          <PiFolderOpenFill />
        </span>
        <div className="pt-1">
          <h4 className="text-2xl font-medium">{Title}</h4>
          <p className="mb-3 mt-1 text-sm text-left rtl:text-right text-gray-400 dark:text-gray-400">
            {content}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center text-sm px-14">
        <div className="flex items-center gap-2">
          <span className="">
            <Tooltip Title={<FiUsers />} content={"Contract Owner(s)"} />
          </span>
          <span>Hariharan N</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="">
            <Tooltip Title={<BsBuildings />} content={"Counterparty"} />
          </span>
          <span>University Hospitals Health System, Inc.</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="">
            <Tooltip Title={<FaRegMoneyBillAlt />} content={"Contract value"} />
          </span>
          <span>$0.00</span>
        </div>
      </div>

      {/* label */}
      <Label/>
      <hr className="ml-14 mt-1" />

      {/* contract term */}
      <ContractTerm/>
    </>
  );
};

export default ContractInfo;
