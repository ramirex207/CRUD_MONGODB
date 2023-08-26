import React from 'react';

function Contact() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Fila 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Columna 1 */}
          <div className="col-span-1 md:col-span-3 text-center">
            <h1 className="text-4xl font-bold mb-4 text-slate-950">Nefrocentro Srl</h1>
            <p className="text-lg mb-4 text-slate-800">Clínica Especializada en Pacientes Renales</p>
            <p className="text-lg mb-4 text-slate-800">Ubicada en Av. 16 de Julio Número 45, La Paz, Bolivia</p>
            <p className="text-lg text-slate-800">Teléfono: 71578126</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
