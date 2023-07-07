import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";
import { Login } from "./components/Login";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { CreatePost } from "./components/createpost/CreatePost";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
