// portfolio.js
import React from "react";
import Link from "next/link";
import styles from "./portfolio.module.css";

const Portfolio = () => {
  return (
    <header className={styles.portfolio}>
      <main>
        <h1 className="page-title">Masai Mara, Kenya</h1>

        <Link href="/index.html">
          
            <div>
              <img src="IMG_5942.jpg" alt="Project Image" width={400} height={600} />
            </div>
          
        </Link>

        <div className={styles.projectDetails}>
          <p className={styles.projectDescription}>
            Encountering the African Lion, I overcame the telephoto limitations of my iPhone XR by positioning it behind
            my binoculars. The results were truly immaculate!<br /> As a creative touch, I've included this just for fun.
            This is the first website I have ever made.

            <Link href="/resume.html">
              Learn More about me...
            </Link>
          </p>
        </div>

        <div className={styles.about}>
          <div className={styles.aboutImage}></div>
          <div className={styles.aboutText}></div>
        </div>

        <footer className={styles.footer}>© 2023 My Personal Website | All Rights Reserved </footer>
      </main>
    </header>
  );
};

export default Portfolio;
