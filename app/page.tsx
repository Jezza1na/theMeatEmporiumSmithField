'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* HERO IMAGE */}
      <div
        style={{
          ...styles.heroWrap,
          transform: heroVisible
            ? 'translateY(0) scale(1)'
            : 'translateY(200px) scale(1.05)',
          opacity: heroVisible ? 1 : 0,
          transition: 'transform 1.2s cubic-bezier(.16,1,.3,1), opacity 1s ease',
        }}
      >
        <Image
          src="/images/photo1.png"
          alt="Butcher hero"
          fill
          priority
          style={styles.heroImage}
        />
      </div>

      {/* HUGE TITLE */}
      <section style={styles.titleSection}>
        <h1 style={styles.bigTitle}>The Meat Emporium SmithField</h1>
      </section>

      {/* 4 COLUMNS */}
<section style={styles.fourGrid}>
  {[
    { title: 'Local', text: 'Add text about locally sourced meats here.' },
    { title: 'Specialty', text: 'Add text about rare cuts or specialty items.' },
    { title: 'Quality', text: 'Add text about your quality standards.' },
    { title: 'Availability', text: 'Add text about stock & supply.' },
  ].map((item, idx) => (
    <div key={idx} style={styles.card}>
      <h2 style={styles.cardTitle}>{item.title}</h2>
      <p>{item.text}</p>
    </div>
  ))}
</section>

      {/* PARALLAX */}
      <section style={styles.parallaxSection}>
        {['Fresh Daily', 'Premium Cuts', 'Wholesale Ready'].map((heading, idx) => (
          <>
            <div key={idx} style={styles.overlayBlock}>
              <h2>{heading}</h2>
              <p>Put more writing here</p>
            </div>
            {idx < 2 && <div style={styles.spacer} />}
          </>
        ))}
      </section>

      {/* 3 LINKS */}
      <section style={styles.linkSection}>
        <div style={styles.linkGrid}>
          {[
            { href: '/specialtyMeats', title: 'Specialty Meats' },
            { href: '/retail', title: 'Retail' },
            { href: '/wholesale', title: 'Wholesale' },
          ].map((item, idx) => (
            <a key={idx} href={item.href} style={styles.linkCard}>
              <Image src="/images/photo1.png" alt="" fill style={styles.linkImage} />
              <div style={styles.linkOverlay}>
                <h2>{item.title}</h2>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.contactSection}>
        <div style={styles.contactRow}>
          {/* LEFT IMAGE */}
          <div style={styles.sideImage}>
            <a href="https://specialtymeatssmithfield.com.au" target="_blank" rel="noopener noreferrer">
              <Image src="/images/specialtyMeatsLittleLogo.png" alt="Left" fill style={{ ...styles.sideImageImg, cursor: 'pointer' }} />
            </a>
          </div>

          {/* CENTER */}
          <div style={styles.contactContent}>
            <h2 style={styles.contactTitle}>Get in Touch</h2>
            <ul style={styles.contactList}>
              <li style={styles.contactItem}><strong>Phone:</strong> <a href="tel:+61740481124" style={styles.contactLink}>(07) 4048 1124</a></li>
              <li style={styles.contactItem}><strong>Email:</strong> <a href="mailto:Shawn.pynaker@gmail.com" style={styles.contactLink}>Shawn.pynaker@gmail.com</a></li>
              <li style={styles.contactItem}><strong>Address:</strong> 2 Mac Peak Cres, Smithfield QLD 4878</li>
              <li style={styles.contactItem}>
                <strong>Hours:</strong>
                <div>Mon - Fri, 9:00am - 5:30pm</div>
                <div>Sat & Sun, 9:00am - 4:00pm</div>
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div style={styles.sideImage}>
            <a href="https://themeatemporiumsmithfield.com.au" target="_blank" rel="noopener noreferrer">
              <Image src="/images/meatEmporiumLittleLogo.png" alt="Right" fill style={{ ...styles.sideImageImg, cursor: 'pointer' }} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

const styles: { [key: string]: any } = {
  // HERO
  heroWrap: { position: 'relative', width: '100%', height: '60vh', overflow: 'hidden' },
  heroImage: { objectFit: 'cover' },

  // TITLE
  titleSection: { height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1rem' },
  bigTitle: { fontSize: 'clamp(2rem, 6vw, 5rem)', fontWeight: 900, textAlign: 'center' },

  // 4 CARDS
  fourGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    padding: '4rem 2rem',
  },
  card: {
    padding: '2rem',
    border: '1px solid gold',
    textAlign: 'center' as const,
    boxSizing: 'border-box' as const,
  },
  cardTitle: { fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '1rem' },

  // PARALLAX
  parallaxSection: { backgroundImage: 'url(/images/photo1.png)', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center', padding: '6rem 2rem' },
  overlayBlock: { background: 'rgba(0,0,0,0.7)', color: 'white', padding: '2rem', maxWidth: '500px', margin: '0 auto 6rem', textAlign: 'center' },
  spacer: { height: '300px' },

  // 3 LINKS
  linkSection: { padding: '6rem 2rem' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' },
  linkCard: { position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '10px', overflow: 'hidden', textDecoration: 'none' },
  linkImage: { objectFit: 'cover' },
  linkOverlay: { position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800 },

  // CONTACT
  contactSection: { position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw', padding: '4rem', backgroundColor: '#000', color: '#fff', boxSizing: 'border-box' },
  contactRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    flexDirection: 'row', // desktop default
  },
  sideImage: { position: 'relative', width: '250px', height: '250px', borderRadius: '12px', overflow: 'hidden' },
  sideImageImg: { objectFit: 'cover' },
  contactContent: { maxWidth: '600px', textAlign: 'center' },
  contactTitle: { fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', marginBottom: '2rem' },
  contactList: { listStyle: 'none', padding: 0, margin: 0, fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: 1.8 },
  contactItem: { marginBottom: '12px' },
  contactLink: { color: '#6ab0ff', textDecoration: 'none' },

  // ===== RESPONSIVE MEDIA QUERIES =====
  '@media (max-width: 1200px)': {
    fourGrid: { gridTemplateColumns: 'repeat(2, 1fr)', padding: '2rem' },
    linkGrid: { gridTemplateColumns: 'repeat(2, 1fr)' },
    sideImage: { width: '200px', height: '200px' },
  },
  '@media (max-width: 768px)': {
    fourGrid: { gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1rem' },
    card: { padding: '1rem' },
    linkGrid: { gridTemplateColumns: '1fr', gap: '1.5rem' },
    linkCard: { aspectRatio: '4/3', width: '100%' }, // bigger for phones
    contactRow: { flexDirection: 'column', gap: '20px' },
    sideImage: { width: '180px', height: '180px' }, // slightly bigger
    contactContent: { maxWidth: '90%' },
    overlayBlock: { maxWidth: '90%', marginBottom: '3rem' },
    spacer: { height: '150px' },
  },
  '@media (max-width: 480px)': {
  linkGrid: {
    gridTemplateColumns: '1fr', // 1 per row
    gap: '1.5rem',
  },
  linkCard: {
    width: '100%',
    height: '300px',       // <-- explicit height forces bigger images
    minHeight: '250px',    // fallback
    borderRadius: '12px',
    overflow: 'hidden',
  },
  linkOverlay: {
    fontSize: 'clamp(1.2rem, 5vw, 1.5rem)',
  },
  },
}