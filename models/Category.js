var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
    nombre: String,
    description: String
});

mongoose.model('Category', CategorySchema);

module.exports = mongoose.model('Category');