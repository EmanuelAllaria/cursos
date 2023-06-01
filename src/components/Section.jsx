import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Section.css';
import { useNavigate } from 'react-router-dom';

const Section = ({ type, img }) => {
  const isAboutSection = type === 'about';
  const isCourseSection = type === 'course';

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/curso');
  };

  return (
    <section id={`${isAboutSection ? 'about' : ''} ${isCourseSection ? 'course' : ''}`} className={`section ${isAboutSection ? 'about-section' : ''} ${isCourseSection ? 'course-section' : ''}`}>
      <Container>
        <Row>
          <Col lg={6} md={12} className="order-lg-2">
            <div className="section-image-container">
              <img src={img} alt={type} className="section-image" />
            </div>
          </Col>
          <Col lg={6} md={12} className={`${isCourseSection ? 'order-lg-1' : ''}`}>
            <div className="section-content">
              <h2 className="section-title">{isAboutSection ? 'About' : 'Booking'}</h2>
              {isAboutSection && (
                <>
                  <p className="section-description">
                    We offer you a course where you can learn Spanish in an easy and fun way or you can practice your Spanish. Remember, no matter your level of Spanish, if you have any questions, contact us. <br/><br/>
                    Te ofrecemos un curso en donde puedes aprender español de una manera facil y divertida o puedes practicar tu español. <br/><br/>
                    Recuerda, no importa tu nivel de español, si tienes dudas contáctanos.
                  </p>
                </>
              )}
              {isCourseSection && (
                <>
                  <p className="section-description">Descripción del curso</p>
                  <ul className="section-features">
                    <li>Remember that our classes are 100% personalized</li>
                    <li>Recuerda que nuestras clases son 100% personalizadas</li>
                  </ul>
                  <br/>
                  <Button onClick={handleClick} title='Ir a el curso'>Ir a el curso</Button>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section;
