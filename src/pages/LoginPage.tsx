import { Link } from "react-router-dom"
import { Login } from "../components/Login"

export const LoginPage = () => {

  return(
    <main className='container'>
      
      <h2>Login</h2>
      
      <Login />

      <div className='formSwitch'>
        <p>Еще нет аккаунта?</p> 

        <Link to='/register'>
          <button>Регистрация</button>
        </Link>
      </div>        
      
    </main>
  )
}