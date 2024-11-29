import mongoose from "mongoose";

const ProfessorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  materia: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
  },
}, {
  timestamps: true, 
});

export const Professor = mongoose.model("Professor", ProfessorSchema);
