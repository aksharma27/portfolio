import React from 'react'
//components
import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      {/* <HeroImg2 /> */}
      <Footer />
    </div>
  )
}

export default Home
