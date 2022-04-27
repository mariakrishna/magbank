import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AccountModal from "./accountModal";
import "./app.scss";

import Home from "./views/home";
import Login from "./views/login";
import Dashboard from "./views/dashboard";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar handleCreateAcc={() => setShowModal(true)} />
      <Routes>
        <Route
          path="/"
          element={<Home handleClick={() => setShowModal(true)} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default App;
