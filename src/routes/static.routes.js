const router = require("express").Router();
const client = require("../db.js");

router.get("/", async (req, res) => {
    const { rows } = await client.query("SELECT * from ticker_data");
    // console.log(rows);
    res.render("home", { tickers: rows });
})

module.exports = router;