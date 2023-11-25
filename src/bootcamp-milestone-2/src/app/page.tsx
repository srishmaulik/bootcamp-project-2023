// You can name the function within page.tsx anything you want.

 import Link from "next/link"


export default function Home() {
  return (
   
      <>
       
        <main>
          <h1 className="page-title"> Hello World! </h1>
          <div className="about">
            <div className="about-image-index">
              <img
                src="https://gopoly.com/images/2022/10/4/Srish_Maulik_UWgzN.jpg"
                width={400}
                height={400}
              />
            </div>
            <div className="about-text">
              I am <strong>Srish</strong> and I currently study at
              <em>Cal Poly.</em> I am majoring in <em>Computer Science.</em>
            </div>
          </div>
        </main>
        <footer className="footer">© 2023 My Personal Website | All Rights Reserved </footer>
      </>
    
  );
}

