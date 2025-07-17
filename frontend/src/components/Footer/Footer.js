import "./Footer.css";
import google from "../assets/google.png";
import apple from "../assets/apple.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Description */}
        <div className="footer-col">
          <p>
            Widely known as India’s no. 1 online classifieds platform, <strong>excomfy</strong> is all about you. Our aim is to empower every person in the country to independently connect with buyers and sellers online. We care about you — and the transactions that bring you closer to your dreams.
            Want to buy your first car? We’re here for you. Want to sell commercial property to buy your dream home? We’re here for you. Whatever job you’ve got, we promise to get it done.
          </p>
          <p className="rights">All rights reserved © 2006–2025 <strong>excomfy</strong></p>
        </div>

        {/* About Us */}
        <div className="footer-col">
          <h5>About Us</h5>
          <ul>
            <li><a href="#">Who We Are</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* excomfy Links */}
        <div className="footer-col">
          <h5>excomfy</h5>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Legal & Privacy</a></li>
          </ul>
        </div>

        {/* Social + App Store */}
        <div className="footer-col">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
          <div className="store-badges">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src={google} alt="Google Play" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={apple} alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
