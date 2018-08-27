var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
    name: String,
    description: String,
    id_category: {type : Schema.ObjectId, ref: 'Category'}
});

mongoose.model('Category', CategorySchema);

module.exports = mongoose.model('Category');