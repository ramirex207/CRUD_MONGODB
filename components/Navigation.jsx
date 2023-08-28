"use client";
import Link from "next/link";
import {useSession,signOut} from 'next-auth/react'


function Navigation({ onClick }) {
    const session = useSession()
    const userRole = session?.data?.user?.role
    //console.log(userRole)
    return (
        <ul className=" bg-cyan-900 lg:bg-transparent rounded-xl lg:flex lg:flex-row-reverse flex flex-col justify-center lg:mt-4 pb-6 z-10" onClick={onClick}>
            { session.data?.user?.role === "admin" ? (<>
                
            <button
                onClick={() => signOut()}
                className='text-oliva-900 lg:text-lg lg:mr-4 lg:bg-red-500 bg-cyan-700 w-11/12 lg:w-20 hover:bg-cyan-500 p-2 m-8 lg:m-2 rounded-md self-center flex items-center justify-center mx-auto' // Agregamos "mx-auto" aquí
            >
                Salir
            </button>
                <Link href='/dashboard-Admin' className="lg:max-h-20">
                <li className='text-white mx-5 py-2 border-b-2 hover:bg-zinc-800 hover:opacity-40 lg:hover:bg-transparent lg:hover:opacity-100'>
                    <h4 className="transition duration-300 ease-in-out transform hover:-translate-x-2">Panel de Administrador</h4>
                </li>
            </Link>             
            <Link href='/chatgpt' className="lg:max-h-20">
            <li className='text-white mx-5 py-2 border-b-2 hover:bg-zinc-800 hover:opacity-40 lg:hover:bg-transparent lg:hover:opacity-100'>
                <h4 className="transition duration-300 ease-in-out transform hover:-translate-x-2" >Chat informativo</h4>
            </li>
            </Link>
            <Link href='/dashboard-Admin/profile' className="lg:max-h-20">
            <li className='text-white mx-5 py-2 border-b-2 hover:bg-zinc-800 hover:opacity-40 lg:hover:bg-transparent lg:hover:opacity-100'>
                <h4 className="transition duration-300 ease-in-out transform hover:-translate-x-2" >Perfil</h4>
                
            </li>
            </Link>
            </>):(<>
                {!session.data? (<>

            <Link href='/login' className="lg:max-h-20">
            <li className='text-slate-100 border border-1 border-cyan-950 hover:border-cyan-200 p-2 m-2 mx-4 rounded-md self-center flex items-center justify-center '>
                <button className="lg:w-full">
                    Iniciar Sesión
                </button>
            </li>
            </Link>
            <Link className="lg:max-h-20" href='/register'>
            <li className='text-white bg-cyan-950 hover:bg-cyan-500 p-2 m-2 rounded-md self-center flex items-center justify-center mx-4'>
                <button className="lg:w-full">
                    Registrarse
                </button>
            </li>
            </Link>

            </>
            ) : (<>

            <button
                            onClick={() => signOut()}
                            className='text-oliva-900 lg:text-lg lg:mr-4 lg:bg-red-500 bg-cyan-700 w-11/12 lg:w-20 hover:bg-cyan-500 p-2 m-8 lg:m-2 rounded-md self-center flex items-center justify-center mx-auto' // Agregamos "mx-auto" aquí
                        >
                            Salir
                        </button>
            <Link href='/' className="lg:max-h-20">
            <li className='text-white mx-5  border-b-2 hover:opacity-40 lg:hover:bg-transparent lg:hover:opacity-100'>
                <h4 className="transition duration-300 ease-in-out transform hover:-translate-x-2  hover:bg-zinc-900 lg:hover:bg-transparent py-2" >Inicio</h4>
            </li>
            </Link>                
            <Link href='/chatgpt' className="lg:max-h-20">
            <li className='text-white mx-5 border-b-2 hover:opacity-40 lg:hover:bg-transparent lg:hover:opacity-100'>
                <h4 className="transition duration-300 ease-in-out transform hover:-translate-x-2  hover:bg-zinc-900 lg:hover:bg-transparent py-2" >Chat informativo</h4>
            </li>
            </Link>
            <Link href='/dashboard/profile' className="lg:max-h-20">
            <li className='text-white mx-5 border-b-2 hover:opacity-40 lg:hover:bg-transparent lg:hover:opacity-100'>
                <h4 className="transition duration-300 ease-in-out transform hover:-translate-x-2  hover:bg-zinc-900 lg:hover:bg-transparent py-2" >Perfil</h4>
                
            </li>
            </Link>

            </>)}
            <Link className="lg:max-h-20" href='/contact'>
            <li className='text-white mx-5 border-b-2 hover:opacity-40 lg:hover:bg-transparent lg:hover:opacity-100'>
                <h4 className="transition duration-300 ease-in-out transform hover:-translate-x-2  hover:bg-zinc-900 py-2 lg:hover:bg-transparent">Contactenos</h4>
            </li>
            </Link>
            <Link href='/about' className="lg:max-h-20">
            <li className='text-white mx-5 border-b-2 hover:opacity-40 lg:hover:bg-transparent lg:hover:opacity-100'>
                <h4 className="transition duration-300 ease-in-out transform hover:-translate-x-2  hover:bg-zinc-900 py-2 lg:hover:bg-transparent ">Sobre nosotros</h4>
            </li>
            </Link>

                        </>)

            }
            
        </ul>
    )
}

export default Navigation