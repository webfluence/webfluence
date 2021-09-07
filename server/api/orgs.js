const router = require("express").Router();
const dotenv = require("dotenv").config();
const axios = require("axios");
const fetch = require("node-fetch");
var clearbit = require("clearbit")(process.env.CLEARBIT_API_ID2);

module.exports = router;

const OPENSECRET_API_ID = process.env.OPENSECRET_API_ID;

router.get("/:orgName", function (req, res) {
  const url = `https://www.opensecrets.org/api/?method=getOrgs&org=${req.params.orgName}&apikey=${OPENSECRET_API_ID}&output=json`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/:orgName/:orgId", function (req, res) {
  const url = `http://www.opensecrets.org/api/?method=orgSummary&id=${req.params.orgId}&apikey=${OPENSECRET_API_ID}&output=json`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/:orgName/:ordId/info", async (req, res) => {
  const NameToDomain = clearbit.NameToDomain;
  const Company = clearbit.Company;
  try {
    const { domain } = await NameToDomain.find({ name: req.params.orgName });
    console.log(`domain`, domain)
    const info = await Company.find({ domain: domain });
    res.json(info);
  } catch (err) {
    res.send(err)
    console.log(
      "Bad/invalid request, unauthorized, Clearbit error, or failed request"
    );
  }
});

