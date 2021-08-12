var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HistorySchema = newSchema({
  items: [{ type: Schema.Types.ObjectId }],
});

module.exports = mongoose.model('History', HistorySchema);
