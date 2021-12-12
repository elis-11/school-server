import { AppProvider } from "./AppContext.js";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Nav from "./components/Nav";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
