import { Aluno } from "../models/Aluno.js";


export const criarAluno = async (req, res) => {
  try {
    const { nome, idade, turma } = req.body;
    const novoAluno = new Aluno({ nome, idade, turma });
    await novoAluno.save();
    res.status(201).json(novoAluno);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar aluno: " + error.message });
  }
};


export const listarAluno = async (req, res) => {
  try {
    const alunos = await Aluno.find();
    res.status(200).json(alunos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar alunos: " + error.message });
  }
};


export const editarAluno = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, idade, turma } = req.body;

    const alunoAtualizado = await Aluno.findByIdAndUpdate(
      id,
      { nome, idade, turma },
      { new: true } 
    );

    if (!alunoAtualizado) {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }

    res.status(200).json(alunoAtualizado);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar aluno: " + error.message });
  }
};


export const removerAluno = async (req, res) => {
  try {
    const { id } = req.params;
    const alunoRemovido = await Aluno.findByIdAndDelete(id);

    if (!alunoRemovido) {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }

    res.status(200).json({ message: "Aluno removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao remover aluno: " + error.message });
  }
};