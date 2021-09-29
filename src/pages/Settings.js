import { useContext } from "react";
import { MainContext } from "../mainContext";

const Settings = () => {
  const { theme, setTheme } = useContext(MainContext);
  return (
    <div className="page pageConfig">
      <div className="row">
        Theme: ({theme})
        <button onClick={() => setTheme('light')}>Light</button>
        <button onClick={() => setTheme('dark')}>Dark</button>
      </div>
    </div>
  );
};
export default Settings;
