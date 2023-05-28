import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Section.css';

const Section = ({ type, img }) => {
  const isAboutSection = type === 'about';
  const isCourseSection = type === 'course';

  return (
    <section id={`${isAboutSection ? 'about-section' : ''} ${isCourseSection ? 'course-section' : ''}`} className={`section ${isAboutSection ? 'about-section' : ''} ${isCourseSection ? 'course-section' : ''}`}>
      <Container>
        <Row>
          <Col lg={6} md={12} className="order-lg-2">
            <div className="section-image-container">
              {/* <div className="section-image"></div> */}
              <img src={img} alt={type} className="section-image" />
            </div>
          </Col>
          <Col lg={6} md={12} className={`${isCourseSection ? 'order-lg-1' : ''}`}>
            <div className="section-content">
              <h2 className="section-title">{isAboutSection ? 'About' : 'Course'}</h2>
              <p className="section-description">
                {isAboutSection ? 'Descripción del about' : 'Descripción del curso'}
              </p>
              {isCourseSection && (
                <ul className="section-features">
                  <li>Característica 1</li>
                  <li>Característica 2</li>
                  <li>Característica 3</li>
                  {/* Agrega más características aquí */}
                </ul>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section;
