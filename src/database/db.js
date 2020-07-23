const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

/*db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS places(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        ); 
    `)

    const query = `
    INSERT INTO places (
        image, name, address, address2, state, city, items
    ) VALUES (
        ?, ?, ?, ?, ?, ?, ?
    );`

    const values = [
        "https://images.unsplash.com/photo-1545303234-a34381f8b5cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Colletive",
        "Avenida Ipanema",
        "número 5870",
        "São Paulo",
        "Sorocaba",
        "Resíduos Eletrônicos e Lâmpadas"
    ]

    db.run(query, values, function(err) {
        if(err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    })

    db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
        if(err){
            return console.log(err)
        }

        console.log("registro deletado")
    })

    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }

        console.log("registros")
        console.log(rows)
    })
})*/