import React from "react";
import Cathline from "../components/Home/Cathline";
import Hero from "../components/Home/Hero";
import Resource from "../components/Home/Resource";
import Sec2 from "../components/Home/Sec2";
import Services from "../components/Home/Services";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Sec2 />
      <Services />
      <Resource />
      <Cathline />
    </div>
  );
};

export default Homepage;
