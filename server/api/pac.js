const router = require("express").Router();
const Sequelize = require("sequelize");
const {
  models: { PAC, Committee, Candidate, PACSum },
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

    const returnArray = await Promise.all(
      pacs.map(async (obj) => {
        const pacData = await Committee.findOne({
          where: {
            cmte_id: obj.dataValues.pacid,
          },
        });
        obj.dataValues.pacname = pacData
          ? pacData.pacshort
          : "No data available";

        return obj;
      })
    );

    let newArray = returnArray.sort((a, b) => {
      if (a.dataValues.total_amount > b.dataValues.total_amount) {
        return -1;
      } else if (a.dataValues.total_amount < b.dataValues.total_amount) {
        return 1;
      } else {
        return 0;
      }
    });
    res.json(newArray);
  } catch (err) {
    next(err);
  }
});

// Find all Candidates who received money from pac by pacid

router.get("/pacid/:pacid", async (req, res, next) => {
  try {
    const candidates = await PAC.findAll({
      where: {
        pacid: req.params.pacid,
      },
      attributes: [
        "pacid",
        "cid",
        [Sequelize.fn("sum", Sequelize.col("amount")), "total_amount"],
      ],
      group: ["pacid", "cid"],
    });

    const returnArray = await Promise.all(
      candidates.map(async (obj) => {
        const candidateData = await Candidate.findOne({
          where: {
            cid: obj.dataValues.cid,
          },
        });
        obj.dataValues.candname = candidateData
          ? candidateData.firstlastp
          : "No data available";
        return obj;
      })
    );

    let newArray = returnArray.sort((a, b) => {
      if (a.dataValues.total_amount > b.dataValues.total_amount) {
        return -1;
      } else if (a.dataValues.total_amount < b.dataValues.total_amount) {
        return 1;
      } else {
        return 0;
      }
    });
    res.json(newArray);
  } catch (err) {
    next(err);
  }
});

router.get("/pacidsum/:pacid", async (req, res, next) => {
  try {
    const candidates = await PACSum.findAll({
      where: {
        pacid: req.params.pacid,
      },
      attributes: [
        "pacid",
        "cid",
        "amount"
      ],
      // group: ["pacid", "cid"],
    });

    // const returnArray = await Promise.all(
    //   candidates.map(async (obj) => {
    //     const candidateData = await Candidate.findOne({
    //       where: {
    //         cid: obj.dataValues.cid,
    //       },
    //     });
    //     obj.dataValues.candname = candidateData
    //       ? candidateData.firstlastp
    //       : "No data available";
    //     return obj;
    //   })
    // );

    // let newArray = returnArray.sort((a, b) => {
    //   if (a.dataValues.total_amount > b.dataValues.total_amount) {
    //     return -1;
    //   } else if (a.dataValues.total_amount < b.dataValues.total_amount) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // });
    res.json(candidates);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
