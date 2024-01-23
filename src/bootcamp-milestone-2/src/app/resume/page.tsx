import React from "react";
import Link from "next/link";
import style from "./resume.module.css";

export default function Resume() {
    return (
    <header className= {style.skill_list}>
      
      <div>
        <main>
          <h1 className="page-title">Resume</h1>
          <Link className="resume-pdf" href="/Resume.pdf" download>
            Download Resume
          </Link>
          <div className="resume">
            <section className="section">
              <h2 className="section-title">Education</h2>
              <div className="entry">
                <h3 className="entry-title">
                  Bachelor's of Science in Computer Science
                </h3>
                <p className="entry-info">
                  California Polytechnic University, San Luis Obispo | Expected Graduation June 2026
                </p>
              </div>
            </section>
            <section className="section">
              <h2 className="section-title">Coursework</h2>
              <ul className="course-list">
                <li>Hack4Impact HTML, CSS, & Git Starter Pack</li>
                <li>CSC 101: Fundamentals of Computer Science</li>
                <li>CSC 202: Data Structures and Algorithms</li>
                <li>CSC 203: Proj-Based OO Prog and Design (In Progress)</li>
                <li>CSC 225: Intro to Computer Organization (In Progress)</li>
              </ul>
            </section>
            <section className="section">
              <h2 className="section-title">Projects</h2>
              <div className="entry">
                <h3 className="entry-title">Personal Website</h3>
                <p className="entry-info">
                  Designed and built a personal website using HTML and CSS.
                </p>
                <ul className="entry-description">
                  <li>Implemented multiple pages using HTML and CSS</li>
                  <li>Focused on semantic HTML design</li>
                  <li>Used best practices for Git and GitHub</li>
                </ul>
              </div>
            </section>
            <section className="section">
              <h2 className="section-title">Experience</h2>
              <div className="entry">
                <h3 className="entry-title">Interned at Unifynd Ltd.
                </h3>
                <p className="entry-info">
                Backend Software developer (intern)| Duration of the internship was from 1st July to 10th August.
                </p>
                <ul className="entry-description">
                  <li>For my internship, I worked in a research group where, we tried to understand the different ways in which we could use Python and SQL, to backtest financial strategies.</li>
                  
                </ul>
              </div>
            </section>
            <section className="section">
              <h2 className="section-title">Skills</h2>
              <ul className="skill-list">
              <li>Python</li>
                    <li>SQL</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>LC3 Assembly</li>
                    <li>C</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
      </header>
    );
  }