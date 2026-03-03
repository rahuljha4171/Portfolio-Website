import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hello! I'm Rahul Jha, an accomplished Full-Stack Developer & Software Engineer with 6+ years of experience delivering scalable web and mobile applications.
            <br />
            <br />
            <strong>Why Clients Choose to Work With Me:</strong>
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Strong ability to translate ideas into functional products
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Focus on clean code, scalability, and performance
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Clear, proactive communication throughout the project
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> On-time delivery and structured project execution
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Long-term support and reliable maintenance
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
