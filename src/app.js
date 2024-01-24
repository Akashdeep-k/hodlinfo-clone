require("dotenv").config();
const { API_VERSION, PORT } = require("./constants.js");

const express = require("express");
const client = require("./db.js");
const morgan = require("morgan");
const path = require("path");
const createTableQuery = require("./models/ticker.models.js");

const staticRouter = require("./routes/static.routes.js");
const tickerRouter = require("./routes/ticker.routes.js");

; (async () => {
    try {
        try {
            await client.connect();
            console.log("DATABASE CONNECTED !!!");
        } catch (e) {
            console.log("ERROR CONNECTING TO DATABASE !!!", e);
        }
        try {
            await client.query(createTableQuery);
            console.log("Table created");
        } catch (e) {
            console.log("Error creating table", e);
        }
        const app = express();

        const publicPath = path.join(__dirname, "public");
        app.use(morgan("dev")); // Logs incoming HTTP requests
        app.use(express.static(publicPath));
        app.set("view engine", "ejs");
        app.set("views", path.resolve("./src/views"));

        app.use("/", staticRouter);
        app.use(`${API_VERSION}/tickers`, tickerRouter);

        app.listen(PORT, () => {
            console.log(`Server successfully running on port ${PORT}...`);
        });
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
})();