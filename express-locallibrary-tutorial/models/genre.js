var mongoose = require('mongoose');

var Schema = mongoose.Schema

var GenreScheme = new Schema({
  name: {
     type: String,
     requied: true,
     minlength: 3,
     maxlength: 100
  }
})

GenreScheme
.virtual('url')
get(function() {
  return '/catalog/genre/' + this._id
})

module.exports = mongoose.model('Genre', GenreScheme)
