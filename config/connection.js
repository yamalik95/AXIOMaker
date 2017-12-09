//initiates connection to mysql database
var mysql = require('mysql') 

var source = {
	localhost: {
		port: 3306,
		host: "localhost",
		user: "root",
		password: "",
		database: "axioms_db"
	}
}

var connection = mysql.createConnection(source.localhost)

connection.connect(function(err) {
	if (err) {
		console.log('error connecting: ' + err.stack)
		return
	}
	console.log("Connected as id " + connection.threadId)
})

module.exports = connection