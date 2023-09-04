"use client"
import { useRouter } from "next/navigation"

function BtnAddDoctor() {
    const router = useRouter()
  return (
    <button 
    className='bg-cyan-700 px-4 py-2 my-2 rounded-lg mt-4 hover:bg-cyan-400 hover:text-zinc-700 hover:transition-transform w-full text-slate-300' 
    onClick={() => router.push('/dashboard-Admin/doctors/register')}>  
        AÑADIR DOCTOR
    </button>
  )
}

export default BtnAddDoctor