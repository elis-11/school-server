import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.scss";
import { MainContext } from "./mainContext";
import Settings from "./pages/Settings";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("english");

  return (
    <div className="App">
      <MainContext.Provider value={{ theme, setTheme, language, setLanguage }}>
        <Router>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName="selected" to="/" exact={true}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/Settings">
                  Settings
                </NavLink>{" "}
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </Router>
      </MainContext.Provider>
    </div>
  );
}

export default App;
