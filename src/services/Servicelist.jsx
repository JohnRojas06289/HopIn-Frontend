import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Conexión Segura y Confiable",
    desc: "Seguridad entre usuarios."
  },
  {
    imgUrl: guideImg,
    title: "Optimización de Rutas",
    desc: "Coordinación fácil."
  },
  {
    imgUrl: customizationImg,
    title: "Sostenibilidad y Ahorro",
    desc: "Menos gastos, menos emisiones."
  },
]

const ServiceList = () => {
  return <>
    {
      servicesData.map((item,index)=> (
      <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
        <ServiceCard item={item}/>
      </Col>
    ))}
  </>
}

export default ServiceList