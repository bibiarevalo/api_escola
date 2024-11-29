import express from "express"
import {criarCurso,listarCurso,editarCurso,removerCurso} from "../controllers/cursoController.js"
const router = express.Router();

router.post('/criar', criarCurso);
router.get('/listar', listarCurso);
router.put('/atualizar/:id', editarCurso);
router.delete('/remover/:id', removerCurso);

export default router; 