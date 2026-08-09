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
          <span className="primary-header">Engineering</span> Capabilities
        </h1>
        <p className="services-subheading" data-aos="fade-up">
          Technologies and problem areas I work with across the product lifecycle
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

        <section className="expertise-details" aria-labelledby="expertise-details-title">
          <h2 id="expertise-details-title">
            Full-Stack Engineering for <span className="primary-header">Real Products</span>
          </h2>
          <p className="expertise-intro">
            I work across the application stack to turn product requirements into maintainable software.
            My experience includes responsive React interfaces, Node.js and PHP backends, REST API design,
            relational and document databases, React Native applications, and production deployment.
          </p>

          <Row className="expertise-content-row">
            <Col md={6} lg={4}>
              <article className="expertise-content-card">
                <h3>Scalable Web Applications</h3>
                <p>
                  I build responsive web applications, dashboards, SaaS interfaces, and e-commerce experiences
                  with reusable components, accessible interactions, predictable state management, and performance
                  that remains dependable as features grow.
                </p>
              </article>
            </Col>
            <Col md={6} lg={4}>
              <article className="expertise-content-card">
                <h3>Backend APIs and Data</h3>
                <p>
                  Backend work includes RESTful services, authentication, business logic, third-party integrations,
                  database modeling, and query optimization using Node.js, Express, PHP, MongoDB, and MySQL.
                </p>
              </article>
            </Col>
            <Col md={6} lg={4}>
              <article className="expertise-content-card">
                <h3>Mobile and Cloud Delivery</h3>
                <p>
                  I develop cross-platform mobile experiences with React Native and support delivery through Git,
                  Docker, AWS, Vercel, Linux environments, automated builds, and practical production monitoring.
                </p>
              </article>
            </Col>
          </Row>
        </section>

        <section className="engineering-process" aria-labelledby="engineering-process-title">
          <h2 id="engineering-process-title">How I Approach Software Development</h2>
          <p>
            Strong software starts with clear requirements and continues through architecture, implementation,
            testing, deployment, and maintenance. I break complex work into measurable stages, document important
            decisions, validate behavior across devices, and keep code structured for the engineers who maintain it next.
          </p>
        </section>

      </Container>
    </Container>
  );
}

export default Services;
