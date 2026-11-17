import "./footer.css";

export default function Footer() {
  return (
    <footer className="siteFooter" id="contact">
      <div className="footerContent">
        <div className="footerBrand">
          <a className="footerLogo" href="#home">
            Ardeva <span>Alghifari</span>.
          </a>
          <p>
            Temukan karya dan produk digital dari Ardeva Alghifari, terimakasih
          </p>
        </div>
        <nav className="footerLinks" aria-label="Navigasi footer">
          <a href="#home">GitHub</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="mailto:hello@ardevaalghifari.com">Email</a>
          <a href="#home">YouTube</a>
          <a href="#project">X</a>
          <a href="#about">Bloger</a>
        </nav>
      </div>

      <div className="footerBottom">
        <p>© Ardeva Alghifari. All rights reserved.</p>
      </div>
    </footer>
  );
}
