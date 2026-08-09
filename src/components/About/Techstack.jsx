import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
  DiPhp,
  DiBootstrap,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMysql,
  SiWordpress,
  SiShopify,
  SiAngular,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

function Techstack() {
  const technologies = [
    ["React", DiReact],
    ["Node.js", DiNodejs],
    ["JavaScript", DiJavascript1],
    ["React Native", TbBrandReactNative],
    ["Angular", SiAngular],
    ["Express", SiExpress],
    ["MongoDB", DiMongodb],
    ["MySQL", SiMysql],
    ["PHP", DiPhp],
    ["HTML5", DiHtml5],
    ["CSS3", DiCss3],
    ["Bootstrap", DiBootstrap],
    ["Tailwind CSS", SiTailwindcss],
    ["WordPress", SiWordpress],
    ["Shopify", SiShopify],
    ["Firebase", SiFirebase],
    ["Next.js", SiNextdotjs],
    ["Redux", SiRedux],
    ["Git", DiGit],
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {technologies.map(([name, Icon]) => (
        <Col xs={4} md={2} className="tech-icons" key={name}>
          <Icon aria-hidden="true" />
          <span className="tech-label">{name}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
