import { useContext } from "react";
import { MainContext } from "../mainContext";

const Settings = () => {
  const { theme } = useContext(MainContext);
  return (

    <div className="page pageConfig">
      Theme: {theme}
      </div>
  ) 
};
export default Settings;
