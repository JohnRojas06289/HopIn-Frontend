import React from 'react'
import '../styles/home.css'
import { Container, Row} from 'reactstrap'
import SearchBar from './../shared/SearchBar'
import Footer from '../components/Footer/Footer'
import image from '../assets/images/white-car.jpg'

const Home = () => {
   return(
   <>
      <section className='bg-position' style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", backgroundColor:"#1C1C27"}}>
         <Container >
            <Row>
               <SearchBar pos="mt-96"/>
            </Row>
         </Container>
         <Footer/>
      </section>
   </>
   )
}

export default Home
