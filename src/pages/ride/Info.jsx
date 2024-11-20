import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import '../shake.css'
 const Info = () => {
   
   const location = useLocation();
   const [ride, setRide] = useState({
      date: location.state.date,
      time: location.state.time,
      passengers: location.state.passengers,
      price: location.state.price,
      from : location.state.from,
      to : location.state.to,
      hours: location.state.hours,
      distance: location.state.distance,
      uptime : location.state.uptime,
      routeindex: location.state.routeindex,
      info : "",
      });

   const [info, setInfo] = useState('');


   const navigate = useNavigate();

   const handleChange = (event) => {
      setInfo(event.target.value);
      setError('');
   }

   useEffect(() => {
      setRide(prev => ({ ...prev, info : info }));
    }, [info]);

 const [error, setError] = useState(null);

  const handleSubmitClick = (e) => {
    e.preventDefault();
    setRide(prev => ({ ...prev, info : info }));
    navigate('/publishalert',{state:ride})
  };


   return (
      <>
        <div className='text-center w-full'>
            <form onSubmit={handleSubmitClick}>
               <h1 className='text-center mt-24 font-bold text-4xl text-slate-700'>¿Algo que añadir sobre tu viaje?</h1>
               <div>
                  {error?(<textarea name='email' value={info} onChange={handleChange} className='shake rounded-xl w-[500px] lg:w-[600px] xl:w-[700px] text-lg appearance-nonen border-gray-200  focus:outline-none focus:border-green-500  focus:border-2 w-max-full mt-12 bg-red-200 font-semibold h-44' placeholder="¡Hola! Voy a visitar a mi familia.&#10;¡Viajo con un gato y tengo mucho espacio en el maletero!"></textarea>):
                  (<textarea name='email' value={info} onChange={handleChange} className='rounded-xl w-[500px] lg:w-[600px] xl:w-[700px] text-lg appearance-nonen border-gray-200 focus:outline-none focus:border-green-500  focus:border-2 w-max-full mt-12 bg-slate-200 font-semibold h-44' placeholder="¡Hola! Voy a visitar a mi familia.&#10;¡Viajo con un gato y tengo mucho espacio en el maletero!"></textarea>)}
               </div>
               {error && <div className='font-medium text-red-600'>{error}</div>}
               <br></br>
               <button type='submit' className='mt-16 bg-green-400 text-white font-bold rounded-full h-12 w-28 hover:bg-green-500'>Publicar Viaje</button>
            </form>
        </div>
      </>
   )
}

export default Info
