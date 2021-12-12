import { Route, Routes } from "react-router-dom";
import "./App.css";

const Step1 = () => <>Step1</>;
const Step2 = () => <>Step2</>;
const Step3 = () => <>Step3</>;
const Result = () => <>Result</>;

const Layout = () => <>Layout</>;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="step3" element={<Step3 />} />
          <Route path="result" element={<Result />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
