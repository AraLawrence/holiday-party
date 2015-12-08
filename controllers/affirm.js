var express = require('express');
var Affirm = require('../models/affirm');
var router = express.Router();

router.route('/').post(function(req, res) {
	Affirm.create(req.body, function(err, affirm) {
		if(err) return res.status(500).send(err);
		res.send(affirm);
	});
}).get(function(req, res) {
	Affirm.find(function(err, affirm) {
		if(err) return res.status(500).send(err);
		res.send(affirm);
	});
});

router.route('/:id').get(function(req, res) {
	Affirm.findById(req.params.id, function(err, affirm) {
		if(err) return res.status(500).send(err);
		res.send(affirm);
	});
}).put(function(req, res) {
	Affirm.findByIdAndUpdate(req.params.id, req.body, function(err) {
		if(err) return res.status(500).send(err);
		res.send({'message': 'success'});
	})
}).delete(function(req, res) {
	Affirm.findByIdAndRemove(req.params.id, function(err) {
		if(err) return res.status(500).send(err);
		res.send({'message': 'success'});
	});
})

module.exports = router;