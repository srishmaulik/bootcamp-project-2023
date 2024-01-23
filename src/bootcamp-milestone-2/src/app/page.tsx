// You can name the function within page.tsx anything you want.

 import Link from "next/link"

export default function Home() {
  return (
   
      <>
       
        <main>
          <h1 className="page-title"> Namaste! 🙏  </h1>
          <div className="about">
            <div className="about-image-index">
              <img
                src="https://gopoly.com/images/2022/10/4/Srish_Maulik_UWgzN.jpg"
                width={300}
                height={200}
              />
            </div>
            <div className="about-text">
            <p>
            Welcome to my corner! I am <strong>Srish</strong>, a Computer Science sophomore, navigating the academic waters at 
          <em> Cal Poly</em>.
</p>

              
            </div>
          </div>
        </main>
        <footer className="footer">© 2023 My Personal Website | All Rights Reserved </footer>
      </>
    
  );
}

