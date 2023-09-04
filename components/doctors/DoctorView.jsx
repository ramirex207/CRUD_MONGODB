"use client"

function DoctorView({doctor}) {
    //console.log(doctor)
  return (
    <div className="bg-slate-200 p-4 rounded-sm shadow-md border-4 border-emerald-500">
      <div className="flex justify-between mb-4 "> {/* Aquí se coloca el componente en la esquina derecha */}
        <h1 className="text-2xl font-bold">Información del Medico</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border-b md:border-b-0 md:border-r border-slate-400 pb-6 md:pb-0 md:pr-6">
          <h3 className="text-lg font-bold mb-2">Nombre completo:</h3>
          <p className="text-slate-800">{doctor.name}</p>
        </div>
        <div className="border-b md:border-b-0 border-slate-400 pb-6 md:pb-0 md:pr-6">
          <h3 className="text-lg font-bold mb-2">Email:</h3>
          <p className="text-slate-800">{doctor.email}</p>
        </div>
        <div className="border-b md:border-b-0 md:border-r border-slate-400 pb-6 md:pb-0 md:pr-6">
          <h3 className="text-lg font-bold mb-2">Fecha de Creación:</h3>
          <p className="text-slate-800">{doctor.createdAt}</p>
        </div>
        <div className="border-b md:border-b-0 border-slate-400 pb-6 md:pb-0 md:pr-6">
          <h3 className="text-lg font-bold mb-2">Email:</h3>
          <p className="text-slate-800">{doctor._id}</p>
        </div>
        {/* Agregar historia clínica */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
        onClick={() => {
          router.push(`/dashboard-Admin/patients`);
        }}
        >
          Eliminar
        </button>

        {/* Agendar cita */}
        <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-500"
        onClick={() => {
          router.push(`/dashboard-Admin`);
        }}
        
        >
          Editar
        </button>
    </div>
  </div>
  )
}

export default DoctorView