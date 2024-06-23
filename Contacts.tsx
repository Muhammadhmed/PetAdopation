import React from 'react';
import { Container, Row, Col, Form, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import "../../assets/css/Contact.css"; // Ensure your CSS file includes the necessary styles

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Form submitted!');
  };

  return (
    <>
      <section className="contact-section">
        <Container>
          <Row className="justify-content-center align-items-center" style={{ minHeight: "600px" }}>
            <Col>
              <div className="Contact-Image fs-1 text-center text-primary">
                <span></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact-form-section fs-4" style={{ margin: "60px 0" }}>
        <Container>
          <Row>
            <Col md={6}>
              <h2 className='text-secondary'>Welcome To My pet Contact page.</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter a Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Phone Number" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} required />
                </Form.Group>
                <button type="submit" className="btn btn-primary px-5 py-2 rounded-pill">
                  Submit
                </button>
              </Form>
            </Col>

            <Col md={6}>
              <ListGroup as="ul" className="mt-3">
                <ListGroup.Item as="li" active>
                  Contact Details
                </ListGroup.Item>
                <ListGroup.Item as="li" className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="fs-5" />
                  <span className="ms-2">procterboy1315@gmail.com</span>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faPhone} className="fs-5" />
                  <span className="ms-2">+923030195247, +923194421315</span>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faLocationDot} className="fs-5" />
                  <span className="ms-2">4MWV+JF3, One Unit Chock, Bahawalpur, Punjab 24100</span>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="footer-section">
        <Container>
          <Row>
            <Col>
              <p>&copy; 2024 Your Pet Adoption Website. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Contact;
