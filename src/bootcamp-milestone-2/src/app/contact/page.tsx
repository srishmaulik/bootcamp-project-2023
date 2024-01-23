import React from "react";
import style from "./contact.module.css";


export default function Contact() {
    return (
        <header className= {style.portfolio}>
        <main>
            <h1 className="page-title">Contact us</h1>
            <form id="contact-form">
            
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <br/><br/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br/><br/>

                <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={4} required></textarea>
                <br/><br/>

                <input type="submit" value="Submit" />
            </form>
            <div className="about">
                <div className="about-image"></div>
                <div className="about-text">
                {/* Add content for the about section if needed */}
                </div>
            </div>
            <footer className="footer">© 2023 My Personal Website | All Rights Reserved </footer>
        </main>
        </header>
    );
}
