// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var axiom = {
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res)
    })
  },
  insert: function(axiomText, cb) {
    orm.insertOne(axiomText, function(res) {
      cb();
    });
  },
  update: function(isClaimed, idToUpdate, cb) {
    orm.updateOne(isClaimed, idToUpdate, function(res) {
      cb();
    });
  }
};

module.exports = axiom;