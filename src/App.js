import "./App.css";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home";


import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Routes>
        <Route
          path="/login"
          element={
            <Login />
          }
        />
      </Routes> */}
      <Home></Home>


    </div>
  )
};

export default App;
