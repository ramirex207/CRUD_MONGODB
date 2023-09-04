"use client";

import { useRouter } from "next/navigation";

function PatientFormView({patient}) {
    //console.log(patient.user)
    const router = useRouter();
  return (
    <div>
        <div className="flex justify-between mb-4"> {/* Aquí se coloca el componente en la esquina derecha */}
        <h1 className="text-2xl font-bold">Información del paciente</h1>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border-b md:border-b-0 md:border-r border-slate-400 pb-6 md:pb-0 md:pr-6">
        <h3 className="text-lg font-bold mb-2">Nombre:</h3>
        <p className="text-slate-800">{patient.name}</p>
      </div>
      <div className="border-b md:border-b-0 border-slate-400 pb-6 md:pb-0 md:pr-6">
        <h3 className="text-lg font-bold mb-2">Edad:</h3>
        <p className="text-slate-800">{patient.patient.patientAge}</p>
      </div>
      <div className="border-b md:border-b-0 md:border-r border-slate-400 pb-6 md:pb-0 md:pr-6">
        <h3 className="text-lg font-bold mb-2">Género:</h3>
        <p className="text-slate-800">{patient.patient.patientGender}</p>
      </div>
      <div className="border-b md:border-b-0 border-slate-400 pb-6 md:pb-0 md:pr-6">
        <h3 className="text-lg font-bold mb-2">Dirección:</h3>
        <p className="text-slate-800">{patient.patient.patientAddress}</p>
      </div>
      <div className="border-b md:border-b-0 pb-6 md:pb-0">
        <h3 className="text-lg font-bold mb-2">Número de Contacto:</h3>
        <p className="text-slate-800">{patient.patient.patientPhone}</p>
      </div>
      <div className="border-b md:border-b-0 pb-6 md:pb-0">
        <h3 className="text-lg font-bold mb-2">Cedula de Identidad:</h3>
        <p className="text-slate-800">{patient.patient.patientCi}</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-6">
      {/* Agregar historia clínica */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
      onClick={() => {
        
        router.push(`/dashboard-Admin/patients/${patient._id}/historiaClinica`);
      }}
      >
        Ver Historia Clínica
      </button>

      {/* Agendar cita */}
      <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-500"
      onClick={() => {
        router.push(`/dashboard-Admin/patients/${patient._id}/editar`);
      }}
      
      >
        Editar Usuario
      </button>
    </div>
    </div>
  )
}

export default PatientFormView