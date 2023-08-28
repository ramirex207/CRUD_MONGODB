import { Schema, models, model } from "mongoose";

  
const patientDataSchema = new Schema({
  patientCi:{
    type: String,
  },
  patientName:{
    type: String,
  },
  patientLastName:{
    type: String,
  },
  patientAge:{
    type: Number,
  },
  patientGender:{
    type: String,
  },
  patientAddress:{
    type: String,
  },
  patientPhone:{
    type: String,
  },
  patientEmail:{
    type: String,
  },
});
//combinando todas las partes
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "nombre es requerido"],
    minlength: [3, "Nombre debe tener al menos 3 caracteres"],
    maxlength: [50, "Nombre debe tener menos de 50 caracteres"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email es requerido"],
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email invalido"],
  },
  password: {
    type: String,
    minlength: 6,
    required: [true, "Password es requerido"],
  },
  role: {
    type: String,
    default: "user",
    
  },
  employeeCode: {
    type: String,
    default:"user"
  },

  patient: patientDataSchema,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  medicalHistory: {
    type: Schema.Types.ObjectId,
    ref: "MedicalHistory",
  },
});


export default models.User || model("User", userSchema);
