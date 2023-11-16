import { useAppDispatch } from "../hooks/redux-hooks"
import { Form } from "./Form";
import { setUser } from "../store/userSlice";
import { useNavigate  } from "react-router-dom"

export const Login = () => {
  
  const dispatch = useAppDispatch()
  let navigate = useNavigate()

  const handleLogin = (userEmail: string, password: string) => {

    dispatch(setUser(
      {
        email: userEmail,
        id: userEmail + password,        
      }
    ))

    navigate('/') 

  }


  return(
    <Form title="Войти" handleClick={handleLogin}/>    
  )
}