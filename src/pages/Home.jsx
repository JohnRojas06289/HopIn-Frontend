import React from 'react'
import '../styles/home.css'
import {Container,Row,Col} from 'reactstrap';
import SearchBar from './../shared/SearchBar'

import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle';
import ServiceList from '../services/Servicelist';
import AllRidesList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';

const Home = () => {
   return( 
   <>
     {/* =============== hero section start===============*/}
     <section>
       <Container>
         <Row>
           <Col lg='6'>
             <div className="hero_content">
               <div className="hero_subtitle d-flex align-items-center">
                 <Subtitle subtitle={'Lo que debes saber antes de ir'}/>
                 <img src={worldImg} alt="" />
               </div>
               <h1>
                 Conecta, comparte y viaja mejor: ¡tu próxima aventura"{" "}
                 <span className="highlight">comienza aquí!</span>
               </h1>
               <p>
               Conecta con otros estudiantes, comparte tus trayectos y disfruta de viajes más económicos y sostenibles. Haz que cada viaje sea más cómodo, social y eficiente. ¡Únete a la comunidad y empieza a compartir!
               </p>
             </div>
           </Col>
 
           <Col lg='2'>
             <div className="hero_img-box">
               <img src={heroImg} alt="" />
             </div>
           </Col>
           <Col lg='2'>
             <div className="hero_img-box hero_video-box mt-4">
               <video src={heroVideo} alt="" controls/>
             </div>
           </Col>
           <Col lg='2'>
             <div className="hero_img-box mt-5">
               <img src={heroImg02} alt="" />
             </div>
           </Col>
           <SearchBar/>
         </Row>
       </Container>
     </section>
     {/* =============== hero section end===============*/}
     <section>
       <Container>
         <Row>
           <Col lg='3'>
             <h5 className="services_subtitle">Lo que ofrecemos</h5>
             <h3 className="services_title">Ofrecemos nuestros mejores servicios</h3>
           </Col>
           <ServiceList/>
         </Row>
       </Container>
     </section>
 
     {/* =============== feature tour start===============*/}
     <section>
       <Container>
         <Row>
           <Col lg='12' className='mb-5'>
             <Subtitle subtitle={"Explore"}/>
             <h2 className="featured_tour-title">Ultimos viajes publicados</h2>
           </Col>
           <AllRidesList/>
         </Row>
       </Container>
     </section>
     {/* =============== feature tour end===============*/}
 
     {/* =============== experience section start===============*/}
     <section>
       <Container>
         <Row>
           <Col lg='6'>
             <div className="experience_content">
               <Subtitle subtitle={'Experience'}/>
 
               <h2>
               Con toda nuestra experiencia<br /> Nosotros te serviremos
               </h2>
               <p>
                 Con años de experiencia ofreciendo soluciones confiables y eficientes,<br></br> estamos aquí para hacer que tu experiencia sea aún más fácil y agradable. 
                 <br />
                 Nuestro compromiso es brindarte el mejor servicio, adaptado a tus necesidades.
               </p>
             </div>
 
             <div className="counter_wrapper d-flex align-items-center gap-5">
               <div className="counter_box">
                 <span>1k+</span>
                 <h6>Viajes exitosos</h6>
               </div>
               <div className="counter_box">
                 <span>1k+</span>
                 <h6>Clientes habituales</h6>
               </div>
               <div className="counter_box">
                 <span>5</span>
                 <h6>Años de experiencia</h6>
               </div>
             </div>
           </Col>
           <Col lg='6'>
             <div className="experience_img">
               <img src={experienceImg} alt="" />
             </div>
           </Col>
         </Row>
       </Container>
     </section>
     {/* =============== experience section end===============*/}
 
     {/* =============== gallery section start===============*/}
     <section>
       <Container>
         <Row>
           <Col lg='12'>
             <Subtitle subtitle={'Galeria'}/>
             <h2 className="gallery_title">
             Visita la galería de visitas de nuestros clientes
             </h2>
           </Col>
           <Col lg='12'>
             <MasonryImagesGallery/>
           </Col>
         </Row>
       </Container>
     </section>
     {/* =============== gallery section end===============*/}
 
     {/* =============== testimonial section start===============*/}
     <section>
       <Container>
         <Row>
           <Col lg='12'>
           <Subtitle subtitle={'Los fans aman'}/>
           <h2 className="testimonial_title">Lo que nuestros fans dicen de nosotros</h2>
           </Col>
           <Col lg='12'>
             <Testimonials/>
           </Col>
         </Row>
       </Container>
     </section>
     {/* =============== testimonial section end===============*/}
     </>
     )
 }

export default Home
