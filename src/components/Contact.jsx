import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row>
          <Col lg={6} md={12}>
            <div className="contact-content">
              <h2 className="section-title">Contáctanos</h2>
              <p className="section-description">Déjanos un mensaje y nos pondremos en contacto contigo pronto.</p>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su nombre" />
                </Form.Group>
                <br/>
                <Form.Group controlId="formEmail">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
                </Form.Group>
                <br/>
                <Form.Group controlId="formMessage">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Ingrese su mensaje" />
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">Enviar</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
