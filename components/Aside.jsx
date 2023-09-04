"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link';

import { FaHospitalUser, FaUserMd, FaUserInjured, FaCalendarAlt, FaChartBar, FaCommentMedical, FaClinicMedical, FaClipboardList, FaUser } from 'react-icons/fa'



function Aside() {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(prevMenuVisible => !prevMenuVisible);
  };

  // Utilizamos useEffect para detectar cambios en el tamaño de pantalla y actualizar el estado
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // 1024px es el ancho correspondiente al breakpoint lg
        setMenuVisible(true);
      } else {
        setMenuVisible(false);
      }
    };

    // Agregamos un listener al evento resize para detectar cambios en el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Llamamos a handleResize al montar el componente para establecer el estado inicial
    handleResize();

    // Eliminamos el listener al desmontar el componente para evitar memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const hideMenuOnClick = () => {
    if (window.innerWidth < 1024) { // Verificar que el ancho de la ventana sea menor a 1024px
      setMenuVisible(false);
    }
  };

  return (
    <div className="text-slate-400 text-xl lg:fixed lg:max-h-96">
      <div className="lg:flex">
        <button onClick={toggleMenu} className="block lg:hidden">
          Panel de Administrador
        </button>
        {menuVisible && (
          <ul className="lg:min-h-screen lg:block">
            <Link href='/dashboard-Admin/doctors' className="hover:text-slate-100" onClick={hideMenuOnClick}>

              <li className="m-4 pr-2 my-8 border-r-2 flex items-center">
                <FaUserMd className="mr-2" />
                <h4 className="transition duration-300 ease-in-out transform hover:translate-x-3">
                  Administrar Doctores
                </h4>
              </li>
            </Link>
            <Link href='/dashboard-Admin/patients' className="hover:text-slate-200 " onClick={hideMenuOnClick}>
              <li className="m-4 my-8 pr-2 border-r-2 flex items-center">
                <FaUserInjured className="mr-2" />
                <h4 className="transition duration-300 ease-in-out transform hover:translate-x-3">
                  Administrar Pacientes
                </h4>
              </li>
            </Link>
            <Link href='/dashboard-Admin/users' className="hover:text-slate-200" onClick={hideMenuOnClick}>
              <li className="m-4 pr-2 my-8 border-r-2 flex items-center">
                <FaUser className="mr-2" />
                <h4 className="transition duration-300 ease-in-out transform hover:translate-x-3">
                  Administrar Usuarios
                </h4>
              </li>
            </Link>
            <Link href='/dashboard-Admin/citas' className="hover:text-slate-200" onClick={hideMenuOnClick}>
              <li className="m-4 pr-2 my-8 border-r-2 flex items-center">
                <FaCalendarAlt className="mr-2" />
                <h4 className="transition duration-300 ease-in-out transform hover:translate-x-3">
                  Citas y Agenda
                </h4>
              </li>
            </Link>
            <Link href='/dashboard-Admin/nefrochat' className="hover:text-slate-200" onClick={hideMenuOnClick}>
              <li className="m-4 pr-2 my-8 border-r-2 flex items-center">
                <FaCommentMedical className="mr-2" />
                <h4 className="transition duration-300 ease-in-out transform hover:translate-x-3">
                  Modificar NefroChat
                </h4>
              </li>
            </Link>
            <Link href='/dashboard-Admin/patients' className="hover:text-slate-200" onClick={hideMenuOnClick}>
              <li className="m-4 pr-2 my-8 border-r-2 flex items-center">
                <FaChartBar className="mr-2" />
                <h4 className="transition duration-300 ease-in-out transform hover:translate-x-3">
                  Analisis y Monitoreo
                </h4>
              </li>
            </Link>

            <Link href='/dashboard-Admin/patients' className="hover:text-slate-200" onClick={hideMenuOnClick}>
              <li className="m-4 pr-2 my-8 border-r-2 flex items-center">
                <FaClinicMedical className="mr-2" />
                <h4 className="transition duration-300 ease-in-out transform hover:translate-x-3">
                  Seguimiento y progreso
                </h4>
              </li>
            </Link>

            <Link href='/dashboard-Admin/patients' className="hover:text-slate-200" onClick={hideMenuOnClick}>
              <li className="m-4 pr-2 my-8 border-r-2 flex items-center">
                <FaClipboardList className="mr-2" />
                <h4 className="transition duration-300 ease-in-out transform hover:translate-x-3">
                  Sistema de preescripción
                </h4>
              </li>
            </Link>

            <Link href='/dashboard-Admin/patients' className="hover:text-slate-200" onClick={hideMenuOnClick}>
              <li className="m-4 pr-2 my-8 border-r-2 flex items-center">
                <FaHospitalUser className="mr-2" />
                <h4 className="transition duration-300 ease-in-out transform hover:translate-x-3">
                  Laboratorios
                </h4>
              </li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Aside;

