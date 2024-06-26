import { FiFlag } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";
import { HiUsers } from "react-icons/hi";
import PropTypes from "prop-types";
import Tooltip from "../../../Elements/Tooltip";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { EditReqeustContext } from "../../../context/EditRequestContext";

function SingleRequestDetails({ Data, RowKey }) {
  const navigate = useNavigate();
  const { EditRequestMetaData, setEditRequestMode, setRequestID } =
    useContext(EditReqeustContext);
  const dateObject = new Date();
  return (
    <>
      <div className="bg-white shadow-sm">
        <div className="border-b p-4">
          <div className="flex justify-between">
            <h1 className="pb-4 text-2xl font-semibold">
              {Data?.Metadata?.RequestTitle?._text}
            </h1>
            <button
              type="button"
              className={`flex h-8 items-center justify-center rounded border border-slate-500 px-4 text-sm text-slate-400 hover:bg-slate-500 hover:text-white ${
                Data?.Metadata?.Status?._text === "Request Completed"
                  ? "hidden"
                  : "static"
              }`}
              onClick={() => {
                EditRequestMetaData(RowKey);
                setRequestID(RowKey);
                setEditRequestMode(true);
                navigate("/newRequest");
              }}
            >
              Edit
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">{Data?.Metadata?.ContractArea?._text}</div>
            <div className="flex items-center gap-2 text-lg">
              <Tooltip
                message="Request will be due on this date"
                header={<LuCalendarDays />}
              />
              <span className="pt-1 text-sm">
                {dateObject.toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Tooltip
                message="Request is assigned to this user"
                header={<HiUsers />}
              />
              <span className="pt-1 text-sm">
                {Data?.Metadata?.AssignedTo?._text}
              </span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Tooltip message="Priority" header={<FiFlag />} />
              <span className="pt-1 text-sm">
                {Data?.Metadata?.Priority?._text}
              </span>
            </div>
          </div>
          <p className="pt-4 text-xs leading-4 text-slate-500">
            {Data?.Metadata?.Description?._text}
          </p>
        </div>

        {/* All the details of single request */}
        <div className="sigle-request-detail px-4 text-sm">
          <div className="grid grid-cols-5 items-center py-2">
            <span className="col-span-2 text-slate-500">Business Area</span>
            <span className="col-span-3">
              {Data?.Metadata?.BusinessArea?._text
                ? Data?.Metadata?.BusinessArea?._text
                : "-"}
            </span>
          </div>
          <div className="grid grid-cols-5 items-center py-2">
            <span className="col-span-2 text-slate-500">Request Number</span>
            <span className="col-span-3">
              {Data?.Metadata?.RequestNumber?._text
                ? Data?.Metadata?.RequestNumber?._text
                : "-"}
            </span>
          </div>
          <div className="grid grid-cols-5 items-center py-2">
            <span className="col-span-2 text-slate-500">Request Name</span>
            <span className="col-span-3">
              {Data?.Metadata?.Requestor?._text
                ? Data?.Metadata?.Requestor?._text
                : "-"}
            </span>
          </div>
          <div className="grid grid-cols-5 items-center py-2">
            <span className="col-span-2 text-slate-500">
              Request Approver (s)
            </span>
            <span className="col-span-3">
              {Data?.Metadata?.RequestApprover?._text
                ? Data?.Metadata?.RequestApprover?._text
                : "-"}
            </span>
          </div>
          <div className="grid grid-cols-5 items-center py-2">
            <span className="col-span-2 text-slate-500">
              Desired Signature Date
            </span>
            <span className="col-span-3">
              {Data?.Metadata?.DesiredSignatureDate?._text
                ? Data?.Metadata?.DesiredSignatureDate?._text.split(" ")[0] ??
                  "-"
                : "-"}
            </span>
          </div>
          <div className="grid grid-cols-5 items-center py-2">
            <span className="col-span-2 text-slate-500">Counterparty</span>
            <span className="col-span-3">
              {Data?.Metadata?.Counterparty?._text
                ? Data?.Metadata?.Counterparty?._text
                : "-"}
            </span>
          </div>
          <div className="grid grid-cols-5 items-center py-2">
            <span className="col-span-2 text-slate-500">
              Counterparty Mailing Address
            </span>
            <span className="col-span-3">
              {Data?.Metadata?.CounterpartyMailingAddress?._text
                ? Data?.Metadata?.CounterpartyMailingAddress?._text
                : "-"}
            </span>
          </div>
          <div className="grid grid-cols-5 items-center py-2">
            <span className="col-span-2 text-slate-500">
              Counterparty Emcol-span-3ail Address (and Contact Name)
            </span>
            <span className="">
              {Data?.Metadata?.CounterpartyEmailAddressandContactName?._text
                ? Data?.Metadata?.CounterpartyEmailAddressandContactName?._text
                : "-"}
            </span>
          </div>
          <div className="grid grid-cols-5 items-center py-2">
            <span className="col-span-2 text-slate-500">Data Privacy</span>
            <span className="col-span-3">
              {Data?.Metadata?.DataPrivacy?._text
                ? Data?.Metadata?.DataPrivacy?._text
                : "-"}
            </span>
          </div>
          <div className="grid grid-cols-5 items-center py-2">
            <span className="col-span-2 text-slate-500">Goverment Related</span>
            <span className="col-span-3">
              {Data?.Metadata?.GovernmentRelated?._text
                ? Data?.Metadata?.GovernmentRelated?._text
                : "-"}
            </span>
          </div>
          <div className="grid grid-cols-5 items-center py-2">
            <span className="col-span-2 text-slate-500">
              Health Care Professional
            </span>
            <span className="col-span-3">
              {Data?.Metadata?.HealthCareProfessional?._text
                ? Data?.Metadata?.HealthCareProfessional?._text
                : "-"}
            </span>
          </div>
          <div className="grid grid-cols-5 items-center py-2">
            <span className="col-span-2 text-slate-500">
              Additional Comments
            </span>
            <span className="col-span-3">
              {Data?.Metadata?.AdditionalComments?._text
                ? Data?.Metadata?.AdditionalComments?._text
                : "-"}
            </span>
          </div>
          <div className="grid grid-cols-5 items-center py-2">
            <span className="col-span-2 text-slate-500">Project</span>
            <span className="col-span-3">
              {Data?.Metadata?.Project?._text
                ? Data?.Metadata?.Project?._text
                : "-"}
            </span>
          </div>
          <div className="grid grid-cols-5 items-center py-2">
            <span className="col-span-2 text-slate-500">Created By</span>
            <span className="col-span-3">
              {Data?.Metadata?.CreatedBy?._text
                ? Data?.Metadata?.CreatedBy?._text
                : "-"}
            </span>
          </div>
          <div className="grid grid-cols-5 items-center py-2">
            <span className="col-span-2 text-slate-500">Created On</span>
            <span className="col-span-3">
              {Data?.Metadata?.Created?._text
                ? Data?.Metadata?.Created?._text.split(" ")[0] ?? "-"
                : "-"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

SingleRequestDetails.propTypes = {
  Data: PropTypes.object.isRequired,
};

export default SingleRequestDetails;
