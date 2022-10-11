import "./style/App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
