import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [pin, setPin] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3023/getpin");
      const data = await response.json();
      setPin(data.pin);
    })();
  }, []);
  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handleSave = (e) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin }),
    };
    (async () => {
      await fetch(`http://localhost:3023/savepin`, requestOptions);
    })();
  };

  return (
    <div className="App">
      <input type="text" value={pin} onChange={handlePinChange} />{" "}
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default App;
