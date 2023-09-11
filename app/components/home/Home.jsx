import React from "react";
import Navbar from "../navbar/Navbar";

import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.home} id="home">
        <div className={styles.hometext}>
          <h1>Why we fuck? </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nesciunt iure error? Fugiat beatae exercitationem dolor ipsa, repudiandae animi doloremque libero minus voluptate reprehenderit modi quos blanditiis error at! Sequi.</p>
          <div className={styles.latter}>
            <form>
              <input type="email" placeholder="Write your email" required></input>
              <input type="submit" value="Let's Start" required></input>
            </form>
          </div>
        </div>
        <div className={styles.homeimg}>
          <img src="images/ruralchild1.jpg" alt="Rural children"className={styles.img}/>
        </div>
      </section>
    </div>
  );
};

export default Home;

