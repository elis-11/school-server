import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./App.scss";
import Config from "./pages/Config";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><NavLink className="selected" to="/" exact={true}>Home</NavLink></li>
            <li><NavLink className="selected" to="/Config">Config</NavLink> </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/config" >
            <Config />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
