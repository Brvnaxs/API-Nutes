const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

let banco_de_dados = [ 
    { "1": {nome: "teste01", numero: "01"}}
]
//Retorna dados do "banco de dados".
app.get('/', (req, res) => {
    return res.json(banco_de_dados)
})
//Adiciona dados ao banco de dados.
app.post('/adicioneUmTeste',(req, res)=>{
    const body = req.body
    banco_de_dados.push(body)
    return res.send("Teste adicionado com sucesso!")
})
app.listen(3000, () =>{
    console.log('API rodando na porta: http://localhost:3000')
})