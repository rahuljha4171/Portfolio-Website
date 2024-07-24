import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import homeIcon from '../../Assets/homeicons.svg'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

import './home.css'

function getGreeting () {
  return (
    <div>
      <h1 className='heading-name'>
        <strong className='main-name'>SUNMED CAPITAL</strong>
      </h1>

      <h2 style={{ paddingBottom: 15 }} className='heading'>
        Sunmed Capital is dedicated to promote innovation in medical devices by
        working closely with physicians, engineers, and entrepreneurs.
      </h2>
    </div>
  )
}

function Home () {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Container className='home-content'>
          <Row>
            <Col md={7} className='home-header'>
              {getGreeting()}
            </Col>

            <Col md={5} style={{ paddingBottom: 0 }}>
              <img
                src={homeIcon}
                alt='home pic'
                className='img-fluid'
                style={{ paddingTop: 50 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <ScrollToTop />
    </section>
  )
}

export default Home
