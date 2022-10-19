import { createContext } from "react";
import useTakeValues from "../hooks/useTakeValues";

export const DataContext = createContext();
const DataProvider = ({ children }) => {
  const allContext = useTakeValues();
  return (
    <DataContext.Provider value={allContext}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
