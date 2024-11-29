import { Curso } from "../models/Curso.js";

export const criarCurso = async (req, res) => {
  try {
    const { nome, descricao, duracao } = req.body;
    const novoCurso = new Curso({ nome, descricao, duracao });
    await novoCurso.save();
    res.status(201).json(novoCurso);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar curso: " + error.message });
  }
};


export const listarCurso = async (req, res) => {
  try {
    const cursos = await Curso.find();
    res.status(200).json(cursos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar cursos: " + error.message });
  }
};


export const editarCurso = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, descricao, duracao } = req.body;

    const cursoAtualizado = await Curso.findByIdAndUpdate(
      id,
      { nome, descricao, duracao },
      { new: true } 
    );

    if (!cursoAtualizado) {
      return res.status(404).json({ error: "Curso não encontrado" });
    }

    res.status(200).json(cursoAtualizado);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar curso: " + error.message });
  }
};


export const removerCurso = async (req, res) => {
  try {
    const { id } = req.params;
    const cursoRemovido = await Curso.findByIdAndDelete(id);

    if (!cursoRemovido) {
      return res.status(404).json({ error: "Curso não encontrado" });
    }

    res.status(200).json({ message: "Curso removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao remover curso: " + error.message });
  }
};