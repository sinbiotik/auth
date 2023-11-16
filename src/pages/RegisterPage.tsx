import { Link } from "react-router-dom"
import { SignUp } from "../components/SignUp"

export const RegisterPage = () => {

  return(
    <main className='container'>

      <h2>Register</h2>

      <SignUp />

      <div className='formSwitch'>
        <p>Уже есть аккаунт?</p>

        <Link to='/login'>
          <button>Войти</button>
        </Link>
      </div>

      
    </main>
  )
}