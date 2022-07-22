import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <h1 className="text-4xl mt-5 text-center font-bold">
              Connect Zone
            </h1>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
