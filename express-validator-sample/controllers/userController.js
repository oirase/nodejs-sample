const { body, validationResult } = require('express-validator')

exports.index= function(req, res, next){
  res.render('index')
}

exports.index_post = [
body('username').isEmail().withMessage('First name must be specified.'),
body('password').isAlphanumeric(),
function(req, res, next){
  const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    res.render('index', { status: 'success', request: req, response: res })
  }
]

