import React from 'react'
import TourCard from '../../shared/TourCard'
import { Col } from 'reactstrap'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'

const AllRidesList = () => {

  const { data: getAllRides, loading, error } = useFetch(
    `${BASE_URL}/rides/results/getAllRides`
  );

  return (
    <>
      {loading && <h4>Loading...........</h4>}
      {error && <h4>{error}</h4>}
      {!loading && !error && 
        getAllRides?.map(ride => (
          <Col lg='3' md='6' sm='6' className='mb-4' key={ride._id}>
            <TourCard tour={ride} />
          </Col>
        ))
      }
    </>
  )
}

export default AllRidesList