import { createContext } from "react";
import { cars } from "../assets/assets";

export const CarContext = createContext();

const CarContextProvider = (props) => {
  const value = { cars };

  return (
    <CarContext.Provider value={value}>{props.children}</CarContext.Provider>
  );
};

export default CarContextProvider;
