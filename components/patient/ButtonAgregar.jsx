"use client"
import { useRouter } from "next/navigation"

function ButtonAgregar() {
    const router = useRouter()
  return (
    <button 
    className='bg-cyan-700 px-4 py-2 rounded-lg mt-4 hover:bg-cyan-400 hover:text-zinc-700 hover:transition-transform hover:scale-110 ' 
    onClick={() => router.push('/dashboard-Admin/patients/register')}>  
        Añadir Paciente
    </button>
  )
}

export default ButtonAgregar