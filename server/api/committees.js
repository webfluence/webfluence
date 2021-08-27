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

router.get('/:id', async (req, res, next) => {
  try {
    const committee = await Committee.findByPk(req.params.id)
    res.json(committee)
  } catch (error) {
    next(error)
  }
})

// router.post('/', async (req, res, next) => {
//   try {
//     const committee = await Committee.create(req.body)
//     res.json(committee)
//   } catch (error) {
//     next(error)
//   }
// })

// router.put('/:id', async (req, res, next) => {
//   try {
//     const committee = await Committee.findByPk(req.params.id)
//     await committee.update(req.body)
//     res.json(committee)
//   } catch (error) {
//     next(error)
//   }
// })

// router.delete('/:id', async (req, res, next) => {
//   try {
//     const committee = await Committee.findByPk(req.params.id)
//     await committee.destroy()
//     res.json(committee)
//   } catch (error) {
//     next(error)
//   }
// })

module.exports = router
