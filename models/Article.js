var mongoose = require('mongoose');  
const UserModel = require('./User');
const CategoryModel = require('./Category');
const RegionModel = require('./Region');
const ComunneModel = require('./Comunne');

var ArticleSchema = new mongoose.Schema({  
  title: String,
  description: String,
  price: Number,
  user: [UserModel],
  category: [CategoryModel],
  region: [RegionModel],
  comunne: [ComunneModel]
});

let ArticleModel = mongoose.model('Article', ArticleSchema);

ArticleModel.getAll = () => {
  return ArticleModel.find({});
}

ArticleModel.addArticle = (article) => {
  return article.save();
}

ArticleModel.detail = (article_id) => {
  return ArticleModel.findById(article_id);
}

ArticleModel.removeArticle = (article_id) => {
  return ArticleModel.findByIdAndRemove(article_id);
}

module.exports = mongoose.model('Article');