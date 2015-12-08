var mongoose = require('mongoose');

var RemarkSchema = new mongoose.Schema({
	category: Array,
	comment: String
});

module.exports = mongoose.model('Remark', RemarkSchema);