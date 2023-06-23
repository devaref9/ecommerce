import { createContext, useState } from "react";

export const IsCartOpenContext = createContext();

export const IsCartOpenProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IsCartOpenContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </IsCartOpenContext.Provider>
  );
};
