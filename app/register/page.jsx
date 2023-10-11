"use client";
import { useState } from 'react';
import axios from 'axios'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import { FaUserAlt,FaLock } from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import Image from 'next/image';


function RegisterPage() {
  const router = useRouter()
  const [datos,setDatos] = useState({
    name:'',
    email:'',
    password:'',
    role:'user',
    employeeCode:''
  })
  const [passwordVisible,setPasswordVisible] = useState(false) // Estado para mostrar u ocultar la contraseña
  const [errorMessage,setErrorMessage] = useState("");
  const [serverMessage,setServerMessage] = useState("");
  const [showEmployeeCode,setShowEmployeeCode] = useState(false);
  const handleInputChange = (event) => {
    const {name,value} = event.target
    setDatos({...datos,[name]:value})
  };

  const handleSelectChange = (event) => {
    const {name,value} = event.target
    setDatos({...datos,[name]:value})
    setShowEmployeeCode(value === 'admin')
  };
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

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

      //console.log(res)
      router.push('/profile')
      
 
    } catch (error) {
      console.log(error.response.data.message)
      setErrorMessage(error.response.data.message)
      setServerMessage(null)
    }
  }



  return (
    <div className="flex flex-col items-center justify-center h-screen" >
        {
          errorMessage && <div className="bg-red-100 border border-red-400 text-red-700 py-3 rounded relative" role="alert">
          <strong className="font-bold mx-2">Error! </strong>
          <span className="block sm:inline mx-2 uppercase">{errorMessage}</span>
        </div>
        }
        {
          serverMessage && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Registro Exitoso! </strong>
          <span className="block sm:inline">{serverMessage}</span>
          </div>
        }
      <div className='lg:flex rounded-md shadow-2xl bg-teal-500 bg-opacity-20'>
      
      <div className='bg-slate-100 p-2 flex justify-center items-center text-teal-50 shadow-2xl bg-opacity-10'>
        <Image src='/logoNefro1.png' alt="logo" width={200} height={200} 
        priority/>
        </div>
  
        <form onSubmit={handleSubmit}
          className=' p-4 max-w-md mx-auto lg:max-w-none my-4 h-96 flex flex-col justify-center'
        >
          <div className='flex bg-teal-100 items-center h-10 mb-4 px-4 rounded-full'>
          <input type="text" placeholder='Joe Doe' 
          name='name' 
          value={datos.name}
          onChange={handleInputChange}
          className='w-full bg-transparent flex outline-none items-center '
          />
          <FaUserAlt className='text-teal-700 text-2xl'/>
          </div>
          
          <div className='flex bg-teal-100 items-center h-10 mb-4 px-4 rounded-full'>
          <input type="email" placeholder='joe@example.com' 
          name='email'
          value={datos.email}
          onChange={handleInputChange}  
          className='w-full bg-transparent flex outline-none items-center '
          />
          <GrMail className='text-teal-700 text-2xl'/>
          </div>

          <div className='flex bg-teal-100 items-center h-10 mb-4 px-4 rounded-full'>
          <input 
          type={passwordVisible ? 'text' : 'password'}
          placeholder='**********' 
          name='password'  
          value={datos.password}
          onChange={handleInputChange}
          className='w-full bg-transparent flex outline-none items-center '
          />
          {passwordVisible ? (
            <AiFillEye className='text-teal-700 text-2xl cursor-pointer' onClick={handlePasswordVisibility}/>
          ) : (
            <AiFillEyeInvisible className='text-teal-700 text-2xl cursor-pointer' onClick={handlePasswordVisibility}/>
          )}
          
          
          </div>
          

          <select name="role" id="role"
          value={datos.role}
          onChange={handleSelectChange}
          className='bg-teal-100 border-2 border-teal-200 rounded-full p-2 mb-4 w-full'
          >
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
          </select>
          {showEmployeeCode && ( // Mostrar el campo de código de empleado solo si el rol es "admin"
          <div className='flex bg-teal-100 items-center h-10 mb-4 px-4 rounded-full'>
          <input
            type="text"
            placeholder="Código de administrador"
            name="employeeCode"
            onChange={handleInputChange}
            className='w-full bg-transparent flex outline-none items-center italic'
          />
          <FaLock className='text-teal-700 text-xl'/>
          </div>

          )}
          <button
          className='bg-teal-950 hover:bg-teal-300 text-white px-4 py-3 my-2 rounded-sm w-full uppercase font-semibold tracking-wider'
          >Registrarse</button>
          <h3 className='italic text-center'>¿tienes una cuenta?
          <a href="/login" className='text-teal-900 hover:text-teal-300 underline'> Inicia Sesión</a>
          </h3>

        </form>


        </div>
      
    </div>
  )
}


export default RegisterPage