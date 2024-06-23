import React from "react";
import { Image } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import "../../assets/css/About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


const About = () => {
  return (
    <>
      <div className="About-Image">
        <h1></h1>
      </div>

      <Container>
        <Row className="align-items-center ">
          <Col className="mt-4 " md={6}>
            <h3 className="mb-4">WELCOME TO THE <span className="text-warning">Ahmed Pet Shop</span> </h3>
            <p className="section-paragraph fs-4">
            Welcome to Ahmed Pet Shop, your premier destination for dog adoption! We are dedicated to helping you find the perfect canine companion, offering a wide selection of dogs of all breeds and ages. Our team is passionate about ensuring each dog finds a loving home, providing you with all the resources and support needed for a smooth adoption process.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="https://www.freepngimg.com/download/dog/5-dog-png-image.png"
              alt="Cars"
              className="img-fluid section-image"
            />
          </Col>
        </Row>
        </Container>
      
      <div className="More_About">
     
        <Row>
          <Col md={6}>
            <img
              src="https://images.pexels.com/photos/351406/pexels-photo-351406.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Cars"
              className="img-fluid More_About_Img"
            />
          </Col>
          <Col className="mt-4 " md={6}>
            <h3 className="mb-2 Abut_us">WHAT DO YOU KNOW ABOUT US</h3>
            <p className="section-paragraph-2">
            Ahmed Pet Shop, our top priority is the well-being and happiness of our dogs. We ensure every pet is healthy and ready to join your family, providing you with peace of mind throughout the adoption process. 
            </p >
            <p className="section-paragraph-2">Our commitment to our dogs' well-being extends beyond just their care. We invest in training our staff to adhere to best practices in animal welfare and customer service. </p>
             
                <div className="d-flex mt-4 gap-3 align-items-center">
                <span className="fs-4"><FontAwesomeIcon icon={faEnvelope} /></span>
                <div>
               <h6 className="section-paragraph_h6 ">Need Any help?</h6>            
              <p> procterboy@gmail.com</p>
              </div>
              </div>
          </Col>
        </Row>
        
      </div>
      <div className="text-center mt-5 bg-danger">
        <h2>Our Members</h2>
            <p>If You Want To More Informations Visit Our Contact Us Page</p>
      </div>
    </>
  );
};

export default About;