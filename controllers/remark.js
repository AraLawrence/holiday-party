var express = require('express');
var Remark = require('../models/remark');
var router = express.Router();

router.route('/').get(function(req, res) {
	Remark.find(function(err, remark) {
		if(err) return res.status(500).send(err);
		res.send(remark);
	})
}).post(function(req, res) {
	Remark.create(req.body, function(err, remark) {
		if(err) return res.status(500).send(err);
		res.send(remark);
	})
});

router.route('/:id').get(function(req, res) {
	Remark.findById(req.params.id, function(err, remark) {
		if(err) return res.status(500).send(err);
		res.send(remark);
	});
}).put(function(req, res) {
		Remark.findByIdAndUpdate(req.params.id, req.body, function(err) {
			if(err) return res.status(500).send(err);
			res.send({'message': 'success'});
		});
	}).delete(function(req, res) {
		Remark.findByIdAndRemove(req.params.id, function(err) {
			if(err) return res.status(500).send(err);
			res.send({'message': 'success'});
		})
	});

module.exports = router;