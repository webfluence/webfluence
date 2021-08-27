const router = require('express').Router()
const dotenv = require("dotenv").config();
const axios = require('axios')
const fetch   = require('node-fetch');

module.exports = router

const OPENSECRET_API_ID = process.env.OPENSECRET_API_ID


router.get('/:crp_id', function (req, res) {
    const url = `https://www.opensecrets.org/api/?method=candContrib&cid=${req.params.crp_id}&cycle=2020&apikey=${OPENSECRET_API_ID}&output=json`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        res.json(data);
      })
    .catch(err => {
        res.send(err);
    });
});