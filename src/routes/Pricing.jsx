import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import PricingCards from "../components/PricingCard";
import Footer from "../components/Footer";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="PRICING." text="Choose your trip" />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Pricing;
