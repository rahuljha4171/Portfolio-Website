import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { 
  FaCode, 
  FaMobileAlt, 
  FaServer, 
  FaWordpress, 
  FaShoppingCart,
  FaPuzzlePiece,
  FaDatabase,
  FaCloud
} from "react-icons/fa";
import "./services.css";

function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Full-Stack Web Development",
      description: "Custom web applications and dashboards using React, Node.js, and modern frameworks"
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description: "Cross-platform iOS/Android apps built with React Native for seamless user experiences"
    },
    {
      icon: <FaServer />,
      title: "MERN Stack Development",
      description: "Complete MongoDB, Express, React, Node.js solutions from concept to deployment"
    },
    {
      icon: <FaWordpress />,
      title: "WordPress Development",
      description: "Custom themes, plugins, and functionality tailored to your business needs"
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce Solutions",
      description: "Shopify customization and custom e-commerce platforms with payment integration"
    },
    {
      icon: <FaPuzzlePiece />,
      title: "API Development & Integration",
      description: "RESTful APIs and third-party service integrations for seamless connectivity"
    },
    {
      icon: <FaDatabase />,
      title: "Backend Architecture",
      description: "Scalable backend systems with optimized database design and performance"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Deployment",
      description: "Server configuration and deployment on AWS, Linux/Windows servers, and cloud platforms"
    }
  ];

  return (
    <Container fluid className="services-section">
      <Container>
        <h1 className="services-heading" data-aos="fade-up">
          <span className="primary-header">What</span> I Offer
        </h1>
        <p className="services-subheading" data-aos="fade-up">
          Professional development services to bring your digital vision to life
        </p>
        
        <Row style={{ justifyContent: "center", paddingTop: "30px" }}>
          {services.map((service, index) => (
            <Col md={6} lg={3} className="service-card" key={index}>
              <Card className="service-card-view" data-aos="zoom-in" data-aos-delay={index * 100}>
                <Card.Body>
                  <div className="service-icon">{service.icon}</div>
                  <Card.Title className="service-title">{service.title}</Card.Title>
                  <Card.Text className="service-description">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row style={{ justifyContent: "center", paddingTop: "50px" }}>
          <Col md={10}>
            <Card className="rate-card" data-aos="fade-up">
              <Card.Body>
                <h2 className="rate-heading">💼 Ready to Start Your Project?</h2>
                <p className="rate-text">
                  <strong>Hourly Rate:</strong> $13.00/hr
                </p>
                <p className="rate-description">
                  I offer flexible engagement options including hourly, fixed-price projects, and retainer agreements. 
                  Let's discuss your requirements and find the best arrangement for your project.
                </p>
                <div className="cta-buttons">
                  <a 
                    href="mailto:your.email@example.com" 
                    className="btn btn-primary cta-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    📩 Send a Message
                  </a>
                  <a 
                    href="#contact" 
                    className="btn btn-outline-primary cta-btn"
                  >
                    💬 Let's Talk
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Services;
