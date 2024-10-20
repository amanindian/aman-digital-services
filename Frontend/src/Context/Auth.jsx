import { useState, useEffect, createContext, useContext } from 'react'




export const authContext = createContext()
const AuthProvider = ({ children }) => {
   const [auth, setAuth] = useState({
      user: null,
      token: ""
   });
   useEffect(() => {
      if (localStorage.auth) {
         setAuth(
            JSON.parse(localStorage.auth)
         )
      }
   }, [])

   return (
      <authContext.Provider value={[auth, setAuth]}>
         {children}
      </authContext.Provider>
   )
}

const useAuth = () => useContext(authContext)


export { AuthProvider, useAuth }