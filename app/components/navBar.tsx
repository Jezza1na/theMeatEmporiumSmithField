'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from './navBar.module.css';

export default function NavBar() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try { return localStorage.getItem('dark_mode') === 'true'; }
    catch { return false; }
  });

  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [navTop, setNavTop] = useState<number>(0);

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--header', '200px');
    root.style.setProperty('--tabs', '60px');

    root.style.setProperty('--dropDown', darkMode ? '#1b1b1b' : '#f9f9f9');
    root.style.setProperty('--dropDownBorder', darkMode ? '#2a2a2a' : '#ccc');

    root.style.setProperty('--bodyBackground', darkMode ? '#222222' : '#ffffff');
    root.style.setProperty('--textColour', darkMode ? '#f8f9fa' : '#212529');
    root.style.setProperty('--bodyBackgroundBorder', darkMode ? '#2a2a2a' : '#dee2e6');
    root.style.setProperty('--linkColour', darkMode ? '#6ab0ff' : '#0d6efd');

    root.style.setProperty('--headerBackground', '#000000');
    root.style.setProperty('--rows', darkMode ? '#000' : '#f3f4f6');
    root.style.setProperty('--tabColour', darkMode ? '#30363d' : '#e5e7eb');
    root.style.setProperty('--tabText', darkMode ? '#ffffff' : '#111827');

    try { localStorage.setItem('dark_mode', String(darkMode)); }
    catch {}
  }, [darkMode]);

  // Save the original top position of navbar
  useEffect(() => {
    if (navRef.current) {
      setNavTop(navRef.current.offsetTop);
    }
  }, []);

  // Scroll-triggered sticky effect
  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      const scrollY = window.scrollY;
      setSticky(scrollY > navTop); // sticky only after passing original position
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navTop]);

  const tabs = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Specialty Meats', href: '/specialtyMeats' },
    { label: 'Wholesale', href: '/wholesale' },
    { label: 'Retail', href: '/retail' },
    { label: 'Contact', href: '/#contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      ref={navRef}
      className={`${styles.topRow} ${sticky ? styles.sticky : ''}`}
      style={{
        position: sticky ? 'fixed' : 'relative',
        top: sticky ? 0 : 'auto',
        left: 0,
        right: 0,
        zIndex: 9999,
        transition: 'all 0.3s ease',
      }}
    >
      {/* Tabs */}
      <div className={styles.tabs}>
        {tabs.map(tab => (
          <Link
            key={tab.href}
            href={tab.href}
            className={styles.tabLink}
            onClick={closeMenu}
          >
            <span className={styles.tab}>{tab.label}</span>
          </Link>
        ))}
      </div>

      {/* Right side: socials + hamburger */}
      <div className={styles.rightSide}>
        <div className={styles.socials}>
          <a href="https://facebook.com/YOURPAGE" target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com/YOURPAGE" target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="mailto:you@email.com?subject=Meat Enquiry" className={styles.icon} aria-label="Email">
            <MdEmail />
          </a>
        </div>

        <div className={styles.hamburgerWrap}>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="main-menu"
            className={styles.hamburger}
            onClick={() => setIsOpen(prev => !prev)}
          >
            <span className={isOpen ? styles.barOpen : styles.bar} />
            <span className={isOpen ? styles.barOpen : styles.bar} />
            <span className={isOpen ? styles.barOpen : styles.bar} />
          </button>

          <nav id="main-menu" className={isOpen ? styles.menuOpen : styles.menu} aria-hidden={!isOpen}>
            <ul className={styles.menuList}>
              {tabs.map(tab => (
                <li key={tab.href} className={styles.menuItem} onClick={closeMenu}>
                  <Link href={tab.href} className={styles.menuLink}>{tab.label}</Link>
                </li>
              ))}
              <li className={`${styles.menuItem} ${styles.toggleRow}`}>
                <span>Dark Mode</span>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(prev => !prev)}
                    aria-label="Toggle dark mode"
                  />
                  <span className={styles.track} />
                  <span className={styles.thumb} />
                </label>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}