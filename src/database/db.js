// importando a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose() //informações por mensagens

// criando o objeto que irá  fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizando o objeto de banco de dados para as operações
// db.serialize(() => {
     
//     /// COMANDOS SQL:
    
//     //1 - Criar uma tabela
//     ///Estruturando dados que irá conter na tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     //2 - Inserir dados na tabela
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `

//     const values = [
//         "https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1174&q=80",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Nº 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

//     //Feedback do database com relação aos daddos, uma função OBRIGATÓRIA que será aplicada como parâmetro em "db.run(query, values, afterInsertData)"
//     function afterInsertData(err){
//         if (err) {
//             return console.log(err)
//         }
//         console.log("Cadastro realizado com sucesso!")
//         console.log(this) //referencia a resposta do function  
//     }

//     db.run(query, values, afterInsertData)

//     //3 - Consultar os dados da tabela
//     // db.all(`SELECT * FROM places`, function(err, rows){
//     //     if(err) {
//     //         return console.log(err)
//     //     }
//     //     console.log("Aqui estão seus registros, tudo OK!: ")
//     //     console.log(rows)
//     // })


    // 4 - Deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso, nice work!")
    // })
    
// })
