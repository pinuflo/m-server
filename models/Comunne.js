const mongoose = require('mongoose');
const RegionModel = require('./Region');

var CommuneSchema = new mongoose.Schema({
    name: String,
    region: [RegionModel]
});

mongoose.model('Region', CommuneSchema);

module.exports = mongoose.model('Region');