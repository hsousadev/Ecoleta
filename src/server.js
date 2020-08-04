const express = require("express")
const server = express()

// Configurar pasta publica
server.use(express.static("public"))

// habilitar o uso do req. body na nossa aplicação
server.use(express.urlencoded({extended: true})) 

//pegando  banco de dados
const db = require("./database/db.js")

// utilizando template engine
const nunjucks = require("nunjucks")
const { query } = require("express")
nunjucks.configure("src/views", {
    express: server, 
    noCache: true
})

// configurar caminhos da aplicação


// página inicial (index)
/// req.: Requisição
/// res.: Resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})

// create-point
server.get("/create-point", (req, res) => {
    

    //res.query: a Query de strings da nossa url (dados passados na url)
    // console.log(req.query)
    return res.render("create-point.html")
   

})

server.post("/savepoint", (req, res) => {

    //req.body: O corpo do nosso formulário
    //console.log(req.body)

    //inserir dados no banco de dados

    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if(err) {
            console.log(err)
            return res.send("Erro no cadastro!")
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
        
        return res.render("create-point.html", {saved: true})
    }
    
    db.run(query, values, afterInsertData) 

})






//search-results
server.get("/search", (req, res) => {

    const search = req.query.search
    
    if(search == "") {
        // pesquisa vazia
        return res.render("search-results.html", {total: 0})

    }

    //consulta os dados do database para retornar os valores na página HTML de search
    db.all(`SELECT * FROM places WHERE city = '${search}'`, function(err, rows){
        if(err) {
            return console.log(err)
        }
        console.log("Aqui estão seus registros, tudo OK!: ")
        console.log(rows)

        const total = rows.length //Conta o números de linhas (dados) encontrados
        
        //mostrando a página HTML com os dados do database
        return res.render("search-results.html", {places: rows, total})
    })
    
})




// ligar servidor na porta
server.listen(3000)


