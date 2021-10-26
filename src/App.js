import { useState, useEffect } from "react";
import "./App.css";
import { callControllerApp } from "./backendTools.js"

function App() {
  const [pin, setPin] = useState("");
  const [title, setTitle] = useState("")

  useEffect(() => {
    callControllerApp('getPin', {}, (data) => {
      setPin(data.pin)
    })
  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handleSave = (e) => {
    callControllerApp ('savePin', {pin})
  };

  return (
    <div className="App">
      <h2>{title}</h2>
      <input type="text" value={pin} onChange=
      {handlePinChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  )
  }

export default App;
