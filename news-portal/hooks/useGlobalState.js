import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const useGlobalState = () => {
  return useContext(DataContext);
};

export default useGlobalState;
