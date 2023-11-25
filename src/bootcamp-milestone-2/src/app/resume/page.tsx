import React from 'react';

export default function Resume() {
  return (
    <div>
      <nav className="navbar">
        <a href="index.html"><h1 className="logo">Website No. 1</h1></a>
        <ol className="nav-list">
          <li><a href="index.html">Home</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="resume.html">Resume</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ol>
      </nav>

      <main>
        <h1 className="page-title-resume">Resume</h1>

        <div className="about-download">
          <a href="srish - resume2.pdf">Download Resume</a>
        </div>

        <div className="resume">
          <section className="section">
            <h2 className="section-title">Education</h2>
            {/* Content for the Education section goes here */}
            <h3 className="entry-title">Currently attending Cal Poly.</h3>
            <p className="entry-info">
              Pursuing a Bachelor of Science degree in Computer Science. Expected to graduate by July, 2026.
            </p>
          </section>

          <section className="section">
            <h2 className="section-title">Experience</h2>
            {/* Content for the Experience section goes here */}
            <h3 className="entry-title">Interned at Unifynd Ltd.</h3>
            <p className="entry-info">
              Backend Software developer (intern) | Duration of the internship was from 1st July to 10th August.
            </p>
            <p className="Entry Description">
              For my internship, I worked in a research group where, we tried to understand the different ways in
              which we could use Python and SQL, to backtest financial strategies.
            </p>
          </section>

          <section className="section">
            <h2 className="section-title">Skills</h2>
            {/* Content for the Skills section goes here */}
            <ul className="skill-list">
              <li>Python</li>
              <li>SQL</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">Projects</h2>
            {/* Content for the Projects section goes here */}
            <h3 className="entry-title">Algorithmic trading</h3>
            <p className="entry-info">1st July to 10th August.</p>
            <p className="entry-description">
              I was given the task to make code to transfer CSV files to a SQL server of the company in Metabase.
              I also studied different financial indicators and KPIs to make code that would help in backtesting financial strategies.
            </p>
          </section>

         /* <section className="section">
            <h2 className="section-title">Coursework</h2>
            {/* Content for the Coursework section goes here */}
          </section> */

          <section className="section">
            <h2 className="section-title">My ongoing courses are -</h2>
            {/* Content for the Activities section goes here */}
            <ul className="course-list">
              <li>CSC 203</li>
              <li>CPE 225</li>
              <li>MATH 206</li>
              <li>CHEM 125</li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">My Interests are -</h2>
            <ul className = "Interests-list">
                    <li>Swimming</li>
                    <li>Reading fiction</li>
                    <li>Watching Anime</li>
                    <li>Soccer</li>
                </ul>
            
            <ul className="Interests-list">
              <li>Swimming</li>
              <li>Reading fiction</li>
              <li>Watching Anime</li>
              <li>Soccer</li>
            </ul>
          </section>
        </div>

        <div className="about">
          <div className="about-image"></div>
          <div className="about-text"></div>
        </div>
      </main>

      <footer className="footer">© 2023 My Personal Website | All Rights Reserved </footer>
    </div>
  );
}
