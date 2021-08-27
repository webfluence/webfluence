const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/pac', require('./pac'))
router.use('/candidate', require('./candidates'))
router.use('/committee', require('./committees'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
