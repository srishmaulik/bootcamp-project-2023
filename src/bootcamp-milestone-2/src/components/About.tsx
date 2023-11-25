// About.tsx

import React from 'react';

const About = () => {
  return (
    <div>
      <main>
        <div className="about">
          <div className="about-image-index">
            <img src="https://gopoly.com/images/2022/10/4/Srish_Maulik_UWgzN.jpg" width={400} height={400} alt="Srish's image" />
          </div>
          <div className="about-text">
            I am <strong>Srish</strong> and I currently study at <em>Cal Poly.</em> I am majoring in <em>Computer Science.</em>
          </div>
        </div>
      </main>

      <footer className="footer">© 2023 My Personal Website | All Rights Reserved </footer>
    </div>
  );
};

export default About;
