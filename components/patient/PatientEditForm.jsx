"use client"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const PatientEditForm = ({ patient }) => {
  //console.log(patient.user.name)
  const router = useRouter();
  const [errorMessage,setErrorMessage] = useState(null);
  const [serverMessage,setServerMessage] = useState(null);
  const [formData, setFormData] = useState({
    name: patient.user.name,
    email: patient.user.email,
    password: patient.user.password,
    role: patient.user.role,
    patient: {
      patientCi: patient.user.patient.patientCi,
      patientName: patient.user.patient.patientName,
      patientLastName: patient.user.patient.patientLastName,
      patientGender: patient.user.patient.patientGender,
      patientAge: patient.user.patient.patientAge,
      patientAddress: patient.user.patient.patientAddress,
      patientPhone: patient.user.patient.patientPhone,
      patientEmail: patient.user.patient.patientEmail,
    },
  });



  const handleChange = (event) => {
    const { name, value } = event.target;

    // If the field is part of the patient object, update that nested field
    if (name.startsWith("patient.")) {
      setFormData({
        ...formData,
        patient: {
          ...formData.patient,
          [name.split(".")[1]]: value,
        },
      });
    } else {
      // If it's a top-level field, update it directly
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //console.log(formData)
      //console.log(patient.user._id)
      const res = await axios.put(`/api/user/${patient.user._id}`, formData);
      // Respuesta del servidor
      console.log(res.data)
      setServerMessage(res.data.message);
      setErrorMessage(null);
      router.refresh();
      router.push(`/dashboard-Admin/patients/${patient.user._id}`);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setServerMessage(null);
      console.error("Error al guardar los datos del paciente:", error);
    }
  };

  return (
    <div className="flex items-center justify-center my-4">
            {
                errorMessage && <div className="bg-red-100 max-w-md lg:max-w-none border border-red-400 text-red-700 text-xl px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error! </strong>
                <span className="block sm:inline">{errorMessage}</span>
            </div>
            }
            {
                serverMessage && <div className="bg-green-100 border border-green-400 text-xl text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Registro Exitoso! </strong>
                <span className="block sm:inline">{serverMessage}</span>
                </div>
            }
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">EDITAR PACIENTE</h2>
        <div className="mb-4">
          <label className="block text-gray-800 font-semibold mb-2">
            Nombre del paciente:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-cyan-200"
            placeholder="Escribe el nombre del paciente"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 font-semibold mb-2">
            Edad del paciente:
          </label>
          <input
            type="number"
            name="patient.patientAge"
            value={formData.patient.patientAge}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-cyan-200"
            placeholder="Escribe la edad del paciente"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 font-semibold mb-2">
            Género del paciente:
          </label>
          <select
            type="text"
            name="patient.patientGender"
            value={formData.patient.patientGender}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-cyan-200"
          >
            <option value="">Seleccionar género</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 font-semibold mb-2">
            Dirección del paciente:
          </label>
          <input
            id="patientAddress"
            type="text"
            name="patient.patientAddress"
            value={formData.patient.patientAddress}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-cyan-200"
            placeholder="Escribe la dirección del paciente"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 font-semibold mb-2">
            Número de contacto del paciente:
          </label>
          <input
            type="text"
            name="patient.patientPhone"
            value={formData.patient.patientPhone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-cyan-200"
            placeholder="Escribe el número de contacto del paciente"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-cyan-500 text-white px-4 py-2 rounded mt-4 hover:bg-cyan-600"
          >
            Guardar Paciente
          </button>
        </div>
      </form>
    </div>

  );
};

export default PatientEditForm;

