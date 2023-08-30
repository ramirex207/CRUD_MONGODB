"use client"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function PatientForm() {
    const router = useRouter();
    const [errorMessage,setErrorMessage] = useState(null);
    const [serverMessage,setServerMessage] = useState(null);// Estado para capturar la respuesta del servidor
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
        const password = formData.patient.patientLastName.charAt(0).toUpperCase() + formData.patient.patientLastName.charAt(1)+ formData.patient.patientCi;
        const fullname = formData.patient.patientName + " " + formData.patient.patientLastName;
        const email = formData.patient.patientEmail;
        const rol = "patient";
    
        try {
            // Verificar si ya existe un usuario con el mismo correo
            //console.log(email)
            const checkEmail = await axios.get(`/api/user/${email}`);
            //console.log(checkEmail.data)
            //console.log(password)
            if (checkEmail.data.user) {
                // Si existe un usuario con el mismo correo, realizar una solicitud PUT para actualizar los datos
                const userId = checkEmail.data.user._id;
                //console.log(userId)
                const updateData = {
                    ...formData,
                    name: fullname,
                    password: password,
                    email: email,
                    role: rol,
                };
                //console.log(updateData)
                const updateRes = await axios.put(`/api/user/${userId}`, updateData);
                //console.log(updateRes.data.message);
                setServerMessage(updateRes.data.message);
                setErrorMessage(null);
                
            } else {
                // Si no existe un usuario con el mismo correo, realizar una solicitud POST para crear uno nuevo
                const res = await axios.post("/api/user", {
                    ...formData,
                    name: fullname,
                    email: email,
                    password: password,
                    role: rol,
                });
                //console.log(res.data.error);
                setServerMessage(res.data.message);
                setErrorMessage(null);
                router.push("/dashboard-Admin/patients");
                if (res.data.error) { // Verificar si hay un error en la respuesta
                    setErrorMessage(res.data.error); // Manejar el error correctamente
                    setServerMessage(null);
                    return;
                }
            }
        } catch (error) {
            console.error(error.response.data.message);
            setErrorMessage(error.response.data.message);
            setServerMessage(null);
        }
    };

    return (
        <div className="flex flex-col bg-cyan-900 p-4 rounded-lg shadow-xl">
            <h2
            className="text-2xl text-center text-white font-bold mb-4"
            >Registrar Nuevo Paciente</h2>
            {
                errorMessage && <div className="bg-red-100 border border-red-400 text-red-700 text-xl px-4 py-3 rounded relative" role="alert">
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
            <form 
            className="flex flex-col bg-cyan-600 p-10  rounded-xl shadow-xl"
            onSubmit={handleSubmit}>
                <div className="md:flex md:justify-between text-center">
                    <input
                        className="bg-cyan-50 p-2 mx-2 my-2 rounded-lg shadow-xl max-w-md placeholder:text-slate-500 placeholder:italic"
                        type="text"
                        name="patientName"
                        value={formData.patient.patientName}
                        onChange={handleChange}
                        placeholder="Nombres"
                    />
                    <input
                        className="bg-cyan-50 p-2 mx-2 my-2 rounded-lg shadow-xl max-w-md placeholder:text-slate-500 placeholder:italic "
                        type="text"
                        name="patientLastName"
                        value={formData.patient.patientLastName}
                        onChange={handleChange}
                        placeholder="Apellidos"
                    />
                </div>
                
                <div className="md:flex md:justify-between text-center">
                    <input
                        className="bg-cyan-50 p-2 mx-2 my-2 rounded-lg shadow-xl max-w-md placeholder:text-slate-500 placeholder:italic "
                        type="text"
                        name="patientCi"
                        value={formData.patient.patientCi}
                        onChange={handleChange}
                        placeholder="Cédula de identidad"
                    />
                    <input
                    className="bg-cyan-50 p-2 mx-2 my-2 rounded-lg shadow-xl w-20 placeholder:text-slate-500 placeholder:italic "
                        type="number"
                        name="patientAge"
                        value={formData.patient.patientAge}
                        onChange={handleChange}
                        placeholder="Edad"
                    />
                    <input
                        className="bg-cyan-50 p-2 mx-2 my-2 rounded-lg shadow-xl max-w-xs placeholder:text-slate-500 placeholder:italic"
                        type="text"
                        name="patientPhone"
                        value={formData.patient.patientPhone}
                        onChange={handleChange}
                        placeholder="Teléfono"
                    />
                </div>
                <div className="md:flex md:justify-between text-center">
                    <span
                    className=" p-2 mx-2 my-2 rounded-lg text-lg max-w-xs"
                    > Genero del paciente: 
                    
                    <select
                        name="patientGender"
                        value={formData.patient.patientGender}
                        onChange={handleChange}
                        className="bg-cyan-50 p-2 mx-2 my-2 rounded-lg shadow-xl max-w-md placeholder:text-slate-500 placeholder:italic"
                    >
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                    </select>
                    </span>
                </div>
                <div className="md:flex md:justify-between text-center">
                    
                    <input
                        className="bg-cyan-50 p-2 mx-2 my-2 rounded-lg shadow-xl max-w-md placeholder:text-slate-500 placeholder:italic"
                        type="text"
                        name="patientAddress"
                        value={formData.patient.patientAddress}
                        onChange={handleChange}
                        placeholder="Dirección del paciente"
                    />

                    <input
                        className="bg-cyan-50 p-2 mx-2 my-2 rounded-lg shadow-xl max-w-md placeholder:text-slate-500 placeholder:italic"
                        type="text"
                        name="patientEmail"
                        value={formData.patient.patientEmail}
                        onChange={handleChange}
                        placeholder="Correo electrónico"
                    />

                </div>
                <label>
                    
                </label>
                {/* Otros campos para la información del paciente */}
                <button 
                className="bg-emerald-600 hover:bg-emerald-300 text-white px-4 py-3 rounded-sm w-full"
                type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default PatientForm;
