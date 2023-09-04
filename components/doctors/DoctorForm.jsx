"use client"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function DoctorForm() {
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
                router.refresh();
                router.push("/dashboard-Admin/patients");
                
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
                router.refresh();
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
        <div className="items-center justify-center my-4">
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
            <form 
            className="w-full lg:max-w-none bg-white rounded-sm shadow-lg p-10 lg:text-xl"
            onSubmit={handleSubmit}>
                <div className="flex justify-center items-center p-2 mb-4">
                    <h2 className="text-2xl font-bold border-b-2 border-slate-800 max-w-md text-slate-800">AÑADIR DOCTOR</h2>
                </div>
                
                <div className="mb-2 lg:grid lg:grid-cols-2">
                    <label className="block text-gray-800 font-semibold mb-2 lg:pr-10">
                    Nombres:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-cyan-200"
                        type="text"
                        name="patientName"
                        value={formData.patient.patientName}
                        onChange={handleChange}
                        placeholder="Nombres"
                    />
                </div>
                <div className="mb-2 lg:grid lg:grid-cols-2">
                    <label className="block text-gray-800 font-semibold mb-2">
                    Apellidos:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-cyan-200"
                        type="text"
                        name="patientLastName"
                        value={formData.patient.patientLastName}
                        onChange={handleChange}
                        placeholder="Apellidos"
                    />
                </div>
                
                <div className="mb-2 lg:grid lg:grid-cols-2">
                    <label className="block text-gray-800 font-semibold mb-2">
                    Cedula de identidad:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-cyan-200"
                        type="text"
                        name="patientCi"
                        value={formData.patient.patientCi}
                        onChange={handleChange}
                        placeholder="Cédula de identidad"
                    />
                </div>
                <div className="mb-2 lg:grid lg:grid-cols-2">
                    <label className="block text-gray-800 font-semibold mb-2">
                    Edad:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-cyan-200"
                        type="number"
                        name="patientAge"
                        value={formData.patient.patientAge}
                        onChange={handleChange}
                        placeholder="Edad"
                    />
                </div>
                <div className="mb-2 lg:grid lg:grid-cols-2">
                    <label className="block text-gray-800 font-semibold mb-2 lg:mr-10">
                    Numero de celular:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-cyan-200"
                        type="text"
                        name="patientPhone"
                        value={formData.patient.patientPhone}
                        onChange={handleChange}
                        placeholder="Celular"
                    />
                </div>
                <div className="mb-2 lg:grid lg:grid-cols-2">
                    <label className="block text-gray-800 font-semibold mb-2">
                    Género:
                    </label>
                    <select
                        type="text"
                        name="patientGender"
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
                <div className="mb-2 lg:grid lg:grid-cols-2">
                    <label className="block text-gray-800 font-semibold mb-2">
                    Dirección:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-cyan-200"
                        type="text"
                        name="patientAddress"
                        value={formData.patient.patientAddress}
                        onChange={handleChange}
                        placeholder="Dirección del paciente"
                    />
                </div>
                <div className="mb-2 lg:grid lg:grid-cols-2">
                    <label className="block text-gray-800 font-semibold mb-2">
                    Email:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-cyan-200"
                        type="text"
                        name="patientEmail"
                        value={formData.patient.patientEmail}
                        onChange={handleChange}
                        placeholder="Correo electrónico"
                    />
                </div>
                {/* Otros campos para la información del paciente */}
                <button 
                className="bg-teal-800 hover:bg-teal-400 text-white px-4 py-3 rounded-sm w-full"
                type="submit">Guardar</button>
            </form>
        </div>
    );
};
export default DoctorForm;
