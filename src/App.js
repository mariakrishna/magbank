import React, { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import InfoCard from "./components/infoCard";
import CardList from "./components/cardList";
import CenteredButton from "./components/centeredButton";
import Institutional from "./components/institutional";
import Faq from "./components/FAQ";
import "./app.scss";

import post from "./data/posts";
import Footer from "./components/footer";
import AccountModal from "./accountModal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Navbar handleCreateAcc={() => setShowModal(true)} />
      <Hero onClick={() => setShowModal(true)} />

      <InfoCard />
      <CardList post={post} />
      <CenteredButton onClick={() => setShowModal(true)}>
        Abra sua Conta!
      </CenteredButton>

      <Institutional onClick={() => setShowModal(true)} />
      <Faq />
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
};
export default App;
