import ClientLayout from '@/app/ClientLayout';
import Image from 'next/image';

export default function Home() {
  return (
    <ClientLayout>

      {/* HERO IMAGE */}
      <div style={styles.heroWrap}>
        <Image
          src="/images/hero.png"
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

    </ClientLayout>
  );
}
const styles = {

  heroWrap: {
    position: 'relative' as const,
    width: '100%',
    height: '60vh',
    marginTop: 'calc(var(--header) + var(--tabs))',
    overflow: 'hidden',
  },

  heroImage: {
    objectFit: 'cover' as const,
  },

  titleSection: {
    height: '60vh',
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
    backgroundImage: 'url(/images/background1.jpg)',
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

};