import React from "react";
import RenewalTersmsAndStatus from "./renewal terms & status/RenewalTersmsAndStatus";
import RenewalActivity from "./renewal activity/RenewalActivity";
import RenewalAuthorization from "./renewal authorization/RenewalAuthorization";
import CounterpartyNotices from "./counterparty notices/CounterpartyNotices";
import Reminders from "./reminders/Reminders";

const Renewable = () => {
  return (
    <>
      <div className="renewable-term-type relative">
        {/* Renewal terms & status */}
        <RenewalTersmsAndStatus />

        {/* Renewal activity */}
        <RenewalActivity />

        {/* Renewal Authorization */}
        <RenewalAuthorization />

        {/* Counterparty Notices / Renewal decision */}
        <CounterpartyNotices />

        {/* Reminders */}
        <Reminders />
      </div>
    </>
  );
};

export default Renewable;
