import React from 'react';
import { motion } from 'framer-motion';

const RSVPSection = () => {
  return (
    <section className="py-24 md:py-40 px-6 bg-[#F4F1EA] flex flex-col items-center">
      <motion.div 
        className="max-w-2xl w-full text-center space-y-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="text-sm uppercase tracking-[0.4em] text-gold font-sans font-medium">Join Us</h2>
        <h3 className="text-6xl md:text-8xl font-script text-dark-brown mb-8">RSVP</h3>
        
        <p className="text-lg md:text-xl font-serif italic text-soft-brown pb-8">
          Kindly respond by November 15, 2026
        </p>

        <form className="space-y-10 text-left w-full max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-widest text-dark-brown font-sans">Full Name</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-dark-brown/30 py-2 focus:outline-none focus:border-gold transition-colors font-serif text-lg placeholder-dark-brown/30"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-4 pt-4">
            <label className="block text-xs uppercase tracking-widest text-dark-brown font-sans mb-4">Will you attend?</label>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="attending" className="w-4 h-4 accent-gold" />
                <span className="font-serif text-lg text-dark-brown group-hover:text-gold transition-colors">Joyfully Accept</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="attending" className="w-4 h-4 accent-gold" />
                <span className="font-serif text-lg text-dark-brown group-hover:text-gold transition-colors">Regretfully Decline</span>
              </label>
            </div>
          </div>

          <div className="pt-10 flex justify-center">
            <button 
              type="submit" 
              className="px-12 py-4 bg-dark-brown text-cream text-xs uppercase tracking-[0.3em] font-sans hover:bg-gold transition-colors duration-300 w-full md:w-auto"
            >
              Send Response
            </button>
          </div>
        </form>

        <div className="pt-24 border-t border-dark-brown/10 mt-20">
          <p className="text-sm uppercase tracking-[0.2em] font-sans text-dark-brown mb-4">Location</p>
          <p className="text-2xl font-serif text-dark-brown mb-6">The Grand Palace, Udaipur</p>
          <a 
            href="#" 
            className="inline-block text-xs uppercase tracking-widest text-gold hover:text-dark-brown transition-colors border-b border-gold hover:border-dark-brown pb-1"
          >
            View on Google Maps
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default RSVPSection;
