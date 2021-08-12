var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HistorySchema = new Schema({
  name: { type: String },
  items: [{ type: Schema.Types.ObjectId }],
});

module.exports = mongoose.model('History', HistorySchema);
