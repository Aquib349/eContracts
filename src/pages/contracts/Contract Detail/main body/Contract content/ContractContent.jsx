import React from "react";
import { Outlet } from "react-router-dom";

const ContractContent = () => {
  return (
    <>
      <div className="contract-content">
        <Outlet />
      </div>
    </>
  );
};

export default ContractContent;
