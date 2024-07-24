import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Teamcard from './TeamCard'
import teamImg from '../../Assets/team.jpg'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import Techstack from './Techstack'

import './team.css'

function Team () {
  return (
    <Container fluid className='team-section'>
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px'
            }}
          >
            <h1
              style={{ fontSize: '2.1em', paddingBottom: '20px' }}
              data-aos='fade-right'
            >
              <span className='primary-header'>Team</span> Members
            </h1>
            <div data-aos='fade-up'>
              <Teamcard />
            </div>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: '120px', paddingBottom: '50px' }}
            className='team-img'
          >
            <img
              src={teamImg}
              alt='team'
              className='img-fluid'
              data-aos='fade-left'
            />
          </Col>
        </Row>
        <h1 data-aos='fade-right'>
          <span className='primary-header'>Skillset</span> I Work With
        </h1>

        <div data-aos='fade-up'>
          <Techstack />
        </div>
      </Container>
      <ScrollToTop />
    </Container>
  )
}

export default Team
