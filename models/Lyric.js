var mongoose = require ('mongoose');

var LyricSchema = new mongoose.Schema ({
  SongTitle: String
});

module.exports = mongoose.model('Lyric', LyricSchema);
