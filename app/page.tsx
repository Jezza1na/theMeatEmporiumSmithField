'use client';

import { useEffect, useState } from 'react';
import ClientLayout from '@/app/ClientLayout';
import Image from 'next/image';

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ClientLayout>
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
        <h1 style={styles.bigTitle}>
          The Meat Emporium SmithField
        </h1>
      </section>

      {/* 4 COLUMNS */}
      <section style={styles.fourGrid}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Local</h2>
          <p>Add text about locally sourced meats here.</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Specialty</h2>
          <p>Add text about rare cuts or specialty items.</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Quality</h2>
          <p>Add text about your quality standards.</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Availability</h2>
          <p>Add text about stock & supply.</p>
        </div>
      </section>

      {/* PARALLAX PHOTO BACKGROUND */}
      <section style={styles.parallaxSection}>

        <div style={styles.overlayBlock}>
          <h2>Fresh Daily</h2>
          <p>Put more writing here</p>
        </div>

        <div style={styles.spacer} />

        <div style={styles.overlayBlock}>
          <h2>Premium Cuts</h2>
          <p>More content here</p>
        </div>

        <div style={styles.spacer} />

        <div style={styles.overlayBlock}>
          <h2>Wholesale Ready</h2>
          <p>Even more content</p>
        </div>

      </section>

      {/* 3 LINKED IMAGE ROW */}
      <section style={styles.linkSection}>
        <div style={styles.linkGrid}>

          <a href="/specialtyMeats" style={styles.linkCard}>
            <Image
              src="/images/photo1.png"
              alt="Specialty Meats"
              fill
              style={styles.linkImage}
            />
            <div style={styles.linkOverlay}>
              <h2>Specialty Meats</h2>
            </div>
          </a>

          <a href="/retail" style={styles.linkCard}>
            <Image
              src="/images/photo1.png"
              alt="Retail"
              fill
              style={styles.linkImage}
            />
            <div style={styles.linkOverlay}>
              <h2>Retail</h2>
            </div>
          </a>

          <a href="/wholesale" style={styles.linkCard}>
            <Image
              src="/images/photo1.png"
              alt="Wholesale"
              fill
              style={styles.linkImage}
            />
            <div style={styles.linkOverlay}>
              <h2>Wholesale</h2>
            </div>
          </a>

        </div>
      </section>

      {/* CONTACT SECTION FULL WIDTH */}
<section id="contact" style={styles.contactSection}>

  <div style={styles.contactContent}>

    <h2 style={styles.contactTitle}>Get in Touch</h2>

    <ul style={styles.contactList}>

      <li style={styles.contactItem}>
        <strong>Phone:</strong> <a href="tel:+1234567890" style={styles.contactLink}>+1 (234) 567-890</a>
      </li>

      <li style={styles.contactItem}>
        <strong>Email:</strong> <a href="mailto:contact@meatemporium.com" style={styles.contactLink}>contact@meatemporium.com</a>
      </li>

      <li style={styles.contactItem}>
        <strong>Address:</strong> 123 Butcher St, Smithfield, USA
      </li>

      <li style={styles.contactItem}>
        <strong>Hours:</strong> Mon - Fri, 9am - 6pm
      </li>

    </ul>

  </div>

</section>
    </ClientLayout>
  );
}

const styles = {

  heroWrap: {
    position: 'relative' as const,
    width: '100%',
    height: '60vh',
    marginTop: '5vh',
    overflow: 'hidden',
  },

  heroImage: {
    objectFit: 'cover' as const,
  },

  titleSection: {
    height: '40vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bigTitle: {
    fontSize: '5rem',
    fontWeight: 900,
    textAlign: 'center' as const,
  },

  fourGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
    padding: '4rem',
  },

  card: {
    padding: '2rem',
    border: '1px solid gold',
    textAlign: 'center' as const,
  },

  cardTitle: {
    fontSize: '2rem',
    fontWeight: 800,
    marginBottom: '1rem',
  },

  parallaxSection: {
    backgroundImage: 'url(/images/photo1.png)',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '6rem 2rem',
  },

  overlayBlock: {
    background: 'rgba(0,0,0,0.7)',
    color: 'white',
    padding: '2rem',
    maxWidth: '500px',
    margin: '0 auto',
    marginBottom: '6rem',
    textAlign: 'center' as const,
  },

  spacer: {
    height: '300px',
  },

  linkSection: {
    padding: '6rem 4rem',
  },

  linkGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
  },

  linkCard: {
    position: 'relative' as const,
    height: '350px',
    overflow: 'hidden',
    borderRadius: '10px',
    cursor: 'pointer',
    textDecoration: 'none',
  },

  linkImage: {
    objectFit: 'cover' as const,
    transition: 'transform 0.6s ease',
  },

  linkOverlay: {
    position: 'absolute' as const,
    inset: 0,
    background: 'rgba(0,0,0,0.5)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    fontWeight: 800,
    letterSpacing: '1px',
  },

contactSection: {
  position: 'relative' as const,
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',
  marginRight: '-50vw',
  width: '100vw',
  padding: '4rem',
  backgroundColor: '#000000',
  color: '#fff',
  textAlign: 'center' as const,
  boxSizing: 'border-box' as const,
},

contactContent: {
  maxWidth: '600px',   // content width stays limited
  margin: '0 auto',    // centers it horizontally
  padding: '0 1rem',   // optional: prevent tiny overflow on very small screens
},

contactTitle: {
  fontSize: '2.5rem',
  marginBottom: '2rem',
  fontWeight: 700,
},

contactList: {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  fontSize: '1.25rem',
  lineHeight: 1.8,
},

contactItem: {
  marginBottom: 0,
},

contactLink: {
  color: '#6ab0ff',
  textDecoration: 'none',
},
};
