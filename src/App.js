import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/Main";
import AllJobs from "./Pages/ALL-Jobs/AllJobs";
import Refer from "./Pages/Refer/Refer";
function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column">
        <Navbar />
        <div className="d-flex flex-row">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/alljobs" element={<AllJobs />} />
            <Route path="/refercandidate" element={<Refer />} />
          </Routes>
          <Sidebar empty />
        </div>
      </div>
    </div>
  );
}

export default App;
