import React from 'react';
import styles from './styles.module.css';

import Link from 'next/link';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <img src="images/logo.png" alt="Logo" />
      </Link>
      <nav>
        <ul className={styles.navbar}>
          <li><Link href="/">Home</Link></li>
          <li className={styles.dropdown}>
            <Link href="/Categories">Categories</Link>
            <ul className={styles.dropdownContent}>
            <li className={styles.submenu}>
                <Link href="/Teacher">Teacher</Link>
                {/* <ul className={styles.submenuContent}>
                  <li><Link href="/Uploadnotes">Study Materials</Link></li>
                  <li><Link href="/StudentProgress">Mentor Access</Link></li>
                  
                </ul> */}
              </li>
              <li className={styles.submenu}>
                <Link href="/Student">Student</Link>
                {/* <ul className={styles.submenuContent}>
                  <li><Link href="/StudyMaterials">Study Materials</Link></li>
                  <li><Link href="/MentorAccess">Mentor Access</Link></li>
                  <li><Link href="/Loans">Loans</Link></li>
                </ul> */}
              </li>
              <li className={styles.submenu}>
                <Link href="/Investor">Investor</Link>
                {/* <ul className={styles.submenuContent}>
                  <li><Link href="/Incentives">Incentives</Link></li>
                  <li><Link href="/Grants">Grants</Link></li>
                </ul> */}
              </li>
            </ul>
          </li>
          <li className={styles.navitem}>
            <Link href="/About">
              About
            </Link>
          </li>
          <li><Link href="/Feedback">Feedback</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>
      </nav>
      {/* <button className={styles.btn}><NavLink to="#signin">Login</NavLink></button> */}
    </header>
  );
};

export default Navbar;
