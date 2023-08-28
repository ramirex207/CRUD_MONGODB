"use client"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


const MedicalHistoryForm = ({ patient, medicalHistory, id_paciente }) => { 
  const router = useRouter();
  const initialFormData = {
    medicalHistory: {
      previousDiseases: [medicalHistory.medicalHistory.medicalHistory.previousDiseases.map((enfermedad)=> `${enfermedad}`)],
      chronicConditions: [medicalHistory.medicalHistory.medicalHistory.chronicConditions.map((enfermedad)=> `${enfermedad}`) ],
      allergies: [medicalHistory.medicalHistory.medicalHistory.allergies.map((enfermedad)=> `${enfermedad}`)],
      currentMedications: [medicalHistory.medicalHistory.medicalHistory.currentMedications.map((enfermedad)=> `${enfermedad}`)],
    },
  };
  //console.log(medicalHistory)
  const [formData, setFormData] = useState(initialFormData);
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      medicalHistory: {
        ...prevData.medicalHistory,
        [name]: value.split(","), // Divide los elementos por comas
      },
    }));
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const FormDataCorrect = {
        medicalHistory :{
          previousDiseases: formData.medicalHistory.previousDiseases.toString().split(","),
          chronicConditions: formData.medicalHistory.chronicConditions.toString().split(","),
          allergies: formData.medicalHistory.allergies.toString().split(","),
          currentMedications: formData.medicalHistory.currentMedications.toString().split(",")
        } 
      }
      //console.log(formData)
      const response = await axios.put(`/api/medicalHistory/${medicalHistory.medicalHistory._id}`, FormDataCorrect);
      setServerMessage(response.data.message);
      router.push(`/dashboard-Admin/patients/${id_paciente}/historiaClinica`);
      // Lógica para manejar la respuesta
    } catch (error) {
      console.error(error);
      // Lógica para manejar el error
    }
  };

  return (
    
    <form className="w-full max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
      {serverMessage && (
  <div className="text-black bg-teal-500 text-center text-2xl p-2 rounded-md mt-4">{serverMessage}</div>
)}
      <div className="mb-4">
        <label htmlFor="chronicConditions" className="block text-gray-700 font-bold mb-2">
          Enfermedades Previas (Separadas por comas)
        </label>
      
        <textarea
          id="previousDiseases"
          name="previousDiseases"
          value={formData.medicalHistory.previousDiseases} // Une los elementos para mostrar en el campo
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Ej: Covid-19, Dengue, Malaria"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="chronicConditions" className="block text-gray-700 font-bold mb-2">
          Condiciones Crónicas (Separadas por comas)
        </label>
        <textarea
          id="chronicConditions"
          name="chronicConditions"
          value={formData.medicalHistory.chronicConditions.toString()} // Une los elementos para mostrar en el campo
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Ej: Asma, Tos fuerte, Dolor de espalda crónico"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="chronicConditions" className="block text-gray-700 font-bold mb-2">
          Alergias (Separadas por comas)
        </label>
        <textarea
          id="allergies"
          name="allergies"
          value={formData.medicalHistory.allergies} // Une los elementos para mostrar en el campo
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Ej: Polen, Polvo, Medicamentos"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="chronicConditions" className="block text-gray-700 font-bold mb-2">
          Medicacion Actual (Separadas por comas)
        </label>
        <textarea
          id="currentMedications"
          name="currentMedications"
          value={formData.medicalHistory.currentMedications} // Une los elementos para mostrar en el campo
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Ej: Paracetamol, Ibuprofeno, Aspirina"
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default MedicalHistoryForm;

