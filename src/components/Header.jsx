import React, { useState, useEffect } from "react";
import "./css/Header.css";

function Header({ page }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isPageHome = page === "home";
  const isPageCourse = page === "course";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const LogoIcon = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="8" fill="url(#gradient)" />
      <path
        d="M12 28V12h4l4 8 4-8h4v16h-3V18l-3 6h-2l-3-6v10h-3z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          y1="0"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <header
      className={`modern-header ${isScrolled ? "scrolled" : ""} ${
        isPageHome ? "home-page" : ""
      } ${isPageCourse ? "course-page" : ""}`}
    >
      <nav className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <a href="/" className="logo-container">
            <LogoIcon />
            <span className="logo-text">MasterCourse</span>
          </a>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <ul className="nav-links">
              <li>
                <a href="/" className="nav-link">
                  <span>Inicio</span>
                </a>
              </li>
              <li>
                <a href="/#about" className="nav-link">
                  <span>Acerca de</span>
                </a>
              </li>
              <li>
                <a href="/#course" className="nav-link">
                  <span>Cursos</span>
                </a>
              </li>
              <li>
                <a href="/#contact" className="nav-link">
                  <span>Contacto</span>
                </a>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="nav-cta">
              <a href="/curso" className="btn btn-primary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Empezar Ahora
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${isMobileMenuOpen ? "open" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-links">
            <li>
              <a
                href="/"
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/#about"
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                Acerca de
              </a>
            </li>
            <li>
              <a
                href="/#course"
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                Cursos
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contacto
              </a>
            </li>
            <li className="mobile-cta">
              <a
                href="/curso"
                className="btn btn-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Empezar Ahora
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
