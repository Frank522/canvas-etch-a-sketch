var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ImageSchema = new Schema({
    url: { type: String },
});

module.exports = mongoose.model('Image', ImageSchema);