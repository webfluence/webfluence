const router = require("express").Router();
const Sequelize = require("sequelize");
const {
  models: { PAC },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const pacs = await PAC.findAll();
    res.json(pacs);
  } catch (err) {
    next(err);
  }
}),
  // Find all PACs who donated to candidate by CID
  router.get("/crpid/:cid", async (req, res, next) => {
    try {
      const pacs = await PAC.findAll({
        where: {
          cid: req.params.cid,
        },
        attributes: [
          "pacid",
          "cid",
          [Sequelize.fn("sum", Sequelize.col("amount")), "total_amount"],
        ],
        group: ["pacid", "cid"],
      });

      let newArray = pacs.sort((a, b) => {
        if (a.dataValues.total_amount > b.dataValues.total_amount) {
          return -1;
        } else if (a.dataValues.total_amount < b.dataValues.total_amount) {
          return 1;
        } else {
          return 0;
        }
      })
      res.json(newArray);
    } catch (err) {
      next(err);
    }
  });

// router.post('/', async (req, res, next) => {
//   try {
//     const pac = await PAC.create(req.body)
//     res.status(201).json(pac)
//   } catch (err) {
//     next(err)
//   }
// })

// router.get('/:id', async (req, res, next) => {
//   try {
//     const pac = await PAC.findByPk(req.params.id)
//     res.json(pac)
//   } catch (err) {
//     next(err)
//   }
// }),

// router.put('/:id', async (req, res, next) => {
//   try {
//     const pac = await PAC.findByPk(req.params.id)
//     await pac.update(req.body)
//     res.json(pac)
//   } catch (err) {
//     next(err)
//   }
// }),

// router.delete('/:id', async (req, res, next) => {
//   try {
//     const pac = await PAC.findByPk(req.params.id)
//     await pac.destroy()
//     res.status(204).end()
//   } catch (err) {
//     next(err)
//   }
// }),

module.exports = router;
