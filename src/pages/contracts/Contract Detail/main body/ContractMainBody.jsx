import React from "react";
import ContractInfo from "./contract info/ContractInfo";
import ContractContent from "./Contract content/ContractContent";
import ContractStatus from "./Contract status/ContractStatus";
import { Outlet } from "react-router-dom";

const ContractMainBody = () => {
  return (
    <>
      <div className="p-1">
        <div className="contract-Info shadow-md shadow-slate-900 border rounded-lg p-1 bg-white">
          <ContractInfo
            Title={"1000 records with 14 column 7th JUNE 2024"}
            content={
              "This Sales Agreement is between MED-EL Corporation and University Hospitals Health System, Inc. for the purchase of specific Hearing Technology Solutions referred to as 'Products,' which includes products, related services, and the rights transferred by MED-EL in performance of this Agreement"
            }
          />
        </div>
        <div className="grid grid-cols-6 pt-2 gap-1">
          <div className="col-span-4 shadow-md shadow-slate-900 border rounded-lg p-1 bg-white">
            <ContractContent />
          </div>
          <div className="col-span-2 shadow-md shadow-slate-900 border rounded-lg p-1 bg-white">
            <ContractStatus />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractMainBody;
