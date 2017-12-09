var connection = require('./connection.js')

//object relational mapping

var orm = {
	selectAll: function(cb) {
		var sql = "SELECT * FROM axioms"
		connection.query(sql, function(err, res) {
			cb(res)
		})
	},
	insertOne: function(axiomText) {
		var sql = "INSERT INTO axioms (axiom, claimed) VALUES (?, NULL)"
		connection.query(sql, [axiomText], function(err, result) {
			if (err) throw err
			console.log("Record has been inserted!")
		})
	},
	updateOne: function(isClaimed, idToUpdate) {
		var sql = "UPDATE axioms SET claimed = ? where id = ?"
		connection.query(sql, [isClaimed, idToUpdate], function(err, result) {
			if (err) throw err
			console.log("Record has been updated!")
		})
	} 
}


module.exports = orm