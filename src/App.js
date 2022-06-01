import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Nav/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Contactus from "./Page/Contactus";
import Api1 from "./Page/Api1";
import Api2 from "./Page/Api2";
import Api3 from "./Page/Api3";
import Login from "./Page/Login";

function App() {
  
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/api1" element={<Api1 />}></Route>
          <Route path="/api2" element={<Api2 />}></Route>
          <Route path="/api3" element={<Api3  />}></Route>
          <Route path="/login" element={<Login />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;