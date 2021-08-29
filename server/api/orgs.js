const router = require('express').Router()
const dotenv = require("dotenv").config();
const axios = require('axios')
const fetch   = require('node-fetch');

module.exports = router

const OPENSECRET_API_ID = process.env.OPENSECRET_API_ID


router.get('/:orgName', function (req, res) {
    const url = `https://www.opensecrets.org/api/?method=getOrgs&org=${req.params.orgName}&apikey=${OPENSECRET_API_ID}&output=json`

    fetch(url)
    .then(response => response.json())
    .then(data => {
     res.json(data);
    })
  .catch(err => {
      res.send(err);
  });

})

router.get('/:orgName/:orgId', function (req,res) {
    const url = `http://www.opensecrets.org/api/?method=orgSummary&id=${req.params.orgId}&apikey=${OPENSECRET_API_ID}&output=json`

    fetch(url)
    .then(response => response.json())
    .then(data => {
     res.json(data);
    })
  .catch(err => {
      res.send(err);
  });

})