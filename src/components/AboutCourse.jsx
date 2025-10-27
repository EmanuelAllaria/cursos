import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function AboutCourse() {
  return (
    <section id='about' className='about-section'>
      <Container>
        <Row>
          <Col lg={6} md={12} className='order-lg-1'>
            <div className="section-content">
                <h2 className="section-title">Booking</h2>
                <ul className="section-features">
                    <li>Remember that our classes are 100% personalized</li>
                    <li>Recuerda que nuestras clases son 100% personalizadas</li>
                </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutCourse