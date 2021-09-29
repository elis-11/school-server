import { useContext } from "react";
import { MainContext } from "../mainContext";


const Settings = () => {
  const { theme, setTheme, language, setLanguage, text } = useContext(MainContext);

// const text = (idCode) => {
//   return LanguageManager.getText(language, idCode);
// }

  return (
    <div className="page pageSettings">
      <div className="row">
        {text('theme')} ({theme}):
        <button onClick={() => setTheme('light')}>{text('light')}</button>
        <button onClick={() => setTheme('dark')}>Dark</button>
      </div>
      <div className="row">
        Language: ({language}):
        <button onClick={() => setLanguage('english')}>English</button>
        <button onClick={() => setLanguage('german')}>German</button>
      </div>
    </div>
  );
};
export default Settings;
