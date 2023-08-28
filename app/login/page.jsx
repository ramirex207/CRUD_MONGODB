"use client"
import { useState } from 'react';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const [error, setError] = useState(null);
  const [datos, setDatos] = useState({
    name: '',
    email: '',
    password: '',
  });
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
          return Router.push("/dashboard/profile")
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
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 w-96 px-4 py-10 rounded-lg flex flex-col items-center text-slate-100 shadow-xl shadow-gray-950"
      >
        <h1 className='pb-3'>Iniciar Sesión</h1>

        {error && <div className="bg-red-500 p-2 mb-2">{error}</div>}
        

        <input
          type="email"
          placeholder="Correo"
          name="email"
          onChange={handleInputChange}
          className="my-1 rounded-md bg-zinc-700 px-2 py-1 placeholder:italic"
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={handleInputChange}
          className="my-2 rounded-md bg-zinc-700 px-2 py-1 placeholder:italic"
        />
        <button
        className='bg-zinc-600 px-4 py-2 rounded-lg mt-4 hover:bg-zinc-400 hover:text-zinc-900 hover:transition-transform hover:scale-110'
        >Ingresar</button>
      </form>
    </div>
  );
}

export default LoginPage;
