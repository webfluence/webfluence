const router = require('express').Router()
const { models: { Candidates }} = require('../db')

router.get('/', (req, res, next) => {
  Candidates.findAll()
    .then(candidates => res.json(candidates))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Candidates.findByPk(req.params.id)
    .then(candidate => res.json(candidate))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Candidates.create(req.body)
    .then(candidate => res.json(candidate))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Candidates.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(() => res.sendStatus(204))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Candidates.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.sendStatus(204))
    .catch(next)
})


module.exports = router
