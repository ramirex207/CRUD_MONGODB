"use client"
import { useRouter } from "next/navigation"

function Doctors({users}) {
    const router = useRouter()
    //console.log(users)
    return (
        <div className="text-white">
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-cyan-200">
                <thead className="bg-cyan-950">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Rol</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Fecha de Creación</th>
                        <th className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user, index) => (
                        <tr
                            key={user._id}
                            className="hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                                router.push(`/dashboard-Admin/doctors/${user._id}`);
                            }}
                        >
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.createdAt}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <button className="text-blue-500" onClick={(e) => {
                                    e.stopPropagation();
                                    // Lógica para editar el paciente
                                }}>
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    

    )
}

export default Doctors