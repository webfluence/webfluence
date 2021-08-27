const router = require("express").Router();
const {
  models: { Candidate },
} = require("../db");

router.get("/", (req, res, next) => {
  Candidate.findAll({ where: { cid: req.candidate.cid } })
    .then((candidates) => res.json(candidates))
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Candidate.findAll({ where: { cid: req.params.id } })
    .then((candidate) => res.json(candidate))
    .catch(next);
});

module.exports = router;
