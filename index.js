"use strict"

const express = require('express')
const fs = require('fs')
const ejs = require('ejs')
const path = require('path')
//const cookieParser = require('cookie-parser')
//const session = require('express-session')
const app = express()

app.engine('ejs', ejs.renderFile)
//const indexPage = fs.readFileSync('index.html', 'utf-8')
//app.use(express.static(path.join(__dirname, 'public')))
//app.use(cookieParser())
/*
app.use(session({
    secret: 'hoge',
    resave: true,
  saveUninitialized: true
}))
*/
app.get('/', (req, res) => {
  //let cnt = req.session.cnt == undefined ? 0 : req.session.cnt
  const cnt = 5
  //cnt++
  //req.session.cnt = cnt
  res.render('temp.ejs', { cnt })
})

/*
app.get('/', (req, res) => {
  let cnt = req.cookies.cnt == undefined ? 0 : req.cookies.cnt
  cnt++
  res.cookie('cnt', cnt, {maxAge: 5000})
  res.render('temp.ejs', { cnt })
})
*/

const server = app.listen(process.env.PORT || 3000, ()=>{
  console.log('server')
})
