// import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";
import SingelBlog from "./SingelBlog";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<SingelBlog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
