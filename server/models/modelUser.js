const { Client, Pool } = require('pg')

const pg = new Client("postgres://seonghohyeong:aqighgud88@3@localhost:5432/seonghohyeong")


module.exports = {pg}