import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Spinner, Card } from "react-bootstrap";
import { AiOutlineMail, AiOutlinePhone, AiOutlineClockCircle } from "react-icons/ai";
import { FaCheckCircle, FaClock, FaHeadset } from "react-icons/fa";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState("success");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setAlertVariant("success");
        setShowAlert(true);

        setFormData({
          name: "",
          email: "",
          subject: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
        });
      } else {
        setAlertVariant("danger");
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setAlertVariant("danger");
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  };

  const contactMethods = [
    {
      icon: <AiOutlineMail />,
      title: "Email",
      value: "rahul.workmail01@gmail.com",
      response: "Response within 24 hours"
    },
    {
      icon: <AiOutlineClockCircle />,
      title: "Availability",
      value: "Remote Worldwide",
      response: "Available for immediate projects"
    },
    {
      icon: <AiOutlinePhone />,
      title: "Quick Call",
      value: "By Appointment",
      response: "Schedule a free 15-min consultation"
    }
  ];

  const whyChoose = [
    { icon: <FaCheckCircle />, text: "Quick response & consistent communication" },
    { icon: <FaCheckCircle />, text: "Flexible engagement models" },
    { icon: <FaCheckCircle />, text: "Production-ready code quality" },
    { icon: <FaCheckCircle />, text: "On-time project delivery" }
  ];

  return (
    <Container fluid className="contact-section">
      <Container>
        <Row className="contact-header" data-aos="fade-up">
          <Col xl={10} className="mx-auto">
            <h1 className="contact-heading">
              Ready to Start Your Project?
            </h1>
            <p className="contact-subheading">
              Let's discuss your project requirements and find the perfect solution for your business needs
            </p>
          </Col>
        </Row>

        <Row className="contact-content" style={{ marginTop: "50px" }}>
          {/* Left Column - Info & Why Choose */}
          <Col lg={5} className="contact-sidebar" data-aos="fade-right">

            <h3 style={{ fontSize: "1.8em", marginBottom: "30px", fontWeight: "700" }}>
              💼 Let's Connect
            </h3>

            {/* Contact Methods */}
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div key={index} className="contact-method-item" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-content">
                    <h4 className="method-title">{method.title}</h4>
                    <p className="method-value">{method.value}</p>
                    <p className="method-response">{method.response}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Me Card */}
            <Card className="why-choose-card" data-aos="fade-up" style={{ marginTop: "30px" }}>
              <Card.Body>
                <h4 style={{ marginBottom: "20px", fontWeight: "700" }}>Why Choose Me?</h4>
                <ul className="choose-list">
                  {whyChoose.map((item, index) => (
                    <li key={index}>
                      {item.icon}
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>

            {/* Availability Card */}
            <Card className="availability-card-new" data-aos="fade-up" style={{ marginTop: "20px" }}>
              <Card.Body>
                <div style={{ marginBottom: "15px" }}>
                  <h4 style={{ color: "white", fontWeight: "700", marginBottom: "10px" }}>
                    💼 Ready to Collaborate
                  </h4>
                  <p style={{ color: "white", opacity: 0.95 }}>
                    Flexible engagement models: Fixed-Price Projects, Retainer Agreements, or Custom Solutions
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column - Form */}
          <Col lg={7} className="contact-form-wrapper" data-aos="fade-left">
            <Card className="form-card">
              <Card.Body className="form-body">
                {showAlert && (
                  <Alert
                    variant={alertVariant}
                    onClose={() => setShowAlert(false)}
                    dismissible
                  >
                    {alertVariant === "success"
                      ? "✅ Thank you! Your message has been sent successfully. I'll review your project details and get back to you within 24 hours!"
                      : "❌ Sorry, something went wrong. Please try again or email me directly at rahul.workmail01@gmail.com"}
                  </Alert>
                )}

                <h3 style={{ marginBottom: "30px", fontWeight: "700", color: "var(--clr-txt)" }}>
                  Tell Me About Your Project
                </h3>

                <Form onSubmit={handleSubmit} className="contact-form">
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="form-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="form-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Project Type</Form.Label>
                    <Form.Select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select project type...</option>
                      <option value="web-app">Web Application</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="ecommerce">E-Commerce Platform</option>
                      <option value="saas">SaaS Product</option>
                      <option value="dashboard">Custom Dashboard</option>
                      <option value="api">API Development</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Subject *</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Brief project title"
                      required
                      className="form-input"
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Budget Range</Form.Label>
                        <Form.Select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="form-input"
                        >
                          <option value="">Select budget...</option>
                          <option value="500-2000">$500 - $2,000</option>
                          <option value="2000-5000">$2,000 - $5,000</option>
                          <option value="5000-10000">$5,000 - $10,000</option>
                          <option value="10000+">$10,000+</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Timeline</Form.Label>
                        <Form.Select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="form-input"
                        >
                          <option value="">Select timeline...</option>
                          <option value="asap">ASAP (1-2 weeks)</option>
                          <option value="1-month">Within 1 Month</option>
                          <option value="2-3-months">2-3 Months</option>
                          <option value="flexible">Flexible</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Project Details *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, goals, and any specific requirements..."
                      required
                      className="form-input"
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                          className="me-2"
                        />
                        Sending Your Request...
                      </>
                    ) : (
                      "🚀 Send Project Inquiry"
                    )}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Response Time Banner */}
        <Row style={{ marginTop: "60px" }} data-aos="fade-up">
          <Col md={12}>
            <div className="response-banner">
              <div className="banner-item">
                <FaClock className="banner-icon" />
                <div>
                  <h4>Quick Response</h4>
                  <p>Get a reply within 24 hours</p>
                </div>
              </div>
              <div className="banner-item">
                <FaHeadset className="banner-icon" />
                <div>
                  <h4>Consultation</h4>
                  <p>Free initial project discussion</p>
                </div>
              </div>
              <div className="banner-item">
                <FaCheckCircle className="banner-icon" />
                <div>
                  <h4>Professional</h4>
                  <p>Production-ready solutions</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Contact;
