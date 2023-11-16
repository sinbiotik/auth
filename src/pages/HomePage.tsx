import { useAppDispatch } from "../hooks/redux-hooks"
import { useAuth } from "../hooks/use-auth"
import { removeUser } from "../store/userSlice"
import { Navigate } from 'react-router-dom';

export const HomePage = () => {

  const dispatch = useAppDispatch()
  const {isAuth} = useAuth()

  return isAuth ? (
    
    <main className='container'>

      <h2>Вы вошли в аккаунт!</h2> 

      <button
        onClick={() => dispatch(removeUser())}        
      >
        Выйти 
      </button>
      
    </main>

  ) : (
    <Navigate to="/login" />
  )  
  
}


