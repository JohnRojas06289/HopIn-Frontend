import React, { useState, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import { BASE_URL } from '../../../utils/config'
const Licensenum = () => {
  const {user,accessToken}=useContext(AuthContext)
  const location=useLocation();
  const [vehicle, setVehicle] = useState({
    number: location.state.vehicle_license_number,
    brand: location.state.vehicle_brand,
    model: location.state.vehicle_model,
    kind: location.state.vehicle_kind,
    color: location.state.vehicle_color,
    age: location.state.vehicle_age,
  });


   const navigate = useNavigate();

   const handleChange = (e) => {
      setVehicle(prev => ({ ...prev, [e.target.id]: e.target.value }))
   }

  
  const handleSubmitClick = async(e) => {
    e.preventDefault();
    await fetch(`${BASE_URL}/users?id=${user}&token=${accessToken}`, {
      method: 'put',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({vehicle_license_number:vehicle.number,vehicle_brand:vehicle.brand,vehicle_model:vehicle.model,vehicle_kind:vehicle.kind,vehicle_color:vehicle.color,vehicle_age:vehicle.age,isvehicle:true})
   })
   navigate('/profile/menu')
  };

   return (
      <>
        <div className='text-center w-[500px] lg:w-[600px] xl:w-[700px] ml-auto mr-auto'>
            <form onSubmit={handleSubmitClick}>
               <h1 className='text-center mt-12 font-bold text-4xl text-slate-700'>Detalles del vehículo</h1>
               <div className='mt-10'>
                  <h1 className='text-lg mb-1 text-left ml-2 font-semibold text-slate-600'>¿Cuál es el número de su placa?</h1>
                  <input type='text' name='number' id='number' value={vehicle.number} onChange={handleChange} className='rounded-xl text-lg appearance-nonen border-gray-200 focus:outline-none focus:border-green-500  focus:border-2 w-max-full w-[500px] lg:w-[600px] xl:w-[700px]   bg-slate-200 font-semibold h-12' placeholder='HGL-564'></input>
               </div>
               <div className='mt-3'>
                  <h1 className='text-lg mb-1 text-left ml-2 font-semibold text-slate-600'>¿Cual es la marca de su vehículo?</h1>
                  <input type='text' name='brand' id='brand' value={vehicle.brand} onChange={handleChange} className='rounded-xl text-lg appearance-nonen border-gray-200 focus:outline-none focus:border-green-500  focus:border-2 w-max-full w-[500px] lg:w-[600px] xl:w-[700px]  bg-slate-200 font-semibold h-12' placeholder='FORD'></input>
               </div>
               <div className='mt-3'>
                  <h1 className='text-lg mb-1 text-left ml-2 font-semibold text-slate-600'>¿Cuál es el modelo de su vehículo?</h1>
                  <input type='text' name='model' id='model' value={vehicle.model} onChange={handleChange} className='rounded-xl text-lg appearance-nonen border-gray-200 focus:outline-none focus:border-green-500  focus:border-2 w-max-full w-[500px] lg:w-[600px] xl:w-[700px]  bg-slate-200 font-semibold h-12' placeholder='FOCUS'></input>
               </div>
               <div className='mt-3'>
                  <h1 className='text-lg mb-1 text-left ml-2 font-semibold text-slate-600'>¿Qué tipo de vehículo es?</h1>
                  <input type='text' name='kind' id='kind' value={vehicle.kind} onChange={handleChange} className='rounded-xl text-lg appearance-nonen border-gray-200 focus:outline-none focus:border-green-500  focus:border-2 w-max-full w-[500px] lg:w-[600px] xl:w-[700px]  bg-slate-200 font-semibold h-12' placeholder='Camioneta'></input>
               </div>
               <div className='mt-3'>
                  <h1 className='text-lg mb-1 text-left ml-2 font-semibold text-slate-600'>¿De qué color es tu vehículo?</h1>
                  <input type='text' name='color' id='color' value={vehicle.color} onChange={handleChange} className='rounded-xl text-lg appearance-nonen border-gray-200 focus:outline-none focus:border-green-500  focus:border-2 w-max-full w-[500px] lg:w-[600px] xl:w-[700px]  bg-slate-200 font-semibold h-12' placeholder='Negro'></input>
               </div>
               <div className='mt-3'>
                  <h1 className='text-lg mb-1 text-left ml-2 font-semibold text-slate-600'>¿Cuando se matriculó su vehículo?</h1>
                  <input type='text' name='age' id='age' value={vehicle.age} onChange={handleChange} className='rounded-xl text-lg appearance-nonen border-gray-200 focus:outline-none focus:border-green-500  focus:border-2 w-max-full w-[500px] lg:w-[600px] xl:w-[700px]  bg-slate-200 font-semibold h-12' placeholder='2012'></input>
               </div>
               
               <br></br>
               <button type='submit' className='mt-10 bg-green-400 text-white font-bold rounded-full h-12 w-28 hover:bg-green-500'>Guardar</button>
            </form>
        </div>
      </>
   )
}

export default Licensenum
