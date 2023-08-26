import { Schema, models, model } from "mongoose";
// Datos personales del paciente
const personalDataSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    });
    // Antecedentes médicos
    const medicalSchema = new Schema({
    previousDiseases: {
        type: [String],
        default: [],
    },
    chronicConditions: {
        type: [String],
        default: [],
    },
    allergies: {
        type: [String],
        default: [],
    },
    currentMedications: {
        type: [String],
        default: [],
    },
    });

    // Antecedentes familiares
    const familyHistorySchema = new Schema({
    familyHistory: {
        type: String,
        
    },
    });

    // Historia actual
    const currentHistorySchema = new Schema({
    reasonForVisit: {
        type: String,

    },
    currentSymptoms: {
        type: String,
        
    },
    symptomsDuration: {
        type: String,
        
    },
    symptomsEvolution: {
        type: String,
        
    },
    });

    // Historia médica pasada
    const pastMedicalHistorySchema = new Schema({
    previousConsultations: {
        type: [String],
        default: [],
    },
    previousTreatments: {
        type: [String],
        default: [],
    },
    hospitalizations: {
        type: [String],
        default: [],
    },
    surgeries: {
        type: [String],
        default: [],
    },
    });

    // Examen físico
    const physicalExaminationSchema = new Schema({
    vitalSigns: {
        type: Object,
        
    },
    relevantPhysicalExamination: {
        type: String,
        
    },
    });

    // Pruebas diagnósticas
    const diagnosticTestsSchema = new Schema({
    laboratoryResults: {
        type: [String],
        default: [],
    },
    imagingStudies: {
        type: [String],
        default: [],
    },
    biopsies: {
        type: [String],
        default: [],
    },
    });

    // Diagnóstico y Plan de tratamiento
    const diagnosisAndTreatmentSchema = new Schema({
    diagnosis: {
        type: String,
        
    },
    prescribedMedications: {
        type: [String],
        default: [],
    },
    recommendedTherapies: {
        type: [String],
        default: [],
    },
    followUp: {
        type: String,
        
    },
    });

    // Notas y observaciones
    const notesSchema = new Schema({
    notes: {
        type: String,
    },
});

// Combinar todas las partes para crear el modelo completo
const medicalHistorySchema = new Schema({
    personalData: personalDataSchema,
    medicalHistory: medicalSchema,
    familyHistory: familyHistorySchema,
    currentHistory: currentHistorySchema,
    pastMedicalHistory: pastMedicalHistorySchema,
    physicalExamination: physicalExaminationSchema,
    diagnosticTests: diagnosticTestsSchema,
    diagnosisAndTreatment: diagnosisAndTreatmentSchema,
    notes: notesSchema,
    });

export default models.MedicalHistory || model("MedicalHistory", medicalHistorySchema);
