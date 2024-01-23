import React from "react";
import Link from "next/link";
import style from "./portfolio.module.css";

export default function Portfolio() {
    return (
        <header className={style.portfolio}>
            <main>
                <h1 className="page-title">Masai Mara, Kenya</h1>

                <Link href="index.html">
                    <div>
                        <img src="IMG_5942.jpg" alt="Project Image" width="400" height="600" />
                    </div>
                </Link>

                <div className="project-details">
                    <p className="project-description">
                        Encountering the African Lion, I overcame the telephoto limitations of my iPhone XR by positioning it behind my binoculars. The results were truly immaculate!<br /> As a creative touch, I've included this just for fun. This is the first website I have ever made.

                        <Link href="resume.html">
                            <div>
                                Learn More about me...
                            </div>
                        </Link>
                    </p>
                </div>

                <div className="about">
                    <div className="about-image"></div>
                    <div className="about-text"></div>
                </div>

                <footer className="footer">© 2023 My Personal Website | All Rights Reserved </footer>
            </main>
        </header>
    );
}
