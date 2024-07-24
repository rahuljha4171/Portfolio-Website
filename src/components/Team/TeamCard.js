import React from 'react'
import Card from 'react-bootstrap/Card'
import { AiOutlineArrowRight } from 'react-icons/ai'

function TeamCard () {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0' data-aos='zoom-in'>
          <p style={{ textAlign: 'justify' }}>Example text 1</p>
          <ul>
            <li className='about-activity'>
              <AiOutlineArrowRight /> Example text 2
            </li>
            <li className='about-activity'>
              <AiOutlineArrowRight /> Example text 3
            </li>
            <li className='about-activity'>
              <AiOutlineArrowRight /> Example text 4
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default TeamCard
