import { useContext, useState } from "react";
import { ToggleSideMenuContext } from "../../context/ToggleMenuContext";
import Searchbar from "../../Reusable Components/Searchbar";
import Modal from "../../Reusable Components/Modal";
import MultiSelector from "../../Reusable Components/MultiSelector";
import FilterDataTable from "../../Reusable Components/FilterDataTable";

function Dashboard() {
  const { show } = useContext(ToggleSideMenuContext);
  const [showModal, setShowModal] = useState(false);
  const [Show, setshow] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const ToggleModal = () => {
    setshow(!Show);
  };

  // table heading
  const headings = [
    "Legal Entity",
    "Default Currency",
    "Authorized Signatory(ies)",
  ];

  // table content
  const contents = [
    {
      id: 1,
      "Legal Entity": "Optimus BT",
      "Default Currency": "USD",
      "Authorized Signatory(ies)": "-",
    },
    {
      id: 2,
      "Legal Entity": "Shimadzu Medical Systems",
      "Default Currency": "JPY",
      "Authorized Signatory(ies)": "-",
    },
  ];

  return (
    <>
      <div
        className={`transition-all duration-500 ease-in-out ${
          show ? "pl-[3.5rem]" : ""
        } mx-2`}
      >
        Dashboard
        <div className="flex justify-center w-full">
          <div>
            {/* search bar  */}
            <Searchbar />

            {/* Modal */}
            {Show && (
              <Modal
                set_Width={"large"}
                heading={"Title"}
                toggleModal={ToggleModal}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  blanditiis aliquam distinctio corporis pariatur consequuntur?
                  Mollitia sunt, natus cum molestias aliquam voluptatem quas
                  amet ea nostrum quasi provident id repudiandae, quibusdam
                  velit vel explicabo doloribus ullam minus ratione. Quasi dolor
                  iure quos, ea optio necessitatibus nulla atque animi
                  architecto aspernatur mollitia fugiat quisquam nisi tempore!
                  Dicta libero pariatur, animi exercitationem laboriosam magnam
                  suscipit, tempore architecto culpa non aliquam laborum neque
                  excepturi velit vitae? Reiciendis quis tenetur deserunt eius
                  explicabo impedit ut eum alias reprehenderit, officiis odio
                  iusto cum tempore eaque enim, iure et deleniti tempora non.
                  Veritatis molestias fugit voluptates odio aut. Laudantium
                  dolore nemo earum officiis ipsum culpa! Sunt corrupti in
                  repellendus ex quam? Animi libero optio quae sunt amet
                  consequatur illo in quos! Suscipit laborum possimus libero
                  voluptate inventore consequatur? Autem consequatur quo natus
                  beatae tempora consectetur, nihil debitis sapiente dignissimos
                  qui, ullam unde corrupti neque nemo sit odio consequuntur sint
                  nam aliquid quisquam. Consequatur aliquam quos nesciunt,
                  doloribus odio iusto, totam, consequuntur labore nam quisquam
                  similique facilis inventore obcaecati ex quia numquam?
                  Suscipit, iusto? Magni est cumque architecto, error modi
                  facere dolores eos. Ad, fugit rerum perferendis, explicabo
                  blanditiis sit alias necessitatibus illo quos dolore ipsam id
                  nostrum voluptates iusto culpa veniam delectus quo?
                  Repellendus non provident reprehenderit rerum tempora neque
                  minima ex delectus fugit necessitatibus ducimus vitae nesciunt
                  tempore, consequatur alias obcaecati dolore. Obcaecati ab
                  suscipit officia enim ipsum quaerat libero repellendus cumque
                  quo! Hic, quod dolor, ipsa itaque repudiandae nam placeat
                  maxime aliquam dicta sequi amet? Nihil, quod excepturi fuga
                  esse ducimus et, assumenda similique asperiores aliquid, culpa
                  debitis voluptate sit! Vel sequi corrupti commodi illum.
                  Incidunt cum quisquam maiores omnis vero deleniti debitis.
                  Possimus, ab, nisi officiis sint earum eius eum molestiae
                  aliquid nihil unde modi, ex quos ipsam quo libero neque soluta
                  nam.
                </p>
              </Modal>
            )}
            <button
              type="button"
              className="border rounded-lg p-2 bg-blue-400 m-2"
              onClick={ToggleModal}
            >
              Open Modal
            </button>

            {/* Legal Entity Picker */}
            <div className="modal">
              {showModal && (
                <Modal
                  toggleModal={toggleModal}
                  heading={"Legal Entity Picker"}
                  set_Width="medium"
                >
                  {/* filter data table */}
                  <FilterDataTable
                    TableHeading={headings}
                    TableContent={contents}
                  />
                </Modal>
              )}
              <button
                type="button"
                className="border rounded-lg p-2 bg-blue-400 m-2"
                onClick={toggleModal}
              >
                Legal Entity Picker
              </button>
            </div>

            {/* multi selector */}
            <MultiSelector />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
