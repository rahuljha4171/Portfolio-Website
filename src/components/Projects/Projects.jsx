import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Ecart from "../../Assets/Projects/ecart.png";
import ExpenseTracker from "../../Assets/Projects/ExpenseTracker.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="Fluorescent-Blue">Selected </strong> Projects
        </h1>
        <p style={{ fontSize: "1.2em", marginBottom: 30 }}>
          A selection of web applications that demonstrate my approach to frontend, backend, and full-stack engineering.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="E Cart"
              description="A full-stack e-commerce application built with React, Material UI, Node.js, Express, and MongoDB, covering product discovery and the core shopping experience."
              ghLink="https://github.com/rahuljha4171/E-cart"
              demoLink="https://ecart.onrender.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="https://github.com/rahuljha4171/Portfolio-Website"
              demoLink="https://rahuljha.info/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="Private Chat"
              description="A real-time chat application built with React and Firebase, with user search, direct messaging, and image sharing."
              demoLink="https://chat-app-rahuljha4171.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ExpenseTracker}
              title="Expense Tracker"
              description="A full-stack finance tracker built with React, Node.js, Express, and MongoDB for recording and managing expenses, investments, savings, and transaction history."
              ghLink="https://github.com/rahuljha4171/Expense-Tracker"
              demoLink="https://expense-tracker.rahuljha4171.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
