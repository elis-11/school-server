import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.scss";
import { MainContext } from './mainContext';
import Config from "./pages/Config";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState('light')
  return (
    <div className="App">
      <MainContext.Provider value={{theme, setTheme}} >
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName="selected" to="/" exact={true}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/Config">
                Config
              </NavLink>{" "}
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/config">
            <Config />
          </Route>
        </Switch>
      </Router>
        </MainContext.Provider>
    </div>
  );
}

export default App;
