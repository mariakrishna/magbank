import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import InfoCard from "./components/infoCard";
import CardList from "./components/cardList";
import CenteredButton from "./components/centeredButton";
import Institutional from "./components/institutional";
import Faq from "./components/FAQ";
import "./app.scss";

import post from "./data/posts";

const App = () => (
  <div className="App">
    <Navbar />
    <Hero />

    <InfoCard />
    <CardList post={post} />
    <CenteredButton>Abra sua Conta!</CenteredButton>

    <Institutional />
    <Faq />
  </div>
);

export default App;
