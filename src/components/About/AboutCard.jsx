import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hello! I'm <span className="primary-header">Rahul Jha</span>, an accomplished Full-Stack Developer & Software Engineer with <span className="primary-header">6+ years</span> of experience delivering scalable web and mobile applications.
            <br />
            <br />
            <strong>How I Approach Engineering:</strong>
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Translate requirements into dependable, maintainable products
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Focus on clean code, scalability, and performance
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Communicate decisions, progress, and tradeoffs clearly
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Work iteratively with structured planning and delivery
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Design systems with long-term maintenance in mind
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
