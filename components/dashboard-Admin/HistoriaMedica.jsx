"use client"
import { useState } from "react";
import axios from "axios";

function HistoriaMedica({patient, medicalHistory, id_paciente }) {
    const [datos, setDatos] = useState({
        medicalHistory: {
            previousDiseases: "",
            chronicConditions: [medicalHistory.medicalHistory.medicalHistory.chronicConditions.map((enfermedad)=> ``) ],
            allergies: [],
            currentMedications: [],
        },
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDatos((prevData) => ({
            ...prevData,
            medicalHistory: {
                ...prevData.medicalHistory,
                [name]: value.split(" ,"), // Divide y limpia los elementos
            },
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`/api/medicalHistory/${medicalHistory.medicalHistory._id}`, datos);
            console.log(response.data);
          // Lógica para manejar la respuesta
        } catch (error) {
            console.error(error);
          // Lógica para manejar el error
        }
    };
    return (
        <div>HistoriaMedica
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Enfermedades previas</label>
                    <input
                        type="text"
                        name="previousDiseases"
                        value={datos.medicalHistory.previousDiseases}
                        placeholder="Enfermedades previas"
                        onChange={handleInputChange}
                    />
                </div>
                <button >
                    Enviar
                </button>
                </form>
        </div>

    )
}

export default HistoriaMedica