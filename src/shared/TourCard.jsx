import React from 'react'
import {Card,CardBody} from "reactstrap";
import {Link} from 'react-router-dom'

import './tour-card.css'

const TourCard = ({tour}) => {

  const {_id,title,city,price} =tour;


  return (
    <div className="tour_card">
      <Card>
        <CardBody>
        <div className="card_top d-flex align-items-centre justify-content-between">
          <span className='tour_location d-flex align-items-center gap-1'>
            <i className='ri-map-pin-line'></i> {city}
          </span>
          <span className='tour_rating d-flex align-items-center gap-1'>
            
          </span>
        </div>

        <h5 className="tour_title"><Link to={`/tours/${_id}`}>{title}</Link></h5>

        <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
          <h5>${price} <span> /por persona</span></h5>
          <button className='btn booking_btn'>
            <Link to={`/rideplan/${_id}`}>Agendar</Link>
          </button>
        </div>
        </CardBody>
      </Card>

      
    </div>
  )
}

export default TourCard