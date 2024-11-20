import { createContext, useEffect, useReducer } from 'react'

// Funciones para obtener datos del localStorage
const getUserFromLocalStorage = () => {
   const user = localStorage.getItem("user");
   try {
      return user ? JSON.parse(user) : null;
   } catch (error) {
      console.error("Error parsing user from localStorage", error);
      return null;
   }
}

const getAccessTokenFromLocalStorage = () => {
   const accessToken = localStorage.getItem("accessToken");
   try {
      return accessToken ? JSON.parse(accessToken) : null;
   } catch (error) {
      console.error("Error parsing accessToken from localStorage", error);
      return null;
   }
}

// Estado inicial del contexto de autenticación
const initial_state = {
   user: getUserFromLocalStorage(),
   accessToken: getAccessTokenFromLocalStorage(),
   loading: false,
   error: null
}

// Creación del contexto de autenticación
export const AuthContext = createContext(initial_state)

// Reductor de autenticación
const AuthReducer = (state, action) => {
   switch (action.type) {
      case 'LOGIN_START':
         return {
            user: null,
            loading: true,
            error: null,
            accessToken: null
         }
      case 'LOGIN_SUCCESS':
         return {
            user: action.payload,
            loading: false,
            error: null,
            accessToken: action.token
         }
      case 'LOGIN_FAILURE':
         return {
            user: null,
            loading: false,
            error: action.payload,
            accessToken: null
         }
      case 'REGISTER_SUCCESS':
         return {
            user: null,
            loading: false,
            error: null,
            accessToken:null
         }
      case 'LOGOUT':
         return {
            user: null,
            loading: false,
            error: null,
            accessToken:null
         }

      default:
         return state
   }
}

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AuthReducer, initial_state)

   useEffect(() => {
      localStorage.setItem("user", JSON.stringify(state.user))
      localStorage.setItem("accessToken", JSON.stringify(state.accessToken))
   }, [state.user, state.accessToken])

   return (
      <AuthContext.Provider value={{
         user: state.user,
         loading: state.loading,
         error: state.error,
         accessToken: state.accessToken,
         dispatch,
      }}>
         {children}
      </AuthContext.Provider>
   )
}