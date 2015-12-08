var mongoose = require('mongoose');

var AffirmSchema = new mongoose.Schema({
	category: Array,
	comment: String
});

module.exports = mongoose.model('Affirm', AffirmSchema);