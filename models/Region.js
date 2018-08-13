const mongoose = require('mongoose');

var RegionSchema = new mongoose.Schema({
    name: String,
    ordinal: String
});
mongoose.model('Region', RegionSchema);

module.exports = mongoose.model('Region');