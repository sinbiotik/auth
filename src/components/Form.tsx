import { useState } from "react"

interface FormProps {
  title: string;
  handleClick: (userEmail: string, pass: string) => void;
}

export const Form = ({title, handleClick}: FormProps) => {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const isContent = pass.length> 5  && (email.includes('@') && email.includes('\.'))
  
  function inputHandler() {
    handleClick(
      email.trim(), pass.trim()
    )
  }

  return(
    <form onSubmit={(e) => e.preventDefault()}>

      <input 
        type="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        placeholder="email"
      />

      <input 
        type="password"
        value={pass}        
        placeholder="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPass(e.target.value)}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === 'Enter' && isContent)   inputHandler()
        }}
      />

      {Boolean(!isContent) ?      
        <button disabled>{title}</button> :
        <button onClick={inputHandler}>{title}</button> 
      }

      {Boolean(!isContent) &&         
        <div className="form__tooltip"> 
          <p>Email должен содержать знаки '@' и '.', пароль длиннее 5 символов</p>          
        </div>        
      }

    </form>
  )
}

