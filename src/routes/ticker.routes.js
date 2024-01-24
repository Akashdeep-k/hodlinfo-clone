const router = require("express").Router();

const { fetchTickerData } = require("../controllers/ticker.controllers.js");

router.get("/fetchTickerData", fetchTickerData);

module.exports = router;