'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './navBar.module.css';

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <Link href="/" className={styles.title}>
        <Image
          src="/images/fullLogo.png"
          alt="The Meat Emporium Smithfield Logo"
          width={0}
          height={0}
          sizes="300vw"
          className={styles.logoImage}
          priority
        />
      </Link>
    </header>
  );
}