"use client"
import { useRouter } from "next/navigation"

function Doctors({users}) {
    const router = useRouter()

    return (
        <div className="text-white">
        <ul>
        {
        users.map((user) => (
            <li key={user._id} 
            className="bg-gray-800 p-4 rounded-md my-4 flex justify-between items-center"
            onClick={()=>{
                router.push(`/dashboard-Admin/doctors/${user._id}`)
                //console.log(user._id)
            }}
            >
            <div>
                <p>{user.name}</p>
            </div>
            <button>
                editar
            </button>
            </li>
        ))
        }

        </ul>
        
        </div>
    )
}

export default Doctors