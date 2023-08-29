"use client"
import { useState } from "react";
import axios from "axios";

const PatientForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
        patient: {
            patientCi: "",
            patientName: "",
            patientLastName: "",
            patientGender: "",
            patientAge: "",
            patientAddress: "",
            patientPhone: "",
            patientEmail: "",
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes("patient")) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                patient: {
                    ...prevFormData.patient,
                    [name]: value,
                },
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Generar la contraseña con la primera letra del apellido y el número de CI
        const password = formData.patient.patientLastName.charAt(0) + formData.patient.patientCi;
        const fullname = formData.patient.patientName + " " + formData.patient.patientLastName;
        const email = formData.patient.patientEmail;
        const rol= "patient";
        
        try {
            const res = await axios.post("/api/user", {
                ...formData,
                name: fullname, // Asignar el nombre completo del paciente
                email: email, // Asignar el email del paciente
                password: password, // Asignar la contraseña generada
                role: rol, // Asignar el rol del paciente
                
            });
            console.log(res.data); // Respuesta del servidor
        } catch (error) {
            console.error("Error al guardar los datos del paciente:", error);
        }
    };

    return (
        <div className="flex flex-col">
            <h2>Registrar Nuevo Paciente</h2>
            <form 
            className="flex flex-col"
            onSubmit={handleSubmit}>
                <label>
                    Nombres:
                    <input
                        type="text"
                        name="patientName"
                        value={formData.patient.patientName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Apellidos:
                    <input
                        type="text"
                        name="patientLastName"
                        value={formData.patient.patientLastName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    CI del paciente:
                    <input
                        type="text"
                        name="patientCi"
                        value={formData.patient.patientCi}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Edad del paciente
                    <input
                        type="number"
                        name="patientAge"
                        value={formData.patient.patientAge}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Genero del paciente
                    <select
                        name="patientGender"
                        value={formData.patient.patientGender}
                        onChange={handleChange}
                    >
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                    </select>
                </label>
                <label>
                    Dirección del paciente
                    <input
                        type="text"
                        name="patientAddress"
                        value={formData.patient.patientAddress}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Teléfono del paciente
                    <input
                        type="text"
                        name="patientPhone"
                        value={formData.patient.patientPhone}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email del paciente
                    <input
                        type="text"
                        name="patientEmail"
                        value={formData.patient.patientEmail}
                        onChange={handleChange}
                    />
                </label>
                {/* Otros campos para la información del paciente */}
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default PatientForm;
