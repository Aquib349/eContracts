import { createContext, useState } from "react";

export const ToggleSideMenuContext = createContext();

function ToggleMenuProvider({ children }) {
  const [show, setShow] = useState(true);
  const [Title, setTitle] = useState("");
  return (
    <ToggleSideMenuContext.Provider value={{ show, setShow, Title, setTitle }}>
      {children}
    </ToggleSideMenuContext.Provider>
  );
}

export default ToggleMenuProvider;
