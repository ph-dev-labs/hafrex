import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/Main";
function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column">
        <Navbar />
        <div className="d-flex flex-row justify-content-between">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
          <Sidebar empty />
        </div>
      </div>
    </div>
  );
}

export default App;
