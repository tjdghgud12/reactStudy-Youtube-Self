const { Client } = require('pg')

const pg = new Client("postgres://seonghohyeong:@localhost:5432/seonghohyeong")



module.exports = {pg}