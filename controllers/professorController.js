import { Professor } from "../models/Professor.js";


export const criarProfessor = async (req, res) => {
  try {
    const { nome, materia, email } = req.body;
    const novoProfessor = new Professor({ nome, materia, email });
    await novoProfessor.save();
    res.status(201).json(novoProfessor);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar professor: " + error.message });
  }
};


export const listarProfessor = async (req, res) => {
  try {
    const professores = await Professor.find();
    res.status(200).json(professores);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar professores: " + error.message });
  }
};


export const editarProfessor = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, materia, email } = req.body;

    const professorAtualizado = await Professor.findByIdAndUpdate(
      id,
      { nome, materia, email },
      { new: true } 
    );

    if (!professorAtualizado) {
      return res.status(404).json({ error: "Professor não encontrado" });
    }

    res.status(200).json(professorAtualizado);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar professor: " + error.message });
  }
};


export const removerProfessor = async (req, res) => {
  try {
    const { id } = req.params;
    const professorRemovido = await Professor.findByIdAndDelete(id);

    if (!professorRemovido) {
      return res.status(404).json({ error: "Professor não encontrado" });
    }

    res.status(200).json({ message: "Professor removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao remover professor: " + error.message });
  }
};
