 import express from "express"
 import conectaNobanco from "./config/dbConnect.js"
 import post from "./model/post.js"
import usuario from "./model/usuario.js"
 

 const conexao = await conectaNobanco()

 //evento de  conexão de erro
 conexao.on("error",(erro) =>{
  console.error("erro de conexão", erro)
 })

 // conexão aberta
  conexao.once("open", () =>{
    console.log("conexão com o banco feita com sucesso")
  })


 const app = express()

 // middleware, roda requisicao e resposta passa por aqui e  o body é transformado and json
 app.use(express.json())



 app.get("/",(req,res) =>{
    res.status(200).json(post)
 })


 app.get("/posts", async  (req,res) => {
  const listaPosts = await post.find({})
   res.status(200).json(listaPosts)
 })

 app.get("/usuarios", async  (req,res) => {
  const listaPosts = await post.find({})
   res.status(200).json(listaPosts)
 })

 app.get("/posts/:id", (req,res) =>{
  const index = buscarLivro(req .params.id)
  res.status(200).json(livros[index])

 })


 app.post("/posts", (req,res) =>{ 
  livros.push(req.body)
   res.status(201).send("livro criado com sucesso")
 })

 app.put("/posts/:id", (req,res) =>{
  const index = buscarLivro(req.params.id)
  livros[index].titulo = req.body.titulo
  res.status(200).json(livros[index])
 })


 app.delete("/posts/:id", (req,res) =>{
  const index = buscarLivro(req.params.id)
  livros.splice(index,1)
  res.status(200).send("elemento apagado")
 })

 export default app