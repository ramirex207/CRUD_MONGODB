"use client";
import Link from "next/link";
import {useSession} from 'next-auth/react'

function Navigation({ onClick }) {
    const session = useSession()
    //console.log(session)
    return (
        <ul className=" bg-black lg:bg-transparent rounded-xl lg:flex lg:flex-row-reverse flex flex-col justify-center lg:mt-4" onClick={onClick}>
            {!session.data ? (<>

                <Link href='/login' className="lg:max-h-20">
                <li className='text-zinc-300 border border-1 border-zinc-500 hover:border-zinc-100 p-2 m-2 mx-4 rounded-md self-center flex items-center justify-center '>
                    <button className="lg:w-16">
                        Log In
                    </button>
                </li>
            </Link>
            <Link className="lg:max-h-20" href='/register'>
                <li className='text-white bg-zinc-950 hover:bg-zinc-700 p-2 m-2 rounded-md self-center flex items-center justify-center mx-4'>
                    <button className="lg:w-16">
                        Sign Up
                    </button>
                </li>
            </Link>
            
            </>
            ) : (<>
            
            <Link href='/' className="lg:max-h-20">
                <li className='text-white mx-5 py-2 border-b-2 hover:bg-zinc-800 hover:opacity-40 lg:hover:bg-transparent lg:hover:opacity-100'>
                    <h4 className="transition duration-300 ease-in-out transform hover:-translate-x-2" >Home</h4>
                </li>
            </Link>                
            <Link href='/chatgpt' className="lg:max-h-20">
                <li className='text-white mx-5 py-2 border-b-2 hover:bg-zinc-800 hover:opacity-40 lg:hover:bg-transparent lg:hover:opacity-100'>
                    <h4 className="transition duration-300 ease-in-out transform hover:-translate-x-2" >Chat informativo</h4>
                </li>
            </Link>
            <Link href='/dashboard/profile' className="lg:max-h-20">
                <li className='text-white mx-5 py-2 border-b-2 hover:bg-zinc-800 hover:opacity-40 lg:hover:bg-transparent lg:hover:opacity-100'>
                    <h4 className="transition duration-300 ease-in-out transform hover:-translate-x-2" >Profile</h4>
                </li>
            </Link>
            </>)}
            <Link className="lg:max-h-20" href='/contact'>
                <li className='text-white mx-5 py-2 border-b-2 hover:bg-zinc-800 hover:opacity-40 lg:hover:bg-transparent lg:hover:opacity-100'>
                    <h4 className="transition duration-300 ease-in-out transform hover:-translate-x-2">Contact Us     </h4>
                </li>
            </Link>
            <Link href='/about' className="lg:max-h-20">
                <li className='text-white mx-5 py-2 border-b-2 hover:bg-zinc-800 hover:opacity-40 lg:hover:bg-transparent lg:hover:opacity-100'>
                    <h4 className="transition duration-300 ease-in-out transform hover:-translate-x-2">About Us</h4>
                </li>
            </Link>


            
        </ul>
    )
}

export default Navigation