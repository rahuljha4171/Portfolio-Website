import React from 'react'
import { Container } from 'react-bootstrap'
import beian from '../../Assets/beian.png'
import './footer.css'

function Footer () {
  return (
    <Container fluid className='footer'>
      <div className='footer-copywright'>&copy;旸昀资本版权所有</div>
      <div className='footer-copywright' />
      <a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010802011384'>
        浙ICP备19036127号
      </a>
      <div className='footer-copywright'>
        <img src={beian} alt='beian' />
        <a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010802011384'>
          浙公网安备 33010802011384号
        </a>
      </div>
    </Container>
  )
}

export default Footer
