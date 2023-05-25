// import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
