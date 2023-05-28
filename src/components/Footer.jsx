import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <p className="copy">&copy; {currentYear} <a style={{textDecoration: "none",}} href="https://typingtiming.com.ar" target="_blank" rel="noopener noreferrer">Typing Timing</a>. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;