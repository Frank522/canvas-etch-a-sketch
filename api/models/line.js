var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LineSchema = new Schema({
    xStart: { type: Number, required: true },
    xEnd: { type: Number, required: true },
    yStart: { type: Number, required: true },
    yEnd: { type: Number, required: true }
})

module.exports = mongoose.model('Line', LineSchema);