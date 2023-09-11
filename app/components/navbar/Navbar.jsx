import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';


const Navbar = () => {
  return (
    <header className={styles.header}>
    {/* <nav className={styles.navbar}> */}
    <a href="#" className={styles.logo}>
      <img src="images/logo.png" alt="Logo"></img>
    </a>
    <ul className={styles.navbar}>
      <li><a href="#Home">Home</a></li>
      <li><a href="#catogeries">Catogories</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#Feedback">Feedback</a></li>
      <li><a href="#Contact">Contact</a></li>
      <li>
      <button className={styles.btn}><a href="#signup">Sign</a></button>
     </li>
     <li>
      <button className={styles.btn}><a href="#signin">login</a></button>
      </li>
    </ul>
    {/* </nav> */}
</header>
  );
};

export default Navbar;
