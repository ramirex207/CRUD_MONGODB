"use client"
import { useState } from 'react';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {GrMail} from 'react-icons/gr'
import Image from 'next/image';
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'

function LoginPage() {
  const [passwordVisible,setPasswordVisible] = useState(false) // Estado para mostrar u ocultar la contraseña
  const [error, setError] = useState(null);
  const [datos, setDatos] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
  const Router = useRouter();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await signIn("credentials",{
          email:datos.email,
          password:datos.password,
          redirect:false
      })
      //console.log(res)
      if((await res).error === null){
          console.log("ok")
          return Router.push("/dashboard-Admin")
      }
      else{
          setError(res.error)
          console.log(error)
          return Router.push("/login")
      }
      
    } catch (error) {
        setError(error.response.data.message)
        console.error(error)
    }
};

  return (
    <div className="justify-center h-[calc(100vh-4rem)] flex items-center">
      <div className='lg:flex rounded-md shadow-2xl bg-teal-500 bg-opacity-20'>
        <div className='bg-slate-100 p-2 flex justify-center items-center text-teal-50 shadow-2xl bg-opacity-10'>
        <Image src='/logoNefro1.png' alt="logo" width={200} height={200} 
        priority/>
        </div>
        <form
          onSubmit={handleSubmit}
          className=' p-4 max-w-md mx-auto lg:max-w-none my-4 h-96 flex flex-col justify-center'
        >
          

          {error && <div className="bg-red-500 p-2 mb-2 uppercase text-slate-800 text-center rounded-md">{error}</div>}
          
          <div className='flex bg-teal-100 items-center h-10 mb-4 px-4 rounded-full'>
            <input
              type="email"
              placeholder="Correo electrónico"
              name="email"
              onChange={handleInputChange}
              className='w-full bg-transparent flex outline-none items-center '
            />
            <GrMail className='text-teal-500 text-xl'/>
          </div>
          <div className='flex bg-teal-100 items-center h-10 mb-4 px-4 rounded-full'>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Contraseña"
            name="password"
            onChange={handleInputChange}
            className='w-full bg-transparent flex outline-none items-center '
          />
               {passwordVisible ? (
            <AiFillEye className='text-teal-700 text-2xl cursor-pointer' onClick={handlePasswordVisibility}/>
          ) : (
            <AiFillEyeInvisible className='text-teal-700 text-2xl cursor-pointer' onClick={handlePasswordVisibility}/>
          )}
          </div>

          <button
          className='bg-teal-950 hover:bg-teal-300 text-white px-4 py-3 my-2 rounded-sm w-full uppercase font-semibold tracking-wider'
          >Ingresar</button>
        </form>

      </div>
      
    </div>
  );
}

export default LoginPage;
