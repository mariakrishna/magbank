import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import InfoCard from "./components/infoCard";
import CardList from "./components/CardList";
import CenteredButton from "./components/centeredButton";
import "./app.scss";

import post from "./data/posts";

const App = () => (
  <div className="App">
    <Navbar />
    <Hero />

    <InfoCard />
    <CardList />
    <CenteredButton>Abra sua Conta!</CenteredButton>
  </div>
);

export default App;
