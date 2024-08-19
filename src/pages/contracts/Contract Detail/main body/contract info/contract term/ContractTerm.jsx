import React, { useState } from "react";
import { BsCalendar2Range } from "react-icons/bs";
import { TbHelpOctagon } from "react-icons/tb";
import { TiInfoLarge } from "react-icons/ti";
import Modal from "../../../../../../Reusable Components/Modal";
import Tooltip from "../../../../../../Reusable Components/Tooltip";
import Renewable from "./term type/renewable/Renewable";
import FixedTerm from "./term type/fixed term/FixedTerm";
import Evergreen from "./term type/evergreen/Evergreen";
import Executed from "./term type/executed/Executed";

const ContractTerm = () => {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      {showModal && (
        <Modal
          heading={"Manage Contract Term & Renewals"}
          set_Width={"medium"}
          toggleModal={toggleModal}
        >
          <div className="relative px-3">
            {/* toggle reminder */}
            <label class="flex items-center justify-end cursor-pointer gap-3">
              <input type="checkbox" value="" class="sr-only peer" />
              <Tooltip
                Title={
                  <div className="flex items-center gap-0.5">
                    Active <TbHelpOctagon className="mt-1" />
                  </div>
                }
                content="Turn YES/NO Term reminders"
              />
              <div
                class="relative w-9 h-5 bg-gray-200 rounded-full peer mt-2
                    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white
                    after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300
                    after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"
              ></div>
            </label>

            {/* term type */}
            <div className="flex items-center gap-3 pt-5">
              <label
                for="countries"
                className="mb-2 w-2/3 text-sm font-medium text-gray-900 flex items-center"
              >
                Term Type <span className="text-red-500">*</span>
                <Tooltip
                  Title={<TiInfoLarge className="text-slate-400 text-xl" />}
                  content="Select the type of Contract Term from the list"
                />
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500
                focus:border-blue-500 block w-full p-1.5"
              >
                <option selected>-select-</option>
                <option value="renewable">Renewable</option>
                <option value="fixed term">Fixed Term</option>
                <option value="evergreen/perpetual">
                  Evergreen / Perpetual
                </option>
                <option value="executed/performance">
                  Executed / Performance
                </option>
              </select>
            </div>

            {/* renewal comments */}
            <div className="flex gap-3 pt-3">
              <label
                for="countries"
                className="mb-2 text-sm w-2/3 font-medium text-gray-900 flex"
              >
                Renewal/Termination comments
                <Tooltip
                  Title={<TiInfoLarge className="text-slate-400 text-xl" />}
                  content="Enter Renewal/Termination comments"
                />
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500
                focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>

            {/* term type content */}
            <Renewable />
            <FixedTerm />
            <Evergreen />
            <Executed />
          </div>
        </Modal>
      )}

      <div className="date px-14 pt-3 flex gap-4 items-center text-sm mb-3">
        <span className="text-md">
          <BsCalendar2Range />
        </span>
        {/* <span>05/19/2021 - 05/19/2022 (Renewable)</span> */}
        <button
          type="button"
          className="border text-sm px-2 rounded bg-gray-200"
          onClick={() => setShowModal(!showModal)}
        >
          Setup contract term
        </button>
      </div>
    </>
  );
};

export default ContractTerm;
