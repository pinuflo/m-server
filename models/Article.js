var mongoose = require('mongoose');  
var ArticleSchema = new mongoose.Schema({  
  title: String,
  description: String,
  precio: Number
});
mongoose.model('Article', ArticleSchema);

module.exports = mongoose.model('Article');