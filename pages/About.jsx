import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
    <Navbar />
    <div className="about-section">
        <h1>About Us</h1>
        <p>Welcome to Recipe Finder! This app helps you discover new recipes based on your search queries. Whether you're looking for a quick meal or a gourmet dish, Recipe Finder has got you covered. Our database includes a vast variety of recipes from different cuisines to inspire your cooking adventures. Enjoy browsing through our collection and happy cooking!</p>
    </div>
    </>
  )
}

export default About