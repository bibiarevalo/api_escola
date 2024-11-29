import mongoose from "mongoose";

const CursoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {  
    type: String,
    required: true,
  },
  duracao: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

export const Curso = mongoose.model("Curso", CursoSchema);
