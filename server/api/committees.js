const router = require('express').Router()
const { models: { Committee }} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const committees = await Committee.findAll()
    res.json(committees)
  } catch (error) {
    next(error)
  }
})

// Find a committee by their cmte_id/pacid
router.get('/:id', async (req, res, next) => {
  try {
    const pacs = await Committee.findAll({where: {
      cmte_id: req.params.id
    }})
    res.json(pacs)
  } catch (err) {
    next(err)
  }
})

router.get('/pacshort/:pacshort', async (req, res, next) => {
  console.log("hello")
  let name = req.params.pacshort
  if(name.includes('+')) {
    name = name.split('+').join(' ')
  }
  try {
    const pacshort = await Committee.findOne({where: {
      pacshort: name
      }})
    res.json(pacshort)
    } catch (err) {
      next(err)
    }
})

router.get('/:id', async (req, res, next) => {
  try {
    const committee = await Committee.findByPk(req.params.id)
    res.json(committee)
  } catch (error) {
    next(error)
  }
})

module.exports = router
