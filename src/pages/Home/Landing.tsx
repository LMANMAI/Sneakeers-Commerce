import React from "react";
import { Hero, ButtonNav } from "../../components";
import { CardContent, TopProduct } from "./auxiliars";

import { LandingContainer } from "../../styles";
const LandingPage: React.FC = () => {
  return (
    <LandingContainer>
      <Hero />
      <ButtonNav />
      <CardContent />
      <TopProduct />
    </LandingContainer>
  );
};

export default LandingPage;
