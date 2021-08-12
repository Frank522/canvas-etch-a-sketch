var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ImageSchema = newSchema({
    url: { type: String },
});

module.exports = mongoose.model('History', HistorySchema);