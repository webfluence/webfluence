//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Candidate = require('./models/Candidate')
const Committee = require('./models/Committee')
const PAC = require('./models/PAC')
const Individuals = require('./models/Individuals')
const PACSum = require('./models/PACSum')
//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Candidate,
    Committee,
    PAC,
    Individuals,
    PACSum
  },
}
