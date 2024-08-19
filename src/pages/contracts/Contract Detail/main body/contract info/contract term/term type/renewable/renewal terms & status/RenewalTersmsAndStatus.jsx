import React, { useState } from "react";
import { TiInfoLarge } from "react-icons/ti";
import Accordion from "../../../../../../../../../Reusable Components/Accordion";
import Tooltip from "../../../../../../../../../Reusable Components/Tooltip";
import Modal from "../../../../../../../../../Reusable Components/Modal";

const RenewalTersmsAndStatus = () => {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      {showModal && (
        <Modal
          heading={"Add New Terms"}
          toggleModal={toggleModal}
          set_Width={"medium"}
        ></Modal>
      )}
      <div className="renewal-terms border mt-2 rounded">
        <Accordion
          heading={
            <label for="countries" className="text-sm text-blue-600 flex">
              Renewal Terms & Status
              <Tooltip
                Title={<TiInfoLarge className="text-slate-400 text-lg" />}
                content="Add and manage single or mutliple terms for this contract"
              />
            </label>
          }
          checked={true}
          backgroundColor={false}
        >
          <div class="relative overflow-x-auto shadow-md">
            <table class="w-full text-sm text-left rtl:text-right text-blue-100">
              <thead class="text-xs uppercase bg-blue-900 dark:text-white">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Term
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Start Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                    End Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Renewed On
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Renewed By
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-blue-100 border-b border-blue-400 text-black">
                  <th
                    scope="row"
                    class="px-6 py-2 font-medium whitespace-nowrap"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td class="px-6 py-2">Silver</td>
                  <td class="px-6 py-2">Laptop</td>
                  <td class="px-6 py-2">$2999</td>
                  <td class="px-6 py-2">12/09/2024</td>
                  <td class="px-6 py-2">Lorem ipsum dolor</td>
                </tr>
              </tbody>
            </table>
            <span
              className="text-xs text-blue-500 px-3"
              onClick={() => setShowModal(!showModal)}
            >
              +Add Term(s)
            </span>
          </div>
        </Accordion>
        <div className="flex items-center mt-2">
          <label for="countries" className="text-sm flex w-1/3 px-3 text-slate-500">
            Auto Renew at the end of each term
            <Tooltip
              Title={<TiInfoLarge className="text-slate-400 text-lg" />}
              content="Automatically renew the contract on end of term. Reminders and alerts would be sent out as configured"
            />
          </label>
          <div className="flex items-center gap-5">
            <div class="flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100"
              />
              <label
                for="default-radio-1"
                class="ms-2 text-sm font-medium text-gray-900"
              >
                Yes
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100"
              />
              <label
                for="default-radio-1"
                class="ms-2 text-sm font-medium text-gray-900"
              >
                No
              </label>
            </div>
          </div>
        </div>
        <small className="text-xs px-3">
          Note: Contract will automatically expire if not renewed before End of
          Term.
        </small>
      </div>
    </>
  );
};

export default RenewalTersmsAndStatus;
