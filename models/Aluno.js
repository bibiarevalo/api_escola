import mongoose from "mongoose";

const AlunoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  turma: {
    type: String,
    required: true,
  },
});

export const Aluno = mongoose.model("Aluno", AlunoSchema);