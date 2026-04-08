import ClientLayout from '@/app/ClientLayout';
import Link from 'next/link';
import React from 'react';

export default function Contact() {
  return (
    <ClientLayout>
      <div style={styles.container}>

        {/* VIDEO SECTION */}
        <div style={styles.videoWrapper}>
          <video
            src="/video.mp4"
            controls
            style={styles.video}
          />
        </div>

        {/* SECTION 1 - IMAGE LEFT / TEXT RIGHT */}
        <div style={styles.section}>
          <div style={styles.imageContainer}>
            <img src="/about1.jpg" alt="About us" style={styles.image} />
          </div>
          <div style={styles.textContainer}>
            <h2>Meat our Owners</h2>
            <p>
              Working their way up from the ground, Cherie and Shawn remain relatable and invested in their local community.
            </p>
          </div>
        </div>

        {/* SECTION 2 - TEXT LEFT / IMAGE RIGHT (CLICKABLE) */}
        <div style={styles.section}>
          <div style={styles.textContainer}>
            <h2>Our other store</h2>
            <p>Smithfield specialty meats</p>
            <p>Located - Shop 55, Smithfield Shopping Center, QLD 4879</p>
          </div>

          <div style={styles.imageContainer}>
            <Link href="/products" passHref>
              <img
                src="/about2.jpg"
                alt="Products"
                style={{ ...styles.image, cursor: 'pointer' }}
              />
            </Link>
          </div>
        </div>

      </div>
    </ClientLayout>
  );
}

// Define a type for the styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '100%',
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
  },

  videoWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },

  video: {
    width: '100%',
    maxWidth: '900px',
    borderRadius: '12px',
  },

  section: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
  },

  imageContainer: {
    flex: '1 1 400px',
    maxWidth: '500px',
  },

  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    objectFit: 'cover',
  },

  textContainer: {
    flex: '1 1 400px',
    maxWidth: '500px',
  },
};