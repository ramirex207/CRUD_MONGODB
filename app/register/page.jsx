"use client";
import { useState } from 'react';
import axios from 'axios'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'

function RegisterPage() {
  const router = useRouter()
  const [datos,setDatos] = useState({
    name:'',
    email:'',
    password:''
  })
  const [errorMessage,setErrorMessage] = useState("")
  const [serverMessage,setServerMessage] = useState("")
  const handleInputChange = (event) => {
    const {name,value} = event.target
    setDatos({...datos,[name]:value})
  };
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const postdata = await axios.post('/api/auth/signup',datos)
      setServerMessage(postdata.data.message)
      setErrorMessage(null)
      const res = await signIn('credentials', {
        email: datos.email,
        password: datos.password,
        redirect: false,
      });
      if (res.error) {
        setErrorMessage(res.error)
        setServerMessage(null)
        return
      }

      console.log(res)
      router.push('/dashboard/profile')
      
 
    } catch (error) {
      console.log(error.response.data.message)
      setErrorMessage(error.response.data.message)
      setServerMessage(null)
    }
  }



  return (
    <div className="bg-zinc-400 p-4 rounded-lg" >
      {
        errorMessage && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error! </strong>
        <span className="block sm:inline">{errorMessage}</span>
      </div>
      }
      {
        serverMessage && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Registro Exitoso! </strong>
        <span className="block sm:inline">{serverMessage}</span>
        </div>
      }
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-3xl pb-10">Registro de Usuario</h1>
        <input type="text" placeholder='Joe Doe' 
        name='name' 
        value={datos.name}
        onChange={handleInputChange}
        className='bg-gray-200 border-2 border-gray-200 rounded-sm p-2 mb-4 w-full'
        />
        <input type="email" placeholder='joe@example.com' 
        name='email'
        value={datos.email}
        onChange={handleInputChange}  
        className='bg-gray-200 border-2 border-gray-200 rounded-sm p-2 mb-4 w-full'
        />
        <input type="password" placeholder='*******' 
        name='password'  
        value={datos.password}
        onChange={handleInputChange}
        className='bg-gray-200 border-2 border-gray-200 rounded-sm p-2 mb-4 w-full'
        />
        <button
        className='bg-sky-600 hover:bg-sky-300 text-white px-4 py-3 rounded-sm w-full'
        >Registrar</button>
      </form>

    </div>
  )
}


export default RegisterPage