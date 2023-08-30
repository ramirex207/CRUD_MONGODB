
import React from 'react';

function AboutPage() {
  return (
    <div className=" text-slate-900 mt-24">
      <div className="mx-auto">

        {/* Fila 1 */}
        <div className="grid grid-cols-1 items-center">
          <div className="col-span-1 text-center">
            
            <h1 className="text-4xl font-bold pb-2 mb-4 text-black border-black border-b-2 max-w-xs mx-auto">Nuestros Servicios</h1>
          </div>
        </div>

        {/* Fila 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 items-center">
          <div className="col-span-1 text-center">
            <h2 className="text-xl font-bold mb-4">Citas y agenda</h2>
            <p>Agenda citas en línea donde puedas programar y cancelar citas con los médicos de forma fácil y conveniente.</p>
          </div>

          <div className="col-span-1 text-center">
            <h2 className="text-xl font-bold mb-4">Chat informativo</h2>
            <p>Proporciona una sección con un chatbot interactivo que proporciona información educativa para los pacientes, con artículos y recursos sobre diferentes condiciones médicas, tratamientos y hábitos saludables.</p>
          </div>

          <div className="col-span-1 text-center">
            <h2 className="text-xl font-bold mb-4">Análisis y monitoreo</h2>
            <p>Utiliza la inteligencia artificial generativa para analizar los datos estadísticos de los pacientes y generar informes relevantes para los médicos.</p>
          </div>
        </div>

        {/* Fila 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 items-center">
          <div className="col-span-1 text-center">
            <h2 className="text-xl font-bold mb-4">Seguimiento y Progreso</h2>
            <p>Facilita la creación de informes de seguimiento y progreso para que tanto los pacientes como los médicos puedan ver la evolución de la condición de salud y el éxito del tratamiento.</p>
          </div>

          <div className="col-span-1 text-center">
            <h2 className="text-xl font-bold mb-4">Sistema de Prescripciones</h2>
            <p>Facilita a los médicos la generación de recetas médicas electrónicas, lo que puede mejorar la precisión y seguridad en la prescripción de medicamentos.</p>
          </div>

          <div className="col-span-1 text-center">
            <h2 className="text-xl font-bold mb-4">Historial de Laboratorio</h2>
            <p>Integra la posibilidad de que los médicos y pacientes vean y compartan los resultados de los análisis de laboratorio y otros estudios médicos.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutPage;