// Home.tsx

import React from 'react';
import About from './About';

const Home = () => {
  return (
    <div>
      <main>
        <h1 className="page-title"> Hello World! </h1>
        <About />
      </main>

      <footer className="footer">© 2023 My Personal Website | All Rights Reserved </footer>
    </div>
  );
};

export default Home;

