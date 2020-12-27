const express = require('express')
const app = express();
const mongoose = require('mongoose');
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

mongoDB = 'mongodb://db/study';
mongoose.connect(mongoDB,  { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

var Schema = mongoose.Schema;
var BookSchema = new Schema({
    name: {type: String, required: true},
})
const Book = mongoose.model('Book', BookSchema);
const artbook = new Book({ name: 'artbook' })
artbook.save().then(() => console.log('success'))

app.use('/', function(res,req) {
  res.render('index', { count: artbook.countDocuments })
})

app.listen(3000)
