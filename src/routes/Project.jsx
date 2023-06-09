import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';

const Project = () => {
  return (
    <div>
      {/* projects */}
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Some of my  recent works" />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project;
