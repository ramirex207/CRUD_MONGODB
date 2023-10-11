"use client"
import { useSession, signOut } from 'next-auth/react'

function ProfilePage() {
    const { data: session, status } = useSession();
    console.log(session,status)
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!session) {
        return <div>No hay usuario logueado</div>;
    }

    const { user } = session;

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='font-bold text-slate-900 text-3xl'>Profile</h1>
            <p className='text-slate-800 lg:text-3xl'>Nombre: {user.name}</p>
            <p className='text-slate-800 lg:text-3xl'>Email: {user.email}</p>
            {/* Agrega otros campos del usuario que desees mostrar */}
            
            

            <button
                onClick={() => signOut()}
                className='text-white bg-zinc-950 hover:bg-zinc-700 p-2 m-2 rounded-md self-center flex items-center justify-center mx-auto' // Agregamos "mx-auto" aquí
            >
                Log Out
            </button>
        </div>
    )
}

export default ProfilePage;