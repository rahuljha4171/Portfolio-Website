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
          <span>What</span> I Offer
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

        {/* Stats Section */}
        <Row style={{ justifyContent: "center", paddingTop: "60px", paddingBottom: "40px" }}>
          <Col md={10}>
            <h2 className="section-heading" data-aos="fade-up">
              My <span>Track Record</span>
            </h2>
            <Row style={{ marginTop: "40px" }}>
              <Col md={3} sm={6} xs={12} className="stat-card" data-aos="zoom-in" data-aos-delay="0">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </Col>
              <Col md={3} sm={6} xs={12} className="stat-card" data-aos="zoom-in" data-aos-delay="100">
                <div className="stat-number">30+</div>
                <div className="stat-label">Happy Clients</div>
              </Col>
              <Col md={3} sm={6} xs={12} className="stat-card" data-aos="zoom-in" data-aos-delay="200">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </Col>
              <Col md={3} sm={6} xs={12} className="stat-card" data-aos="zoom-in" data-aos-delay="300">
                <div className="stat-number">100%</div>
                <div className="stat-label">Satisfaction Rate</div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Credentials Section */}
        <Row style={{ justifyContent: "center", paddingTop: "40px", paddingBottom: "60px" }}>
          <Col md={10}>
            <h2 className="section-heading" data-aos="fade-up">
              Certifications & <span>Expertise</span>
            </h2>
            <Row style={{ marginTop: "40px" }}>
              <Col md={6} className="credential-card" data-aos="fade-right" data-aos-delay="0">
                <div className="credential-item">
                  <div className="credential-icon">🎓</div>
                  <h4>Professional Certifications</h4>
                  <p>Advanced JavaScript, React.js, Node.js, and Modern Web Development Best Practices</p>
                </div>
              </Col>
              <Col md={6} className="credential-card" data-aos="fade-left" data-aos-delay="100">
                <div className="credential-item">
                  <div className="credential-icon">🏆</div>
                  <h4>Industry Recognition</h4>
                  <p>Recognized for delivering high-quality solutions with excellent client testimonials and repeat business</p>
                </div>
              </Col>
            </Row>
            <Row style={{ marginTop: "30px" }}>
              <Col md={6} className="credential-card" data-aos="fade-right" data-aos-delay="200">
                <div className="credential-item">
                  <div className="credential-icon">⚙️</div>
                  <h4>Technical Expertise</h4>
                  <p>Full-stack development across MERN stack, WordPress, and cloud deployment technologies</p>
                </div>
              </Col>
              <Col md={6} className="credential-card" data-aos="fade-left" data-aos-delay="300">
                <div className="credential-item">
                  <div className="credential-icon">💡</div>
                  <h4>Proven Results</h4>
                  <p>Delivered scalable solutions that increased client engagement and business revenue</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingTop: "50px" }}>
          <Col md={10}>
            <Card className="cta-card" data-aos="fade-up">
              <Card.Body>
                <h2 className="cta-heading">🚀 Ready to Start Your Project?</h2>
                <p className="cta-description">
                  I offer flexible engagement options including fixed-price projects, retainer agreements, and custom solutions.
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
