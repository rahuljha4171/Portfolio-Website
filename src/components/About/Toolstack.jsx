import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVscodium,
  SiPostman,
  SiVercel,
  SiGithub,
  SiDocker,
  SiNpm,
} from "react-icons/si";
import { DiGitBranch, DiWindows } from "react-icons/di";
import { FaAws } from "react-icons/fa";

function Toolstack() {
  const tools = [
    ["VSCodium", SiVscodium],
    ["GitHub", SiGithub],
    ["Git", DiGitBranch],
    ["Postman", SiPostman],
    ["AWS", FaAws],
    ["Linux", SiLinux],
    ["Windows", DiWindows],
    ["Vercel", SiVercel],
    ["Docker", SiDocker],
    ["npm", SiNpm],
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map(([name, Icon]) => (
        <Col xs={4} md={2} className="tech-icons" key={name}>
          <Icon aria-hidden="true" />
          <span className="tech-label">{name}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
