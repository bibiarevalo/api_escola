import express from "express"
import cors from "cors"
import alunoRouter from '../routers/alunoRouter'
import cursoRouter from '../routers/cursoRouter'
import disciplinaRouter from '../routers/disciplinaRouter'
import professorRouter from '../routers/professorRouter'
import turmaRouter from '../routers/turmaRouter'

porta = 5000

const app = express()
app.use(cors())
app.use(json())

app.use('/aluno', alunoRouter);
app.use('/curso', cursoRouter);
app.use('/disciplina', disciplinaRouter);
app.use('/professor', professorRouter);
app.use('/turma', turmaRouter);

app.listen(porta, () => { console.log("server rodando") })