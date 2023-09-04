"use client"

import { useState } from "react";
import Link from "next/link";

function PatientNavbar({ id, nombrePaciente }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-sky-600 py-2 px-4 md:px-8">
      <div className="">
        <div className="flex justify-between items-center">
          <Link href={`/dashboard-Admin/patients/${id}`}>
            <h1 className="text-white text-lg font-bold">{nombrePaciente}</h1>
          </Link>

          <div className="md:hidden">
            <button className="text-white" onClick={toggleMenu}>
              {!isOpen ? "☰" : "✕"}
            </button>
          </div>
        </div>
        <ul
          className={`md:flex space-y-2 md:space-y-0 md:space-x-2 md:ml-auto ${isOpen ? "block" : "hidden"
            }`}
        >
          {/*antecedentes medicos y familiares */}
          <Link href={`/dashboard-Admin/patients/${id}/antecedentes`} className="text-white hover:text-blue-200">
            <li>
              Antecedentes médicos
            </li>
          </Link>
          <li>
            <Link href={`/dashboard-Admin/patients/${id}/historiaMedica`} className="text-white hover:text-blue-200">
              Historia Médica
            </Link>
          </li>
          <li>
            <Link href={`/dashboard-Admin/patients/${id}/historiaPasada`} className="text-white hover:text-blue-200">
              Historia Médica Pasada
            </Link>
          </li>
          <li>
            <Link href={`/dashboard-Admin/patients/${id}/examen-fisico`} className="text-white hover:text-blue-200">
              Examen Físico
            </Link>
          </li>
          <li>
            <Link href={`/dashboard-Admin/patients/${id}/laboratorios`} className="text-white hover:text-blue-200">
              Laboratorios y resultados
            </Link>
          </li>
          <li>
            <Link href={`/dashboard-Admin/patients/${id}/tratamiento`} className="text-white hover:text-blue-200">
              Tratamiento
            </Link>
          </li>
          <li>
            <Link href={`/dashboard-Admin/patients/${id}/observaciones`} className="text-white hover:text-blue-200">
              Observaciones y Notas
            </Link>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default PatientNavbar;


