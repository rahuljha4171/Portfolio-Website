import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import ProjectCard from './ProjectCards'

import TestImg from '../../Assets/med.jpg'

import './project.css'

function Projects () {
  return (
    <Container fluid className='project-section'>
      <Container>
        <h1 className='project-heading'>
          Our <strong className='Fluorescent-Blue'>Portfolio </strong>
        </h1>
        <p>Portfolio is good</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={6} lg={4} className='project-card'>
            <ProjectCard
              imgPath={TestImg}
              title='exampleTitle1'
              description='descriptionText1'
              ghLink='testlink'
              demoLink='testlink'
            />
          </Col>

          <Col md={6} lg={4} className='project-card'>
            <ProjectCard
              imgPath={TestImg}
              title='exampleTitle2'
              description='descriptionText2'
              ghLink='testlink2'
              demoLink='testlink2'
            />
          </Col>
          <Col md={6} lg={4} className='project-card'>
            <ProjectCard
              imgPath={TestImg}
              title='exampleTitle3'
              description='descriptionText3'
              ghLink='testlink3'
              demoLink='testlink3'
            />
          </Col>

          <Col md={6} lg={4} className='project-card'>
            <ProjectCard
              imgPath={TestImg}
              title='exampleTitle4'
              description='descriptionText4'
              ghLink='testlink4'
              demoLink='testlink4'
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  )
}

export default Projects
