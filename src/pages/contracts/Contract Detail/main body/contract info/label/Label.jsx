import React, { useState } from "react";
import { BsTags } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";
import Modal from "../../../../../../Reusable Components/Modal";
import Tooltip from "../../../../../../Reusable Components/Tooltip";

const Label = () => {
  const Labels = [];
  const [showModal, setShowModal] = useState(false);
  const [LabelMode, setLabelMode] = useState("");

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      {showModal && (
        <Modal
          heading={LabelMode}
          toggleModal={toggleModal}
          set_Width={"medium"}
        >
          Hi
        </Modal>
      )}
      <div className="labels px-14 pt-2 flex items-center">
        <span
          id="badge-dismiss-indigo"
          className={`inline-flex items-center px-2 py-0.5 me-2 text-xs border border-indigo-400 font-medium text-indigo-800
        bg-indigo-200 rounded ${Labels.length > 0 ? "" : "hidden"}`}
        >
          Indigo
          <button
            type="button"
            className="inline-flex items-center p-1 ms-2 text-sm text-indigo-600 bg-transparent rounded-sm
            hover:text-indigo-900 hover:bg-indigo-400"
            data-dismiss-target="#badge-dismiss-indigo"
            aria-label="Remove"
          >
            <svg
              className="w-2 h-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Remove badge</span>
          </button>
        </span>
        <span className="text-xl">
          <Tooltip
            Title={
              Labels.length > 0 ? (
                <RiEdit2Fill
                  onClick={() => {
                    setLabelMode("Edit Labels");
                    setShowModal(!showModal);
                  }}
                />
              ) : (
                <span
                  className="flex items-center gap-2 text-sm"
                  onClick={() => {
                    setLabelMode("Add Labels");
                    setShowModal(!showModal);
                  }}
                >
                  <BsTags /> Add Label
                </span>
              )
            }
            content={Labels.length > 0 ? "Edit labels" : "Add Labels"}
          />
        </span>
      </div>
    </>
  );
};

export default Label;
