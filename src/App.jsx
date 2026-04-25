import React from 'react';
import HeroSection from './components/HeroSection';
import LoveStorySection from './components/LoveStorySection';
import CountdownSection from './components/CountdownSection';
import EventsSection from './components/EventsSection';
import RSVPSection from './components/RSVPSection';

function App() {
  return (
    <div className="bg-cream min-h-screen text-dark-brown">
      <HeroSection />
      
      <LoveStorySection />
      
      <CountdownSection />
      
      <EventsSection />
      
      <RSVPSection />
    </div>
  );
}

export default App;
