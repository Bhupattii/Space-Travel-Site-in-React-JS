import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import TrainingSection from "../components/Training";
import Footer from "../components/Footer";

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="Training" text="Pre_Flight & In-Flight Training." />
      <TrainingSection />
      <Footer />
    </div>
  );
};

export default Training;
