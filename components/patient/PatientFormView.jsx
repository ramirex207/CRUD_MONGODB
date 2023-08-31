"use client"

function PatientFormView({ patient }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-xl">
        <h2 className="text-2xl text-center text-gray-800 font-bold mb-4">Detalles del Paciente</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-semibold">Nombre Completo:</p>
            <p>{patient.name} {patient.patientLastName}</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="font-semibold">Cédula:</p>
            <p>{patient.patient.patientCi}</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="font-semibold">Edad:</p>
            <p>{patient.patient.patientAge}</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="font-semibold">Género:</p>
            <p>{patient.patient.patientGender}</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold">Dirección:</p>
            <p>{patient.patient.patientAddress}</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold">Teléfono:</p>
            <p>{patient.patient.patientPhone}</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold">Correo Electrónico:</p>
            <p>{patient.patient.patientEmail}</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold">Fecha de Creación:</p>
            <p>{new Date(patient.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold">Rol:</p>
            <p>{patient.role}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default PatientFormView;
  