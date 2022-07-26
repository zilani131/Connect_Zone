import "./App.css";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Login from "../src/Component/Login";
import './App.css';
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={
            <Login />
          }
        />
      </Routes>
      <Home></Home>


    </div>
  )
};

export default App;
