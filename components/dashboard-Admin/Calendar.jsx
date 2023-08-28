"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="my-4">
      <h2 className="text-white text-2xl font-bold mb-2">Agregar Cita Médica</h2>
      <div className="flex items-center">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          className="px-4 py-2 border rounded-lg"
        />
        <button
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={() => {
            if (selectedDate) {
              // Aquí puedes realizar la acción de guardar la cita médica con la fecha seleccionada
              console.log("Cita guardada para:", selectedDate);
            } else {
              console.log("Selecciona una fecha para la cita médica.");
            }
          }}
        >
          Guardar Cita
        </button>
      </div>
    </div>
  );
}

export default Calendar;
