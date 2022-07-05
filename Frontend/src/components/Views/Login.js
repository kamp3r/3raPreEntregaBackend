import React, {useState} from 'react'
import Login from '../Login/Login'
import Register from '../Register/Register'

const LoginPage = () => {
  const [register, setRegistered] = useState(false)

  const handleRegister = () => {
    setRegistered(!register)
  }

  return (
    <div>
    {(register) ? <Login handleRegister={handleRegister}/> : <Register handleRegister={handleRegister}/>}

    </div>
  )
}

export default LoginPage