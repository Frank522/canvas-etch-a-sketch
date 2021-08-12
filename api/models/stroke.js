var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Schema = new Schema({
    items: [{ type: Schema.Types.ObjectId, ref: 'Line' }],
});

module.exports = mongoose.model('History', HistorySchema);