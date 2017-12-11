var express = require('express')
var axiom = require('../models/axioms.js')

var router = express.Router()

var axiom = require('../models/axioms.js')

router.get('/', function(request, result) {
	axiom.all(function(res) {
		axiomObj = {axioms:[]}
		claimed = {axioms:[]}
		for (var i = 0; i < res.length; i++) {
			if (res[i].claimed !== 1) {
				axiomObj.axioms.push(res[i])
			} else {
				claimed.axioms.push(res[i])
			}
		}
		console.log(axiomObj)
		result.render('index', {axiomsObj: axiomObj, claimed: claimed})
	})
})

router.post('/api/axiom', function(request, result) {
	var callback = function() {
		result.redirect('/')
	}
	axiom.insert(request.body.axiom, callback())
})

router.get('/api/claim/:id', function(request, result) {
	var callback = function() {
		result.redirect('/')
	}
	axiom.update(true, request.params.id, callback())
})

module.exports = router