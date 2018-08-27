var mongoose = require('mongoose');  
const UserModel = require('./User');
const CategoryModel = require('./Category');
const RegionModel = require('./Region');
const ComunneModel = require('./Commune');

const Schema = mongoose.Schema;

var ArticleSchema = new Schema({  
  title: String,
  description: String,
  price: Number,
  user: { type : Schema.ObjectId, ref : 'User' },
  category: { type : Schema.ObjectId, ref : 'Category' },
  region: { type : Schema.ObjectId, ref : 'Region' },
  comunne: { type : Schema.ObjectId, ref : 'Comunne' }
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