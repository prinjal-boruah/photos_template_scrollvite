import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    name: "Haldi",
    date: "December 13, 2026",
    time: "10:00 AM",
    venue: "The Royal Gardens, Udaipur",
    description:
      "The Haldi ceremony marks the start of our wedding celebrations. Join us for a morning filled with laughter, turmeric, and blessings.",
  },
  {
    name: "Wedding",
    date: "December 15, 2026",
    time: "7:00 PM",
    venue: "The Grand Palace, Udaipur",
    description:
      "The grand celebration of our union. Be prepared for live music, fine dining, and memories that last forever.",
  },
];

/* ──────────────────────────────────────────────
   Wooden Handle — SVG with unique gradient IDs
   ────────────────────────────────────────────── */
const WoodenHandle = ({ id = "default" }) => (
  <div className="scroll-handle">
    <svg width="100%" height="60" viewBox="0 0 360 64" preserveAspectRatio="none" style={{overflow:'visible'}}>
      <defs>
        {/* Bar wood gradient */}
        <linearGradient id={`wg-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7A5235" />
          <stop offset="20%" stopColor="#5C3A22" />
          <stop offset="50%" stopColor="#4A2E18" />
          <stop offset="80%" stopColor="#5C3A22" />
          <stop offset="100%" stopColor="#3D2415" />
        </linearGradient>
        <linearGradient id={`whl-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="30%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.12)" />
        </linearGradient>
        {/* Dark walnut finial gradient */}
        <linearGradient id={`fn-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B4427" />
          <stop offset="25%" stopColor="#4A2E18" />
          <stop offset="50%" stopColor="#3D2415" />
          <stop offset="75%" stopColor="#4A2E18" />
          <stop offset="100%" stopColor="#2E1B0E" />
        </linearGradient>
        {/* Subtle highlight for 3D */}
        <radialGradient id={`fhl-${id}`} cx="0.4" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        {/* Dark shadow for depth */}
        <radialGradient id={`fsh-${id}`} cx="0.5" cy="0.7" r="0.5">
          <stop offset="0%" stopColor="rgba(0,0,0,0.15)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>

      {/* ── Main bar (hidden by paper-wrap, but visible at ends) ── */}
      <rect x="34" y="20" width="292" height="24" rx="2" fill={`url(#wg-${id})`} />
      <rect x="34" y="20" width="292" height="24" rx="2" fill={`url(#whl-${id})`} />

      {/* ══ LEFT FINIAL — turned-wood: collar → bulb → neck → dome ══ */}
      {/* Collar (disc at bar junction) */}
      <ellipse cx="34" cy="32" rx="4" ry="15" fill={`url(#fn-${id})`} />
      {/* Main bulb body */}
      <ellipse cx="20" cy="32" rx="11" ry="22" fill={`url(#fn-${id})`} />
      {/* Neck (narrow part) */}
      <ellipse cx="9" cy="32" rx="5" ry="13" fill={`url(#fn-${id})`} />
      {/* Acorn dome tip */}
      <ellipse cx="4" cy="32" rx="4" ry="10" fill={`url(#fn-${id})`} />
      {/* Tip point */}
      <ellipse cx="1" cy="32" rx="2" ry="6" fill={`url(#fn-${id})`} />
      {/* Highlights */}
      <ellipse cx="20" cy="32" rx="11" ry="22" fill={`url(#fhl-${id})`} />
      <ellipse cx="9" cy="32" rx="5" ry="13" fill={`url(#fhl-${id})`} />
      <ellipse cx="4" cy="32" rx="4" ry="10" fill={`url(#fhl-${id})`} />
      {/* Shadow on lower half */}
      <ellipse cx="20" cy="32" rx="11" ry="22" fill={`url(#fsh-${id})`} />
      {/* Ring groove between collar and bulb */}
      <ellipse cx="28" cy="32" rx="1.5" ry="16" fill="rgba(30,15,5,0.3)" />
      {/* Ring groove between bulb and neck */}
      <ellipse cx="12" cy="32" rx="1.5" ry="14" fill="rgba(30,15,5,0.25)" />

      {/* ══ RIGHT FINIAL — mirrored ══ */}
      <ellipse cx="326" cy="32" rx="4" ry="15" fill={`url(#fn-${id})`} />
      <ellipse cx="340" cy="32" rx="11" ry="22" fill={`url(#fn-${id})`} />
      <ellipse cx="351" cy="32" rx="5" ry="13" fill={`url(#fn-${id})`} />
      <ellipse cx="356" cy="32" rx="4" ry="10" fill={`url(#fn-${id})`} />
      <ellipse cx="359" cy="32" rx="2" ry="6" fill={`url(#fn-${id})`} />
      <ellipse cx="340" cy="32" rx="11" ry="22" fill={`url(#fhl-${id})`} />
      <ellipse cx="351" cy="32" rx="5" ry="13" fill={`url(#fhl-${id})`} />
      <ellipse cx="356" cy="32" rx="4" ry="10" fill={`url(#fhl-${id})`} />
      <ellipse cx="340" cy="32" rx="11" ry="22" fill={`url(#fsh-${id})`} />
      <ellipse cx="332" cy="32" rx="1.5" ry="16" fill="rgba(30,15,5,0.3)" />
      <ellipse cx="348" cy="32" rx="1.5" ry="14" fill="rgba(30,15,5,0.25)" />
    </svg>
  </div>
);

/* ──────────────────────────────────────────────
   Single Scroll Invitation
   
   Architecture:
   - Each invitation has its own scroll tracking wrapper
   - Sticky inner container stays pinned in viewport
   - As user scrolls through the wrapper,
     the animation progresses from closed → open
   - Paper section grows between the handles
   ────────────────────────────────────────────── */
const ScrollInvitation = ({ event, index }) => {
  const wrapperRef = useRef(null);

  // Track scroll progress through this invitation's wrapper
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to open amount (0 = closed, 1 = open)
  const openProgress = useTransform(scrollYProgress, [0.15, 0.5], [0, 1]);

  // Paper section max-height (from 0px to enough for full content)
  const paperMaxHeight = useTransform(openProgress, [0, 1], [0, 650]);

  // Content fades + slides in after scroll is ~40% open
  const contentOpacity = useTransform(openProgress, [0.35, 0.8], [0, 1]);
  const contentY = useTransform(openProgress, [0.35, 0.8], [30, 0]);

  // Subtle scale entrance
  const invitationScale = useTransform(openProgress, [0, 0.15], [0.95, 1]);

  return (
    <div ref={wrapperRef} className="scroll-tracking-wrapper">
      <div className="scroll-sticky-container">
        <motion.div className="scroll-invitation" style={{ scale: invitationScale }}>

          {/* ═══ Top Wooden Handle ═══ */}
          <div className="handle-area">
            <WoodenHandle id={`t${index}`} />
            <div className="paper-wrap" />
          </div>

          {/* ═══ Revealed Paper Section ═══ */}
          <motion.div
            className="paper-revealed"
            style={{ maxHeight: paperMaxHeight }}
          >
            <div className="paper-inner">
              {/* Decorative header */}
              <div className="scroll-header-ornament">❦</div>

              <p className="scroll-invitation-line">
                You are cordially invited to
              </p>

              {/* Floral wreath with event name */}
              <div className="scroll-wreath-container">
                <img
                  src="/images/floral_wreath.png"
                  alt="Floral wreath"
                  className="scroll-wreath-img"
                />
                <div className="scroll-event-name-overlay">
                  <h3 className="scroll-event-name">{event.name}</h3>
                </div>
              </div>

              {/* Description */}
              <motion.div style={{ opacity: contentOpacity, y: contentY }}>
                <p className="scroll-description">{event.description}</p>

                {/* Divider */}
                <div className="scroll-divider">
                  <span>✦</span>
                  <div className="divider-line" />
                  <span>✦</span>
                </div>

                {/* Event details */}
                <div className="scroll-details">
                  <div className="scroll-detail-row">
                    <Calendar size={15} strokeWidth={1.5} />
                    <span>{event.date}</span>
                  </div>
                  <div className="scroll-detail-row">
                    <Clock size={15} strokeWidth={1.5} />
                    <span>{event.time}</span>
                  </div>
                  <div className="scroll-detail-row">
                    <MapPin size={15} strokeWidth={1.5} />
                    <span>{event.venue}</span>
                  </div>
                </div>

                {/* Footer ornament */}
                <div className="scroll-footer-ornament">❦</div>
              </motion.div>

              {/* Corner floral images */}
              <img src="/images/floral_corner.png" alt="" className="scroll-corner-img corner-tl" />
              <img src="/images/floral_corner.png" alt="" className="scroll-corner-img corner-tr" />
              <img src="/images/floral_corner.png" alt="" className="scroll-corner-img corner-bl" />
              <img src="/images/floral_corner.png" alt="" className="scroll-corner-img corner-br" />
            </div>
          </motion.div>

          {/* ═══ Bottom Wooden Handle ═══ */}
          <div className="handle-area">
            <WoodenHandle id={`b${index}`} />
            <div className="paper-wrap" />
          </div>

        </motion.div>
      </div>
    </div>
  );
};


/* ──────────────────────────────────────────────
   Events Section — Main Export
   ────────────────────────────────────────────── */
const EventsSection = () => {
  return (
    <div className="events-section">
      {/* Decorative background (waves, diamonds, sparkles) */}

      {/* Section heading */}
      <section className="events-heading-section">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-sm uppercase tracking-[0.4em] text-gold font-sans font-medium mb-6">
            Celebrations
          </h2>
          <h3 className="text-5xl md:text-7xl font-script text-dark-brown">
            Wedding Events
          </h3>
          <p className="mt-6 text-soft-brown/70 font-sans text-sm tracking-wide max-w-md mx-auto">
            Scroll down to unroll each invitation
          </p>
        </motion.div>
      </section>

      {/* Scroll invitations */}
      {events.map((event, index) => (
        <ScrollInvitation key={index} event={event} index={index} />
      ))}
    </div>
  );
};

export default EventsSection;
