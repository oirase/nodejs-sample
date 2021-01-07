const { body, validationResult } = require('express-validator')

exports.index= function(req, res, next){
  res.render('index')
}

exports.index_post = [
body('username').isEmail(),
body('password').isLength({ min: 5 }),
function(req, res, next){
  const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    res.send('success!!')
  }
]

