import React, { useState, useRef, useEffect, useContext } from 'react'
import { Container, Row, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import "./header.css"
import { AuthContext } from '../../context/AuthContext'
import Avatars from '../../assets/images/avatars.png'
import Avatar from '../../assets/images/avatar.jpg'
import { BASE_URL } from '../../utils/config'

const Header = () => {
   const {user, accessToken, dispatch} = useContext(AuthContext)
   const headerRef = useRef(null)
   const navigate = useNavigate()
   const [avatarUrl, setAvatarUrl] = useState('');
   const [isavatar, setIsAvatar] = useState()

   useEffect(() => {
      const getAvatar = async () => {
         if (!user || !accessToken) {
            console.warn("User or access token is missing");
            setIsAvatar(false);
            return;
         }
      
         try {
            const res = await fetch(`${BASE_URL}/profile/download-avatar?id=${user}&token=${accessToken}`);
            
            if (!res.ok) {
               console.error(`Error fetching avatar: ${res.status} ${res.statusText}`);
               setIsAvatar(false);
               return; // Detenemos aquí si la respuesta no es válida
            }
      
            const blob = await res.blob(); // Si estás descargando un archivo (imagen)
            const url = URL.createObjectURL(blob);
            setAvatarUrl(url);
      
            setIsAvatar(true);
         } catch (err) {
            console.error(err.message);
            setIsAvatar(false);
         }
      };
      getAvatar();
   }, [user, accessToken]);

   const handleClick = () => {
      navigate('/profile/menu')
   }

   const logout = async() => {
      dispatch({ type: 'LOGOUT' })
      navigate('/')
   }

   const dropdownRef = useRef(null);
   const [isActive, setIsActive] = useState(false);
   const onClick = () => setIsActive(!isActive);

   return (
      <header className='header items-center' ref={headerRef}>
         <Container>
            <Row>
               <div className="nav__wrapper d-flex align-items-center justify-content-between m-3">
                  <div className="logo">
                     <Link to='/home'><img src={Logo} alt="Logo" /></Link>
                  </div>

                  {/* Links en el centro */}
                  <div className="nav__center d-flex justify-content-center flex-grow-1">
                      <Link to="/home" className="nav__link mx-3 btn secondary__btn">Inicio</Link>
                      <Link to="/searchcarsharing" className="nav__link mx-3 btn secondary__btn">Buscar Viaje</Link>
                      <Link to={user ? "ride/pickup" : "/login/emailpassword"} className="nav__link mx-3 btn secondary__btn">Publicar viaje</Link>

               </div>


                  <div className="nav__right d-flex align-items-center gap-4">
                     <div className="nav__btns d-flex align-items-center gap-2">
                        {
                           !user ? <>
                              <div className="relative">
                                 <button onClick={onClick} className="menu-trigger p-0 m-0">
                                    <img src={Avatar} className="w-12 rounded-full" alt="Avatar"/>
                                 </button>
                                 <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                                    <ul>
                                       <li className=' font-medium text-lg hover:bg-slate-200' onClick={() => setIsActive(false)}>
                                          <a href="/login/emailpassword">Iniciar sesión</a>
                                       </li>
                                       <li className=' font-medium text-lg hover:bg-slate-200' onClick={() => setIsActive(false)}>
                                          <a href="/register/email">Registrarse</a>
                                       </li>
                                    </ul>
                                 </nav>
                              </div>
                           </> : <>
                              <div className="relative">
                                 {isavatar ? <button onClick={onClick} className="menu-trigger p-0 m-0">
                                    <img src={avatarUrl} className="w-12 rounded-full" alt="Avatar"/>
                                 </button> : <button onClick={onClick} className="menu-trigger p-0 m-0">
                                    <img src={Avatars} className="w-12 rounded-full" alt="Avatar"/>
                                 </button>}
                                 <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                                    <ul>
                                       <li className='flex text-center text-lg font-medium hover:bg-slate-200' onClick={() => setIsActive(false)}>
                                          <svg className="w-6 h-6 mt-auto mb-auto ml-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                                             <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/>
                                          </svg>
                                          <a href="/myrides">Tus viajes</a>
                                       </li>
                                       <li className="flex font-medium text-lg hover:bg-slate-200" onClick={() => setIsActive(false)}>
                                          <svg className="mt-auto mb-auto ml-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                          </svg>
                                          <button onClick={handleClick}>Perfil</button>
                                       </li>
                                       <li className="flex font-medium text-lg hover:bg-slate-200" onClick={() => setIsActive(false)}>
                                          <svg className="mt-auto mb-auto ml-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                          </svg>
                                          <button onClick={logout} className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent">Cerrar sesión</button>
                                       </li>
                                    </ul>
                                 </nav>
                              </div>
                           </>
                        }
                     </div>
                  </div>
               </div>
            </Row>
         </Container>
      </header>
   )
}

export default Header
