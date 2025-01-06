function Footer({ isVisible }) {
  return (
    <footer
      className={`footer ${
        isVisible ? "footer-visible" : "footer-hidden"
      }`}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are committed to providing the best property services for our
              users.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" className="text-light">
                <i className="bi bi-facebook fs-4"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} MaxSpaces. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
