const pg = require("pg")

const client = new pg.Client(process.env.POSTGRES_URI)

module.exports = client;