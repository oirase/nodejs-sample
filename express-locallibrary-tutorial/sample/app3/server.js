const express = require('express')
const app = express();
const mongoose = require('mongoose');

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

mongoDB = 'mongodb://0.0.0.0/study';
mongoose.connect(mongoDB,  { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
s
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
