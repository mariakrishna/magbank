import React from "react";
import Hero from "../components/hero";
import InfoCard from "../components/infoCard";
import CardList from "../components/cardList";
import CenteredButton from "../components/centeredButton";
import Institutional from "../components/institutional";
import Faq from "../components/FAQ";
import "./home.scss";

import post from "../data/posts";

const Home = ({ handleClick }) => (
  <>
    <Hero onClick={handleClick} />

    <InfoCard />
    <CardList post={post} />
    <CenteredButton onClick={handleClick}>Abra sua Conta!</CenteredButton>

    <Institutional onClick={handleClick} />
    <Faq />
  </>
);
export default Home;
